import AIBriefing from "../../ai/components/AIBriefing";
import { useWeather } from "../../weather/hooks/useWeather";
import AIStatus from "./AIStatus";
import ResourceHealth from "./ResourceHealth";
import WeatherPanel from "./WeatherPanel";

interface Props {
  risk: string;
  alerts: number;
  resources: number;
}

export default function RightSidebar({
  risk,
  alerts,
  resources,
}: Props) {
  const weather = useWeather();

  return (
    <div className="space-y-6">

      <AIStatus />

      <WeatherPanel />

      <ResourceHealth />

      <AIBriefing
        temperature={weather.temperature}
        condition={weather.condition}
        wind={weather.wind}
        risk={risk}
        alerts={alerts}
        resources={resources}
      />

    </div>
  );
}