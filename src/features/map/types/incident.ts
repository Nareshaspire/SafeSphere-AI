export interface Incident {
  id: string;
  title: string;
  description: string;

  type: string;

  severity: "Critical" | "High" | "Medium" | "Low";

  status: string;

  lat: number;
  lng: number;

  zone: string;

  assignedUnits: number;

  reportedBy: string;
}