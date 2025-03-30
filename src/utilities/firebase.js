// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdnZbDoghdO3RHvva6VnsvX7hBvGFgGpQ",
  authDomain: "swiggy-clone-ba09e.firebaseapp.com",
  projectId: "swiggy-clone-ba09e",
  storageBucket: "swiggy-clone-ba09e.firebasestorage.app",
  messagingSenderId: "92980766499",
  appId: "1:92980766499:web:472a107754aecf4f4e8e96",
  measurementId: "G-WE20G97CFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);