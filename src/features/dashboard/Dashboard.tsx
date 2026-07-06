import BottomAnalytics from "./components/BottomAnalytics";
import DashboardHeader from "./components/DashboardHeader";
import KPIGrid from "./components/KPIGrid";
import MapPanel from "./components/MapPanel";
import RightSidebar from "./components/RightSidebar";

import { dashboardData } from "./data/mockDashboardData";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B1120] p-8">

      {/* ================= HEADER ================= */}
      <DashboardHeader />

      {/* ================= KPI CARDS ================= */}
      <KPIGrid
        risk={dashboardData.risk.score}
        riskLevel={dashboardData.risk.level}
        alerts={dashboardData.alerts.active}
        resources={dashboardData.resources.available}
      />

      {/* ================= MAIN LAYOUT ================= */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6 lg:col-span-8">
          {/* Google Maps */}
          <MapPanel />

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-4">

          <RightSidebar
            risk={`${dashboardData.risk.score}% (${dashboardData.risk.level})`}
            alerts={dashboardData.alerts.active}
            resources={dashboardData.resources.available}
          />

        </div>

      </div>

      {/* ================= ANALYTICS ================= */}
      <BottomAnalytics />

    </div>
  );
}