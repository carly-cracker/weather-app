// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this import
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0XVNWwPaW4HfT2J4zHWrB0Is7PljSJ0",
  authDomain: "weather-app-d2a40.firebaseapp.com",
  projectId: "weather-app-d2a40",
  storageBucket: "weather-app-d2a40.appspot.com",
  messagingSenderId: "251848475074",
  appId: "1:251848475074:web:b16e58c8dd54a9f9e7565b",
  measurementId: "G-1QLXYTE0T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };