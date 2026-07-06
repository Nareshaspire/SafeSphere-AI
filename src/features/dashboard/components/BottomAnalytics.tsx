import IncidentTimeline from "./IncidentTimeline";
import ResourceHealth from "./ResourceHealth";

export default function BottomAnalytics() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">

      <IncidentTimeline />

      <ResourceHealth />

    </div>
  );
}