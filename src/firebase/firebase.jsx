import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API,
    authDomain: "proyecto-react-217ad.firebaseapp.com",
    projectId: "proyecto-react-217ad",
    storageBucket: "proyecto-react-217ad.appspot.com",
    messagingSenderId: "969039245284",
    appId: "1:969039245284:web:c010c0321e3440780be1f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db