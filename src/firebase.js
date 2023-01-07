// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBcw3gcbFg0rgI-iyKNdSAOhMdF4cgLPU",
  authDomain: "noise-7e551.firebaseapp.com",
  projectId: "noise-7e551",
  storageBucket: "noise-7e551.appspot.com",
  messagingSenderId: "368275898619",
  appId: "1:368275898619:web:50bb728d73a8f8107df05e",
  measurementId: "G-24ZXVFY4FT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
