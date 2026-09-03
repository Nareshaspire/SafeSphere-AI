import { CloudSnow, Thermometer, Wind } from "lucide-react";
import { useWeather } from "../../weather/hooks/useWeather";

export default function WeatherPanel() {
  const weather = useWeather();

  return (
    <div className="glass-panel p-6">

      <h2 className="mb-5 text-xl font-bold text-white tracking-wide">
        Live Weather
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
          <Thermometer className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
          <span className="text-white font-medium">
            {weather.temperature}
          </span>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
          <CloudSnow className="text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
          <span className="text-slate-300 font-medium">
            {weather.condition}
          </span>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
          <Wind className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span className="text-slate-300 font-medium">
            {weather.wind}
          </span>
        </div>

      </div>

    </div>
  );
}