// npm install firebase
// npm install -g firebase-tool

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_auth_Domain,
  projectId: process.env.NEXT_PUBLIC_project_Id,
  storageBucket: process.env.NEXT_PUBLIC_storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messaging_Sender_Id,
  appId: process.env.NEXT_PUBLIC_app_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
