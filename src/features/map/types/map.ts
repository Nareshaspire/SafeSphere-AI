export type EmergencyType =
  | "hospital"
  | "fire"
  | "police"
  | "ems"
  | "warming";

export interface EmergencyLocation {
  id: string;
  name: string;
  type: EmergencyType;

  position: {
    lat: number;
    lng: number;
  };

  address: string;

  status: "Available" | "Busy" | "Offline";

  capacity: number;

  lastUpdated: string;
}