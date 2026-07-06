import {
    Cloud,
    CloudFog,
    CloudLightning,
    CloudRain,
    CloudSnow,
    Sun,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export function getWeatherIcon(condition: string): LucideIcon {
  const text = condition.toLowerCase();

  if (text.includes("clear")) return Sun;

  if (text.includes("cloud")) return Cloud;

  if (text.includes("rain")) return CloudRain;

  if (text.includes("snow")) return CloudSnow;

  if (text.includes("fog")) return CloudFog;

  if (text.includes("thunder")) return CloudLightning;

  return Cloud;
}