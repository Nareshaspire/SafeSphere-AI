import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function getResources() {
  console.log("Loading Firestore resources...");

  const snapshot = await getDocs(collection(db, "resources"));

  console.log("Documents found:", snapshot.size);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.table(data);

  return data;
}