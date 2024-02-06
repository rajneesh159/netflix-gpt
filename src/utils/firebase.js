// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmxcFAmekOsH5hNIy1tOl7vey9k17Bgks",
  authDomain: "netflixgpt-d756a.firebaseapp.com",
  projectId: "netflixgpt-d756a",
  storageBucket: "netflixgpt-d756a.appspot.com",
  messagingSenderId: "12295677720",
  appId: "1:12295677720:web:334d393d7589376203206d",
  measurementId: "G-JCR197F9HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();