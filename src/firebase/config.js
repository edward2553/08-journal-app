// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB6BKQ4awkvJI2LcORmtuye3ETLHdmvZY",
  authDomain: "react-cursos-2ea3e.firebaseapp.com",
  projectId: "react-cursos-2ea3e",
  storageBucket: "react-cursos-2ea3e.appspot.com",
  messagingSenderId: "427670949131",
  appId: "1:427670949131:web:bcdd082318685b7313260e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);
