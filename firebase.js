// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf55d7wBUEJX4B4norhd02Wfttb4wAC98",
  authDomain: "fbclone-a724b.firebaseapp.com",
  projectId: "fbclone-a724b",
  storageBucket: "fbclone-a724b.appspot.com",
  messagingSenderId: "389120840822",
  appId: "1:389120840822:web:375b3fc319e44ae6b2bb57",
  measurementId: "G-SJY0TYVSFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Storage and get a reference to the service
const storage = getStorage(app);


export{db,app,storage}

