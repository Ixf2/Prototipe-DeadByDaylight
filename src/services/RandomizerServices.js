import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/Firebase";

export async function getKillers() {
  const snapshot = await getDocs(collection(db, "killers"));
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}

export async function getKillerPerks() {
  const snapshot = await getDocs(collection(db, "killer_perks"));
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })); 
}


export async function getBuilds() {
  const snapshot = await getDocs(collection(db, "builds"));
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
}

export async function createBuild(buildData) {
  await addDoc(collection(db, "builds"), {
    ...buildData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateBuild(buildId, buildData) {
  const buildRef = doc(db, "builds", buildId);
  await updateDoc(buildRef, {
    ...buildData,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteBuild(buildId) {
  const buildRef = doc(db, "builds", buildId);
  await deleteDoc(buildRef);
}