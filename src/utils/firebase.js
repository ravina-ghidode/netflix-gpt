// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOp1_xlToOt-hGFUbVjJnnsy0MhOSv06Y",
  authDomain: "clips-80438.firebaseapp.com",
  projectId: "clips-80438",
  storageBucket: "clips-80438.appspot.com",
  messagingSenderId: "833928816645",
  appId: "1:833928816645:web:15f13023e3053db2a0146c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
