// Firebase v9+ compatibil cu React 18/19

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9BN4bZ3W1lwTYFsnSlVJz9n6kTMegh_U",
  authDomain: "eshop-72903.firebaseapp.com",
  projectId: "eshop-72903",
  storageBucket: "eshop-72903.firebasestorage.app",
  messagingSenderId: "209236306433",
  appId: "1:209236306433:web:f28978a9d2ab224e33ee00",
  measurementId: "G-0E1T2VCVVW"
};

// Inițializează aplicația Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inițializează serviciile
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
