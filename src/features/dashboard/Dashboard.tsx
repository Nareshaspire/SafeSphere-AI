import {
  Ambulance,
  Bell,
  CloudSnow,
  TriangleAlert,
} from "lucide-react";

import StatCard from "../../shared/components/ui/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">
        Emergency Operations Dashboard
      </h1>

      <p className="mb-8 text-slate-500">
        Greater Sudbury Community Preparedness
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Current Weather"
          value="-8°C"
          subtitle="Heavy Snow"
          icon={CloudSnow}
          color="text-blue-600"
        />

        <StatCard
          title="Community Risk"
          value="87%"
          subtitle="High"
          icon={TriangleAlert}
          color="text-red-600"
        />

        <StatCard
          title="Active Alerts"
          value="3"
          subtitle="Winter Storm"
          icon={Bell}
          color="text-amber-500"
        />

        <StatCard
          title="Resources Ready"
          value="12"
          subtitle="Emergency Units"
          icon={Ambulance}
          color="text-green-600"
        />

      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">
          🗺️ Hazard Map
        </h2>

        <p className="text-slate-500">
          Google Maps integration will be added in Sprint 3.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">
          🤖 AI Operational Briefing
        </h2>

        <p className="text-slate-600">
          Heavy snowfall is expected within the next 12 hours. Consider pre-positioning snow plows, increasing EMS staffing, and issuing travel advisories for high-risk corridors.
        </p>
      </div>
    </div>
  );
}