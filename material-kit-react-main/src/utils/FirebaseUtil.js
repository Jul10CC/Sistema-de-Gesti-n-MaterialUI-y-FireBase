// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
    const config = {
        apiKey: "AIzaSyAG0yJUgTekJjAISz-RygtaB45WiGuFncA",
        authDomain: "sistema-885f1.firebaseapp.com",
        projectId: "sistema-885f1",
        storageBucket: "sistema-885f1.appspot.com",
        messagingSenderId: "576904688876",
        appId: "1:576904688876:web:cae3b98cbf7eedd59921c9",
        measurementId: "G-TQ4KLWN0HP"
    };

    // Initialize Firebase
    const app = initializeApp(config);
    const analytics = getAnalytics(app);
}