// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8kHzI-PJUQAXn_0mUmhGUFEIvUyMMd6A",
  authDomain: "db-bip.firebaseapp.com",
  projectId: "db-bip",
  storageBucket: "db-bip.appspot.com",
  messagingSenderId: "1019846799055",
  appId: "1:1019846799055:web:6e7da91fbabfc76e6e51ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);