import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.YOUR_APP_PREFIX_FIREBASE_API_KEY || process.env.YOUR_APP_PREFIX_FIREBASE_API_KEY,
  authDomain: import.meta.env.YOUR_APP_PREFIX_FIREBASE_AUTH_DOMAIN || process.env.YOUR_APP_PREFIX_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.YOUR_APP_PREFIX_FIREBASE_PROJECT_ID || process.env.YOUR_APP_PREFIX_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.YOUR_APP_PREFIX_FIREBASE_STORAGE_BUCKET || process.env.YOUR_APP_PREFIX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.YOUR_APP_PREFIX_FIREBASE_MESSAGING_SENDER_ID || process.env.YOUR_APP_PREFIX_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.YOUR_APP_PREFIX_FIREBASE_APP_ID || process.env.YOUR_APP_PREFIX_FIREBASE_APP_ID,
  measurementId: import.meta.env.YOUR_APP_PREFIX_FIREBASE_MEASUREMENT_ID || process.env.YOUR_APP_PREFIX_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
