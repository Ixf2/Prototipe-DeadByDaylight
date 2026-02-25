import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCE4a2bo_KNY_opyFBy4thBpR8eckUV04",
  authDomain: "proyect-deadbydayligth.firebaseapp.com",
  projectId: "proyect-deadbydayligth",
  storageBucket: "proyect-deadbydayligth.firebasestorage.app",
  messagingSenderId: "835268103515",
  appId: "1:835268103515:web:8b9d4e70360ac00afc5e7e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);