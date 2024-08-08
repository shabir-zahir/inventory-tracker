// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
  apiKey: //INFORMATION,
  authDomain: //INFORMATION,
  projectId: //INFORMATION,
  storageBucket: //INFORMATION,
  messagingSenderId://INFORMATION,
  appId: //INFORMATION,
  measurementId: //INFORMATION
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export {firestore}