import IncidentTimeline from "./IncidentTimeline";
import ResourceHealth from "./ResourceHealth";

export default function BottomAnalytics() {
  return (
    <div className="grid gap-10 xl:grid-cols-2">

      <IncidentTimeline />

      <ResourceHealth />

    </div>
  );
}