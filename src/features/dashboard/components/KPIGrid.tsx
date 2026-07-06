import {
    Ambulance,
    Bell,
    TriangleAlert,
} from "lucide-react";

import StatCard from "../../../shared/components/ui/StatCard";
import { useWeather } from "../../weather/hooks/useWeather";
import { getWeatherIcon } from "../../weather/utils/weatherIcon";

interface Props {
  risk: number;
  riskLevel: string;
  alerts: number;
  resources: number;
}

export default function KPIGrid({
  risk,
  riskLevel,
  alerts,
  resources,
}: Props) {
  const weather = useWeather();

  const WeatherIcon = getWeatherIcon(weather.condition);

  return (
    <div className="mb-8 grid gap-6 lg:grid-cols-4">

      <StatCard
        title="Current Weather"
        value={parseInt(weather.temperature)}
        suffix="°C"
        subtitle={`${weather.condition} • Wind ${weather.wind}`}
        icon={WeatherIcon}
        color="text-sky-500"
      />

      <StatCard
        title="Community Risk"
        value={risk}
        suffix="%"
        subtitle={riskLevel}
        icon={TriangleAlert}
        color="text-red-500"
      />

      <StatCard
        title="Active Alerts"
        value={alerts}
        subtitle="Emergency Notifications"
        icon={Bell}
        color="text-yellow-400"
      />

      <StatCard
        title="Resources Ready"
        value={resources}
        subtitle="Available Units"
        icon={Ambulance}
        color="text-green-500"
      />

    </div>
  );
}