import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCJbmNOCxxLmHk4VOTcDMmJPshXsiO-2Dg",

    authDomain: "greenlens-18ee7.firebaseapp.com",

    projectId: "greenlens-18ee7",

    storageBucket: "greenlens-18ee7.appspot.com",

    messagingSenderId: "1094056209034",

    appId: "1:1094056209034:web:73080d08a92387fa301b73",

    measurementId: "G-F0PGRS9ESW"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default app;
export { app, db };
export const auth = getAuth(app);