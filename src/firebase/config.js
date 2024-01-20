// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE23Xl_RZ0Z8C_meodPi8zu5qn-SwgaWg",
  authDomain: "react-curso2-daf4c.firebaseapp.com",
  projectId: "react-curso2-daf4c",
  storageBucket: "react-curso2-daf4c.appspot.com",
  messagingSenderId: "532361928861",
  appId: "1:532361928861:web:167180465b862497a9f474",
  measurementId: "G-SJVYKJ1E0Y"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp) 
