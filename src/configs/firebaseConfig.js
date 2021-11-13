// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyACefJ6nnh2i4NGbGBLWI9bN0qqV10DPlk',
  authDomain: 'talentusers-88cbe.firebaseapp.com',
  projectId: 'talentusers-88cbe',
  storageBucket: 'talentusers-88cbe.appspot.com',
  messagingSenderId: '931153830740',
  appId: '1:931153830740:web:f754b335dd6fb655a41ec1',
  measurementId: 'G-Y789HXM298',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
