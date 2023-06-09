// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCHIamtPGfDnKOuMbvyXY7iEnn18fCfG4",
  authDomain: "copper-marmot-chat.firebaseapp.com",
  projectId: "copper-marmot-chat",
  storageBucket: "copper-marmot-chat.appspot.com",
  messagingSenderId: "865026533470",
  appId: "1:865026533470:web:b01b3977769497e32eaccf",
  measurementId: "G-8N5HBHZRQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);