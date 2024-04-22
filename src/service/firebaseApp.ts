import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_ID
};

// Firebase initialize & Get App
export let app: FirebaseApp;

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
