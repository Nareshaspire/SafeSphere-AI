import KPIGrid from "./components/KPIGrid";
import MapPanel from "./components/MapPanel";
import IncidentTimeline from "./components/IncidentTimeline";
import ResourceHealth from "./components/ResourceHealth";
import AIBriefing from "../ai/components/AIBriefing";
import { useWeather } from "../weather/hooks/useWeather";
import { useMetrics } from "./hooks/useDashboardData";

export default function Dashboard() {
  const weather = useWeather();
  const metrics = useMetrics();

  return (
    <div className="min-h-screen bg-transparent p-4 lg:p-8 relative">
      <div className="relative z-10">
        {/* ================= KPI CARDS ================= */}
        <KPIGrid
          risk={metrics.risk.score}
          riskLevel={metrics.risk.level}
          alerts={metrics.alerts.active}
          resources={metrics.resources.available}
        />

        {/* ================= TACTICAL MAP ================= */}
        <div className="mt-10">
          <MapPanel />
        </div>

        {/* ================= BOTTOM PANELS ================= */}
        <div className="mt-10 grid gap-10 xl:grid-cols-3">
          
          <IncidentTimeline />

          <AIBriefing
            temperature={weather.temperature}
            condition={weather.condition}
            wind={weather.wind}
            risk={`${metrics.risk.score}% (${metrics.risk.level})`}
            alerts={metrics.alerts.active}
            resources={metrics.resources.available}
          />

          <ResourceHealth />

        </div>
      </div>
    </div>
  );
}