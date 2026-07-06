import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useIncidents } from "../hooks/useIncidents";

export default function IncidentMarkers() {
  const { incidents } = useIncidents();

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {incidents.map((incident) => (
        <div key={incident.id}>
          <AdvancedMarker
            position={{
              lat: incident.lat,
              lng: incident.lng,
            }}
            onClick={() => setSelected(incident.id)}
          >
            <div
              style={{
                fontSize: 34,
                cursor: "pointer",
              }}
            >
              {incident.severity === "Critical" && "🔴"}
              {incident.severity === "High" && "🟠"}
              {incident.severity === "Medium" && "🟡"}
              {incident.severity === "Low" && "🟢"}
            </div>
          </AdvancedMarker>

          {selected === incident.id && (
            <InfoWindow
              position={{
                lat: incident.lat,
                lng: incident.lng,
              }}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ minWidth: 240 }}>
                <h3>{incident.title}</h3>

                <p>
                  <strong>Severity:</strong> {incident.severity}
                </p>

                <p>
                  <strong>Status:</strong> {incident.status}
                </p>

                <p>{incident.description}</p>

                <p>
                  Units Assigned: {incident.assignedUnits}
                </p>
              </div>
            </InfoWindow>
          )}
        </div>
      ))}
    </>
  );
}