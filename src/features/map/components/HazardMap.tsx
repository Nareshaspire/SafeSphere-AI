import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useResources } from "../../../hooks/useResources";
import IncidentMarkers from "./IncidentMarkers";
import MarkerLegend from "./MarkerLegend";

const sudbury = {
  lat: 46.4917,
  lng: -80.9930,
};

export default function HazardMap() {
  const { resources, loading } = useResources();
  const [selected, setSelected] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-2xl bg-[#101827] text-white">
        Loading live emergency resources...
      </div>
    );
  }

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        position: "relative",
      }}
    >
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
          defaultCenter={sudbury}
          defaultZoom={11}
          
        >
          {resources.map((resource) => (
            <div key={resource.id}>
              <AdvancedMarker
                position={{
                  lat: resource.lat,
                  lng: resource.lng,
                }}
                title={resource.name}
                onClick={() => setSelected(resource.id)}
              >
                <div
                  style={{
                    fontSize: "32px",
                    cursor: "pointer",
                  }}
                >
                  {resource.type === "hospital" && "🏥"}
                  {resource.type === "fire" && "🚒"}
                  {resource.type === "police" && "🚓"}
                  {resource.type === "ems" && "🚑"}
                  {resource.type === "warming" && "❄️"}
                </div>
              </AdvancedMarker>

              {selected === resource.id && (
                <InfoWindow
                  position={{
                    lat: resource.lat,
                    lng: resource.lng,
                  }}
                  onCloseClick={() => setSelected(null)}
                >
                  <div
                    style={{
                      minWidth: "220px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      {resource.name}
                    </h3>

                    <p>Type: {resource.type}</p>

                    <p>Status: {resource.status}</p>

                    <p>Capacity: {resource.capacity}</p>

                    <p>{resource.address}</p>
                  </div>
                </InfoWindow>
              )}
            </div>
          ))}
        </Map>
      </APIProvider>
      <IncidentMarkers />
      <MarkerLegend />
    </div>
  );
}