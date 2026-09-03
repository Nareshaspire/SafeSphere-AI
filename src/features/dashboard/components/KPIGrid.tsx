import { AlertTriangle, ShieldAlert } from "lucide-react";
import StatCard from "../../../shared/components/ui/StatCard";
import { useWeather } from "../../weather/hooks/useWeather";
import { getWeatherIcon } from "../../weather/utils/weatherIcon";
import AIStatus from "./AIStatus";

interface KPIGridProps {
  risk: number;
  riskLevel: string;
  alerts: number;
  resources: number;
}

export default function KPIGrid({
  risk,
  riskLevel,
  alerts,
}: KPIGridProps) {
  const weather = useWeather();
  const WeatherIcon = getWeatherIcon(weather.condition);

  return (
    <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Current Weather"
        value={weather.temperature}
        subtitle={`${weather.condition} • Wind ${weather.wind} km/h`}
        icon={WeatherIcon}
        color="text-sky-400"
        suffix="°C"
      />

      <StatCard
        title="Community Risk"
        value={risk}
        subtitle={riskLevel}
        icon={ShieldAlert}
        color={risk > 70 ? "text-red-500" : "text-amber-500"}
        suffix="%"
      />

      <StatCard
        title="Active Alerts"
        value={alerts}
        subtitle="Emergency Notifications"
        icon={AlertTriangle}
        color="text-amber-500"
      />

      <AIStatus />

    </div>
  );
}