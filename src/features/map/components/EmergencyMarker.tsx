import type { EmergencyLocation } from "../types/map";

interface Props {
  location: EmergencyLocation;
}

export default function EmergencyMarker({ location }: Props) {
  return (
    <>
      {/* Google AdvancedMarker will be added here */}
      {location.name}
    </>
  );
}