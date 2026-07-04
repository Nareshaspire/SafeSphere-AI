import { APIProvider, Map } from "@vis.gl/react-google-maps";

const sudbury = {
  lat: 46.4917,
  lng: -80.9930,
};

export default function HazardMap() {
  console.log("MAP KEY:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={sudbury}
          defaultZoom={11}
        />
      </APIProvider>
    </div>
  );
}