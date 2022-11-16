// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZW8dDAXG8SPKq8SVpcJrOsG_eQXpzxeY",
  authDomain: "chat-app-187b7.firebaseapp.com",
  projectId: "chat-app-187b7",
  storageBucket: "chat-app-187b7.appspot.com",
  messagingSenderId: "628108867603",
  appId: "1:628108867603:web:207305945189bf9b1b27e6",
  measurementId: "G-RNDVBFDTG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);