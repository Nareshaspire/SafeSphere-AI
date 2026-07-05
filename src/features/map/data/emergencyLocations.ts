import type { EmergencyLocation } from "../types/map";

export const emergencyLocations: EmergencyLocation[] = [
  {
    id: "1",
    name: "Health Sciences North",
    type: "hospital",

    position: {
      lat: 46.4917,
      lng: -80.993,
    },

    address: "41 Ramsey Lake Rd",

    status: "Available",

    capacity: 72,

    lastUpdated: "09:42 AM",
  },

  {
    id: "2",
    name: "Sudbury Fire Station 1",
    type: "fire",

    position: {
      lat: 46.493,
      lng: -80.985,
    },

    address: "190 Brady St",

    status: "Available",

    capacity: 88,

    lastUpdated: "09:39 AM",
  },

  {
    id: "3",
    name: "Greater Sudbury Police HQ",
    type: "police",

    position: {
      lat: 46.491,
      lng: -80.995,
    },

    address: "190 Brady St",

    status: "Busy",

    capacity: 60,

    lastUpdated: "09:36 AM",
  },

  {
    id: "4",
    name: "EMS Station",
    type: "ems",

    position: {
      lat: 46.495,
      lng: -80.99,
    },

    address: "Sudbury",

    status: "Available",

    capacity: 81,

    lastUpdated: "09:35 AM",
  },

  {
    id: "5",
    name: "Downtown Warming Centre",
    type: "warming",

    position: {
      lat: 46.488,
      lng: -80.989,
    },

    address: "Sudbury",

    status: "Available",

    capacity: 55,

    lastUpdated: "09:34 AM",
  },
];