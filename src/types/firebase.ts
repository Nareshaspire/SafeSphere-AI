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

export interface Alert {

  id: string;

  title: string;

  severity: string;

  description: string;

}

export interface Incident {

  id: string;

  type: string;

  severity: string;

  lat: number;

  lng: number;

}

export interface Prediction {

  id: string;

  risk: number;

  confidence: number;

}