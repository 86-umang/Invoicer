// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-haSMCjs9LaoCROWRgAXNXenY1LI7qeI",
    authDomain: "invoicer-sk-dairy.firebaseapp.com",
    databaseURL: "https://invoicer-sk-dairy-default-rtdb.firebaseio.com",
    projectId: "invoicer-sk-dairy",
    storageBucket: "invoicer-sk-dairy.appspot.com",
    messagingSenderId: "750018083044",
    appId: "1:750018083044:web:6c31a164577318ebd894f1",
    measurementId: "G-BQ4WJSCZ4F"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export const auth = getAuth(app);
export default db;