import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "./Firebase";

export const NEWS_CATEGORY_IDS = Object.freeze({
  ANNIVERSARY: "anniversary",
  GRIMOIRE: "grimoire",
  NEW_KILLER: "new_killer",
  NEW_DLC: "new_dlc",
});

export const NEWS_CATEGORY_LABELS = Object.freeze({
  [NEWS_CATEGORY_IDS.ANNIVERSARY]: "Anniversary",
  [NEWS_CATEGORY_IDS.GRIMOIRE]: "The Grimoire",
  [NEWS_CATEGORY_IDS.NEW_KILLER]: "New Killer",
  [NEWS_CATEGORY_IDS.NEW_DLC]: "New DLC",
});

export async function getNews({ max = 20 } = {}) {
  const ref = collection(db, "news");
  const q = query(ref, limit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getNewsByCategoryId(categoryId, { max = 20 } = {}) {
  const ref = collection(db, "news");
  const q = query(ref, where("categoryId", "==", categoryId), limit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}