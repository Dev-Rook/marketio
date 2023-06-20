// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyIfXBt1Yc6OuzVXTQG4b4Ne4ocsR0Rio",
  authDomain: "marketio-2b29e.firebaseapp.com",
  projectId: "marketio-2b29e",
  storageBucket: "marketio-2b29e.appspot.com",
  messagingSenderId: "512149652555",
  appId: "1:512149652555:web:9c83b4f2457917e75739ce",
  measurementId: "G-9E58S2KY84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
