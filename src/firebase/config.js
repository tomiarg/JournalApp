// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmnAQv-Zf6AlJ9A_P_pKDs3I_0rrMDLuc",
  authDomain: "react-curso-df558.firebaseapp.com",
  projectId: "react-curso-df558",
  storageBucket: "react-curso-df558.appspot.com",
  messagingSenderId: "228448137527",
  appId: "1:228448137527:web:d8ae5b6bd96a53bfa6aab2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp) 
