// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzP0tyYa5SmtTL2bjlDhH8pwNMcvy2Vg",
  authDomain: "dashboard-electron.firebaseapp.com",
  projectId: "dashboard-electron",
  storageBucket: "dashboard-electron.appspot.com",
  messagingSenderId: "844087383043",
  appId: "1:844087383043:web:2184738d085e27464b2a36",
  measurementId: "G-0Z1Q4619FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);