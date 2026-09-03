import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../features/dashboard/Dashboard";
import Navbar from "../../shared/components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-transparent">
      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-transparent">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-transparent p-4 md:p-6 lg:p-8 2xl:p-10">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/live-map" element={<div className="text-center mt-20 text-slate-400">Live Map View (Coming Soon)</div>} />
            <Route path="/recents" element={<div className="text-center mt-20 text-slate-400">Recents (Coming Soon)</div>} />
            <Route path="/ai-assistant" element={<div className="text-center mt-20 text-slate-400">AI Assistant (Coming Soon)</div>} />
            <Route path="/analytics" element={<div className="text-center mt-20 text-slate-400">Analytics (Coming Soon)</div>} />
            <Route path="/settings" element={<div className="text-center mt-20 text-slate-400">Settings (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}