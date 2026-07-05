import type { EmergencyLocation } from "../types/map";

interface MarkerInfoProps {
  location: EmergencyLocation;
}

export default function MarkerInfo({
  location,
}: MarkerInfoProps) {
  return (
    <div
      style={{
        minWidth: "220px",
        padding: "10px",
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: "10px",
        }}
      >
        {location.name}
      </h3>

      <p><strong>Type:</strong> {location.type}</p>

      <p><strong>Status:</strong> {location.status}</p>

      <p><strong>Capacity:</strong> {location.capacity}%</p>

      <p><strong>Address:</strong> {location.address}</p>

      <p><strong>Updated:</strong> {location.lastUpdated}</p>
    </div>
  );
}