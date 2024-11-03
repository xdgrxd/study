import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-Ap9wAvkm3AtV0brSp29qkAEk4SezNxY",
  authDomain: "bloguii.firebaseapp.com",
  projectId: "bloguii",
  storageBucket: "bloguii.firebasestorage.app",
  messagingSenderId: "968169959528",
  appId: "1:968169959528:web:ed5591dd822aab151b4bdd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
