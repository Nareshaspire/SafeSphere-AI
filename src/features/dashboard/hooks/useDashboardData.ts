import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import { dashboardData as mockData } from "../data/mockDashboardData";

export function useMetrics() {
  const [metrics, setMetrics] = useState({
    risk: { score: mockData.risk.score, level: mockData.risk.level },
    alerts: { active: mockData.alerts.active },
    resources: { available: mockData.resources.available }
  });

  useEffect(() => {
    // In a real app, you'd subscribe to a 'metrics' doc.
    // For now, we listen, but if empty, fallback to mock.
    const q = query(collection(db, "metrics"));
    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setMetrics({
          risk: data.risk || metrics.risk,
          alerts: data.alerts || metrics.alerts,
          resources: data.resources || metrics.resources,
        });
      }
    });
    return unsub;
  }, []);

  return metrics;
}

export function useIncidents() {
  const defaultIncidents = [
    { source: "Twitter", text: "Consortia Fire - 108 SB", sentiment: "Panic", color: "bg-red-500/20 text-red-400 border-red-500/30" },
    { source: "News", text: "EMS dispatched to Sector 4", sentiment: "Relief", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { source: "Facebook", text: "Road accident detected on I-95", sentiment: "High", color: "bg-red-500/20 text-red-400 border-red-500/30" },
    { source: "Scanner", text: "Power lines down", sentiment: "Danger", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  ];
  
  const [incidents, setIncidents] = useState(defaultIncidents);

  useEffect(() => {
    const q = query(collection(db, "incidents"));
    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs.map(doc => doc.data() as any);
        setIncidents(data);
      }
    });
    return unsub;
  }, []);

  return incidents;
}

export function useResources() {
  const defaultResources = [
    { name: "EMS Units", value: 91, color: "bg-emerald-500" },
    { name: "Fire Squads", value: 82, color: "bg-orange-500" },
    { name: "Police Patrols", value: 97, color: "bg-blue-500" },
    { name: "Hospital Beds", value: 76, color: "bg-violet-500" },
  ];

  const [resources, setResources] = useState(defaultResources);

  useEffect(() => {
    const q = query(collection(db, "resource_health"));
    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs.map(doc => doc.data() as any);
        setResources(data);
      }
    });
    return unsub;
  }, []);

  return resources;
}
