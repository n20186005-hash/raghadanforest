// Open-Meteo model times are local ISO timestamps plus utc_offset_seconds.
// Reject missing/non-numeric values rather than rendering them as zero/current.
export function weatherAge(data, now = Date.now()) {
  const time = data?.current?.time, offset = data?.utc_offset_seconds;
  if (typeof time !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(time) || !Number.isFinite(offset) || Math.abs(offset) > 50400) return Infinity;
  return now - Date.parse(time + 'Z') + offset * 1000;
}
export function validWeather(data, now = Date.now()) {
  const age = weatherAge(data, now), current = data?.current, daily = data?.daily;
  if (!Number.isFinite(age) || age < -3600000 || age > 10800000 || !current || !daily) return false;
  if (!['temperature_2m', 'apparent_temperature', 'relative_humidity_2m', 'weather_code', 'wind_speed_10m'].every(key => Number.isFinite(current[key]))) return false;
  const days = daily.time;
  if (!Array.isArray(days) || days.length !== 7 || days[0] !== current.time.slice(0, 10)) return false;
  if (!days.every((day, i) => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) && Date.parse(day + 'T00:00:00Z') === Date.parse(days[0] + 'T00:00:00Z') + i * 86400000)) return false;
  return ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'precipitation_probability_max', 'uv_index_max'].every(key => Array.isArray(daily[key]) && daily[key].length === 7 && daily[key].every(Number.isFinite));
}
