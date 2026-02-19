// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxt-VN7IzPTBEZyKxwQnAWivctap_OJts",
  authDomain: "bidding-application-1ce57.firebaseapp.com",
  projectId: "bidding-application-1ce57",
  storageBucket: "bidding-application-1ce57.firebasestorage.app",
  messagingSenderId: "377301502246",
  appId: "1:377301502246:web:be11ec03fdf2f74ca819e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
