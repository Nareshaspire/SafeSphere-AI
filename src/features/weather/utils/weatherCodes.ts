export function getWeatherDescription(code: number) {
  if (code === 0) return "Clear Sky";

  if ([1, 2, 3].includes(code)) return "Partly Cloudy";

  if ([45, 48].includes(code)) return "Fog";

  if ([51, 53, 55].includes(code)) return "Drizzle";

  if ([61, 63, 65].includes(code)) return "Rain";

  if ([71, 73, 75].includes(code)) return "Snow";

  if (code >= 95) return "Thunderstorm";

  return "Unknown";
}