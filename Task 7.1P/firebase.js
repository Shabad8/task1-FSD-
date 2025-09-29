import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRhSURWbsTQBV3agLNGmH8q0qUUGUixv0",
  authDomain: "devdeakin-38be8.firebaseapp.com",
  projectId: "devdeakin-38be8",

  storageBucket: "devdeakin-38be8.firebasestorage.app",

  messagingSenderId: "188984045613",

  appId: "1:188984045613:web:569c88e2cdb607e49048a4",
  measurementId: "G-NYTKWK3SPJ"


};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
