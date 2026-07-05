import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

import { emergencyLocations } from "../data/emergencyLocations";
import MarkerLegend from "./MarkerLegend";

const sudbury = {
  lat: 46.4917,
  lng: -80.9930,
};

export default function HazardMap() {
  console.log("MAP KEY:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  console.log("MAP ID:", import.meta.env.VITE_GOOGLE_MAP_ID);

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
          {emergencyLocations.map((location) => (
            <AdvancedMarker
              key={location.id}
              position={location.position}
              title={location.name}
            >
              <div
                style={{
                  fontSize: "32px",
                }}
              >
                {location.type === "hospital" && "🏥"}
                {location.type === "fire" && "🚒"}
                {location.type === "police" && "🚓"}
                {location.type === "ems" && "🚑"}
                {location.type === "warming" && "❄️"}
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>

      <MarkerLegend />
    </div>
  );
}