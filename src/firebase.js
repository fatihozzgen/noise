import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBcw3gcbFg0rgI-iyKNdSAOhMdF4cgLPU",
  authDomain: "noise-7e551.firebaseapp.com",
  projectId: "noise-7e551",
  storageBucket: "noise-7e551.appspot.com",
  messagingSenderId: "368275898619",
  appId: "1:368275898619:web:50bb728d73a8f8107df05e",
  measurementId: "G-24ZXVFY4FT",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "products");

export const getFirebaseData = () => {
  return getDocs(colRef)
    .then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      // console.log(products);
      return products;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const auth = getAuth(app);
