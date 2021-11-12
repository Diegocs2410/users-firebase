import { initializeApp } from 'firebase/app';
// Firebase Config
const firebaseConfig = {
  // Environments variables
  apiKey: process.env.FIREBASE_VAR_AUTHDOMAIN,
  authDomain: process.env.FIREBASE_VAR_APIKEY,
  projectId: process.env.FIREBASE_VAR_PROJECTID,
  storageBucket: process.env.FIREBASE_VAR_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_VAR_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_VAR_APPID,
  measurementId: process.env.FIREBASE_VAR_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
