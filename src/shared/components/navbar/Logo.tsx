import { Shield } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
        <Shield size={24} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          SafeSphere AI
        </h1>

        <p className="text-xs text-slate-500">
          Emergency Intelligence Platform
        </p>
      </div>
    </div>
  );
}