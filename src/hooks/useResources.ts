import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firestore";

export interface Resource {
  id: string;
  name: string;
  type: string;
  status: string;
  capacity: number;
  address: string;
  lat: number;
  lng: number;
}

export function useResources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "resources"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Resource, "id">),
        }));

        console.log("🔥 Live Firestore Update", data);

        setResources(data);
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
    resources,
    loading,
  };
}