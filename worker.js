import { validWeather } from './public/weather-data.js';
const CACHE_TTL = 600;
function coordinate(value, fallback, limit) {
  if (value === null || value.trim() === '') return fallback;
  const n = Number(value);
  return Number.isFinite(n) && Math.abs(n) <= limit ? String(n) : fallback;
}
async function handleWeather(url, ctx) {
  const lat = coordinate(url.searchParams.get('lat'), '20.0221476', 90);
  const lon = coordinate(url.searchParams.get('lon'), '41.4332427', 180);
  const api = new URL('https://api.open-meteo.com/v1/forecast');
  api.search = new URLSearchParams({latitude:lat, longitude:lon,
    current:'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m',
    daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max',
    timezone:'auto',forecast_days:'7',wind_speed_unit:'kmh'}).toString();
  const key = new Request(api.href), cache = caches.default;
  try {
    const cached = await cache.match(key);
    if (cached && validWeather(await cached.clone().json())) return cached;
    const upstream = await fetch(api, {signal:AbortSignal.timeout(10000), headers:{'user-agent':'raghadan-guide-weather/1.0'}});
    if (!upstream.ok) throw Error('upstream');
    const data = await upstream.json();
    if (!validWeather(data)) throw Error('invalid or expired model data');
    const response = Response.json(data, {headers:{'Cache-Control':'public, max-age='+CACHE_TTL,'access-control-allow-origin':'*'}});
    ctx.waitUntil(cache.put(key, response.clone()));
    return response;
  } catch {
    return Response.json({error:'weather_unavailable'}, {status:502, headers:{'Cache-Control':'no-store','access-control-allow-origin':'*'}});
  }
}
async function missing(request, env) {
  const url = new URL(request.url); url.pathname = '/404.html'; url.search = '';
  const asset = await env.ASSETS.fetch(new Request(url));
  const headers = new Headers(asset.headers); headers.set('X-Robots-Tag','noindex, follow'); headers.set('Cache-Control','no-store');
  return new Response(request.method === 'HEAD' ? null : asset.body, {status:404,headers});
}
export default {async fetch(request, env, ctx) {
  const url = new URL(request.url);
  // Preserve the requested path/query when correcting known HTTP apex entrances.
  if (url.hostname === 'raghadanforest.com' && url.protocol !== 'https:') {url.protocol='https:';return Response.redirect(url.href,301);}
  if (!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
  if (['/404','/404/','/404.html','/404.html/'].includes(url.pathname)) return missing(request,env);
  if (url.pathname === '/api/weather') {const response=await handleWeather(url,ctx);return request.method==='HEAD'?new Response(null,response):response;}
  const response=await env.ASSETS.fetch(request);
  return response.status===404?missing(request,env):response;
}};
