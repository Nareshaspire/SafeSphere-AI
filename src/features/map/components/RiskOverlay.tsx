import { Circle } from "@vis.gl/react-google-maps";

export default function RiskOverlay() {

  return (
    <Circle

      center={{
        lat:46.4917,
        lng:-80.9930,
      }}

      radius={2000}

      strokeColor="#EF4444"

      fillColor="#EF4444"

      fillOpacity={0.15}

    />

  );

}