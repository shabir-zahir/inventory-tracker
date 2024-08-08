// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore, getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuc-DYPll75rvGVdbXA_aEnBbOC23nPjA",
  authDomain: "pantry-tracker-9d5ad.firebaseapp.com",
  projectId: "pantry-tracker-9d5ad",
  storageBucket: "pantry-tracker-9d5ad.appspot.com",
  messagingSenderId: "486896697870",
  appId: "1:486896697870:web:db659c49d9b8f1ad3cb25f",
  measurementId: "G-4VSXVMZZWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export {firestore}