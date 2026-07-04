export interface EmergencyLocation {
  id: number;
  name: string;
  type: "hospital" | "fire" | "police" | "ems" | "warming";
  lat: number;
  lng: number;
}

export const emergencyLocations: EmergencyLocation[] = [
  {
    id: 1,
    name: "Health Sciences North",
    type: "hospital",
    lat: 46.4727,
    lng: -80.9903,
  },
  {
    id: 2,
    name: "Sudbury Fire Station #1",
    type: "fire",
    lat: 46.4917,
    lng: -80.9930,
  },
  {
    id: 3,
    name: "Greater Sudbury Police HQ",
    type: "police",
    lat: 46.4925,
    lng: -80.9910,
  },
  {
    id: 4,
    name: "EMS Station",
    type: "ems",
    lat: 46.4850,
    lng: -80.9860,
  },
  {
    id: 5,
    name: "Community Warming Centre",
    type: "warming",
    lat: 46.5000,
    lng: -80.9800,
  },
];