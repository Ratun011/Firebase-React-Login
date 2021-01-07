import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDssbcNBbIOsfLSCOwYwl-3Vu0Gphn8Pzs",
    authDomain: "fir-auth-development-9ca9f.firebaseapp.com",
    projectId: "fir-auth-development-9ca9f",
    storageBucket: "fir-auth-development-9ca9f.appspot.com",
    messagingSenderId: "68627437444",
    appId: "1:68627437444:web:1480229422f5ed2a4b6fd1",
    measurementId: "G-0PRPDW74MR"
});

const auth = app.auth();
export { auth };
export default app;