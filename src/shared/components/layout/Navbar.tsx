import {
  Bell,
  Search,
  Sun,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#101827] px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          SafeSphere AI
        </h1>

        <p className="text-sm text-slate-400">
          AI-Powered Emergency Operations Center
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700">
          <Search size={20} />
        </button>

        <button className="rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700">
          <Bell size={20} />
        </button>

        <div className="rounded-xl bg-slate-800 px-4 py-2">

          <div className="flex items-center gap-2">

            <Sun
              size={18}
              className="text-yellow-400"
            />

            <span className="font-semibold text-white">
              -8°C
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}