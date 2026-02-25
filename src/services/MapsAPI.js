import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Firebase";

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
