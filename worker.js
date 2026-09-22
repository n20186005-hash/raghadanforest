// Cloudflare Worker: serves the static site (via the ASSETS binding) and proxies
// the weather data server-side with edge caching.
// Weather data is fetched from a public weather API and cached at the edge for
// ~10 minutes to protect the upstream and keep responses fast.

const CACHE_TTL = 600; // seconds

function safeCoord(value, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return String(Math.max(-90, Math.min(90, n))).slice(0, 12);
}

async function handleWeather(request, url, ctx) {
  const lat = safeCoord(url.searchParams.get('lat'), '20.0220551');
  const lon = safeCoord(url.searchParams.get('lon'), '41.4334279');

  const apiUrl =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=' + lat +
    '&longitude=' + lon +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max' +
    '&timezone=auto&forecast_days=7&wind_speed_unit=kmh';

  const cache = caches.default;
  const cacheKey = new Request(apiUrl, { method: 'GET' });

  let response = await cache.match(cacheKey);
  if (!response) {
    const upstream = await fetch(apiUrl, {
      headers: { 'user-agent': 'raghadan-guide-weather/1.0' }
    });
    if (!upstream.ok) {
      return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
        status: 502,
        headers: { 'content-type': 'application/json; charset=utf-8' }
      });
    }
    const body = await upstream.text();
    response = new Response(body, {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=' + CACHE_TTL + ', stale-while-revalidate=' + CACHE_TTL * 2
      }
    });
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
  }

  const headers = new Headers(response.headers);
  headers.set('access-control-allow-origin', '*');
  return new Response(response.body, { status: response.status, headers });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      return handleWeather(request, url, ctx);
    }
    // Everything else is served from the static build.
    return env.ASSETS.fetch(request);
  }
};
