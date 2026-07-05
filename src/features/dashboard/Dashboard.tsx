import {
  Ambulance,
  Bell,
  CloudSnow,
  TriangleAlert,
} from "lucide-react";

import StatCard from "../../shared/components/ui/StatCard";
import HazardMap from "../map/components/HazardMap";
import { useWeather } from "../weather/hooks/useWeather";
import { dashboardData } from "./data/mockDashboardData";

export default function Dashboard() {
  // Live Weather Hook
  const weather = useWeather();

  return (
    <div className="min-h-screen bg-[#0B1120] p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Emergency Command Center
          </h1>

          <p className="mt-2 text-slate-400">
            Greater Sudbury Community Preparedness
          </p>
        </div>

        <div className="rounded-2xl bg-[#101827] px-5 py-3 shadow-xl">
          <p className="text-sm text-slate-400">
            System Status
          </p>

          <p className="font-semibold text-green-400">
            ● Operational
          </p>
        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Current Weather"
          value={weather.temperature}
          subtitle={`${weather.condition} • Wind ${weather.wind}`}
          icon={CloudSnow}
          color="text-sky-400"
        />

        <StatCard
          title="Community Risk"
          value={`${dashboardData.risk.score}%`}
          subtitle={dashboardData.risk.level}
          icon={TriangleAlert}
          color="text-red-400"
        />

        <StatCard
          title="Active Alerts"
          value={dashboardData.alerts.active.toString()}
          subtitle={dashboardData.alerts.latest}
          icon={Bell}
          color="text-yellow-400"
        />

        <StatCard
          title="Resources Ready"
          value={dashboardData.resources.available.toString()}
          subtitle={dashboardData.resources.status}
          icon={Ambulance}
          color="text-emerald-400"
        />

      </div>

      {/* Hazard Map */}

      <div className="mt-10 rounded-3xl border border-slate-700 bg-[#101827] p-6 shadow-xl">

        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              🗺️ Hazard Intelligence Map
            </h2>

            <p className="text-slate-400">
              Live Emergency Resource Locations
            </p>
          </div>

        </div>

        <HazardMap />

      </div>

      {/* AI Operational Briefing */}

      <div className="mt-10 rounded-3xl border border-violet-700 bg-gradient-to-r from-violet-900 to-slate-900 p-8 shadow-2xl">

        <h2 className="mb-6 text-2xl font-bold text-white">
          🤖 AI Operational Briefing
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <h3 className="mb-2 text-lg font-semibold text-red-400">
              Risk Level
            </h3>

            <p className="text-slate-300">
              🔴 HIGH
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-sky-400">
              Situation
            </h3>

            <p className="text-slate-300">
              Heavy snowfall expected within the next 12 hours.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-amber-400">
              Predicted Impacts
            </h3>

            <ul className="list-disc pl-5 text-slate-300">
              <li>Reduced road visibility</li>
              <li>Higher accident probability</li>
              <li>Possible localized power outages</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-emerald-400">
              Recommended Actions
            </h3>

            <ul className="list-disc pl-5 text-slate-300">
              <li>Deploy additional snowplows</li>
              <li>Increase EMS staffing</li>
              <li>Prepare warming centres</li>
              <li>Issue public travel advisory</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}