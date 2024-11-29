// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKnQOfjUwEKbeTeuY6BO3KSvEZ_-gxASg",
    authDomain: "fir-auth-2867a.firebaseapp.com",
    projectId: "fir-auth-2867a",
    storageBucket: "fir-auth-2867a.firebasestorage.app",
    messagingSenderId: "727105610503",
    appId: "1:727105610503:web:e6ba5a96441013a7099ba2",
    measurementId: "G-6V9HV24SDB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);