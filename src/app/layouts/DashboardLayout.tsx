import Dashboard from "../../features/dashboard/Dashboard";
import Navbar from "../../shared/components/layout/Navbar";
import Sidebar from "../../shared/components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}