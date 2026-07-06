import { CloudSnow, Thermometer, Wind } from "lucide-react";
import { useWeather } from "../../weather/hooks/useWeather";

export default function WeatherPanel() {
  const weather = useWeather();

  return (
    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Live Weather
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <Thermometer className="text-red-400" />
          <span className="text-white">
            {weather.temperature}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CloudSnow className="text-sky-400" />
          <span className="text-slate-300">
            {weather.condition}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Wind className="text-cyan-400" />
          <span className="text-slate-300">
            {weather.wind}
          </span>
        </div>

      </div>

    </div>
  );
}