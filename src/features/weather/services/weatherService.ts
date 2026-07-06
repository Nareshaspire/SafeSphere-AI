export interface WeatherResponse {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

export async function fetchWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=46.4917&longitude=-80.9930&current=temperature_2m,wind_speed_10m,weather_code"
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather");
  }

  const data: WeatherResponse = await response.json();

  return {
    temperature: Math.round(data.current.temperature_2m),
    wind: Math.round(data.current.wind_speed_10m),
    weatherCode: data.current.weather_code,
  };
}