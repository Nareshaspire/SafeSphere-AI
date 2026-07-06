import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherService";
import { getWeatherDescription } from "../utils/weatherCodes";

export function useWeather() {
  const [weather, setWeather] = useState({
    temperature: "--°C",
    condition: "Loading...",
    wind: "-- km/h",
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchWeather();

        setWeather({
          temperature: `${data.temperature}°C`,
          condition: getWeatherDescription(data.weatherCode),
          wind: `${data.wind} km/h`,
        });
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, []);

  return weather;
}