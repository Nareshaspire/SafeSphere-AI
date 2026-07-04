export type EmergencyType =
  | "hospital"
  | "fire"
  | "police"
  | "ems"
  | "warming";

export interface EmergencyLocation {
  id: number;
  name: string;
  type: EmergencyType;
  lat: number;
  lng: number;
}