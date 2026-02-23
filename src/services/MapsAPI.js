import { collection, getDocs, query, where } from "Firebase/Firestore";
import { db } from "./Firebaseirebase";

export async function fetchMapsByCategory(category) {
  const q = query(
    collection(db, "maps"),
    where("category", "==", category)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchAllMaps() {
  const snap = await getDocs(collection(db, "maps"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}