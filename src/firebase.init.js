// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkC_K1OC7BcrwZ34D8HLob_I0X9dC79qE",
    authDomain: "wild-photography-tjrimon.firebaseapp.com",
    projectId: "wild-photography-tjrimon",
    storageBucket: "wild-photography-tjrimon.appspot.com",
    messagingSenderId: "612031098343",
    appId: "1:612031098343:web:c94fe27a71f4a6340ba142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;