// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfeYFb27P41Wc8S60WfOR00Fxhoavg2fA",
  authDomain: "netfix-gpt-d4368.firebaseapp.com",
  projectId: "netfix-gpt-d4368",
  storageBucket: "netfix-gpt-d4368.firebasestorage.app",
  messagingSenderId: "164722658848",
  appId: "1:164722658848:web:d233d9cf18591707767645",
  measurementId: "G-0SVHLWHL8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
