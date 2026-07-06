import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firestore";
import type { Incident } from "../types/incident";

export function useIncidents() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "incidents"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Incident, "id">),
        }));

        setIncidents(data);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    incidents,
    loading,
  };
}