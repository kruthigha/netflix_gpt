// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuA3Sn63Mf7G7ntFy-XvfPjltzRdyvD-Q",
  authDomain: "netflixgpt1-c52ae.firebaseapp.com",
  projectId: "netflixgpt1-c52ae",
  storageBucket: "netflixgpt1-c52ae.appspot.com",
  messagingSenderId: "920537654498",
  appId: "1:920537654498:web:b0fba04bf04827fccdeabb",
  measurementId: "G-V6XZ215HB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();