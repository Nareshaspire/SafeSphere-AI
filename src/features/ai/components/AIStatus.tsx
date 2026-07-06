interface Props {
  loading: boolean;
  error: string | null;
}

export default function AIStatus({
  loading,
  error,
}: Props) {

  if (loading)
    return (
      <span className="text-yellow-400">
        🟡 Generating Briefing...
      </span>
    );

  if (error)
    return (
      <span className="text-red-400">
        🔴 AI Offline
      </span>
    );

  return (
    <span className="text-green-400">
      🟢 Gemini Online
    </span>
  );
}