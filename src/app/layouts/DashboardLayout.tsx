import Dashboard from "../../features/dashboard/Dashboard";
import Navbar from "../../shared/components/layout/Navbar";
import Sidebar from "../../shared/components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#081224]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-[#0B1120]">

        <Navbar />

        <main className="flex-1 overflow-y-auto bg-[#0B1120] p-8">
          <Dashboard />
        </main>

      </div>

    </div>
  );
}