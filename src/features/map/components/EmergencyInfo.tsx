import {
    InfoWindow,
} from "@vis.gl/react-google-maps";

import type { EmergencyLocation } from "../types/map";

interface Props {
  location: EmergencyLocation;
  onClose: () => void;
}

export default function EmergencyInfo({
  location,
  onClose,
}: Props) {
  return (
    <InfoWindow
      position={location.position}
      onCloseClick={onClose}
    >
      <div className="min-w-[220px]">

        <h2 className="font-bold text-lg">
          {location.name}
        </h2>

        <p>Status: {location.status}</p>

        <p>Capacity: {location.capacity}%</p>

        <p>{location.address}</p>

        <hr className="my-2"/>

        <p className="font-semibold text-sky-600">

          AI Recommendation

        </p>

        <p className="text-sm">

          Maintain current readiness.
          Increase staffing if weather deteriorates.

        </p>

        <p className="mt-2 text-xs text-gray-500">

          Updated {location.lastUpdated}

        </p>

      </div>

    </InfoWindow>
  );
}