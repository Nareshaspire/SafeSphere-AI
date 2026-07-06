import type { Timestamp } from "firebase/firestore";

export interface Resource {
  id: string;

  name: string;

  type: "hospital" | "fire" | "police" | "ems" | "warming";

  status: string;

  capacity: number;

  address: string;

  lat: number;

  lng: number;

  lastUpdated: Timestamp;
}