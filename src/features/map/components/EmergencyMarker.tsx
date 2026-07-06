import {
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

import type { EmergencyLocation } from "../types/map";

interface Props {
  location: EmergencyLocation;
  onClick: () => void;
}

const colors = {
  hospital: "#3B82F6",
  fire: "#EF4444",
  police: "#1E3A8A",
  ems: "#10B981",
  warming: "#F59E0B",
};

export default function EmergencyMarker({
  location,
  onClick,
}: Props) {

  return (
    <AdvancedMarker
      position={location.position}
      onClick={onClick}
    >

      <div
        className="flex h-5 w-5 animate-pulse rounded-full border-2 border-white"
        style={{
          background: colors[location.type],
        }}
      />

    </AdvancedMarker>

  );

}