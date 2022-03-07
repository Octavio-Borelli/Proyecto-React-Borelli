// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjuU1lchgVXtoaphng2gatuvN15hBV3nU",
    authDomain: "proyecto-react-217ad.firebaseapp.com",
    projectId: "proyecto-react-217ad",
    storageBucket: "proyecto-react-217ad.appspot.com",
    messagingSenderId: "969039245284",
    appId: "1:969039245284:web:c010c0321e3440780be1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db