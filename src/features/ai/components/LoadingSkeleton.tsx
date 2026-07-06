export default function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">

      <div className="h-6 w-1/2 rounded bg-slate-700" />

      <div className="h-4 rounded bg-slate-700" />

      <div className="h-4 w-5/6 rounded bg-slate-700" />

      <div className="h-4 w-2/3 rounded bg-slate-700" />

      <div className="h-4 w-4/5 rounded bg-slate-700" />

    </div>
  );
}