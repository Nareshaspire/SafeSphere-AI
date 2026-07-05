export function getMarkerIcon(type: string) {
  switch (type) {
    case "hospital":
      return "🏥";

    case "fire":
      return "🚒";

    case "police":
      return "🚓";

    case "ems":
      return "🚑";

    case "warming":
      return "❄️";

    default:
      return "📍";
  }
}