// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeL03Vl1O8J6TWNdTMI8o0j8_8jxeXMhc",
  authDomain: "unb-app-project.firebaseapp.com",
  projectId: "unb-app-project",
  storageBucket: "unb-app-project.appspot.com",
  messagingSenderId: "1099103349023",
  appId: "1:1099103349023:web:b33de53d4dfc4c200ce82a",
  measurementId: "G-FFR6BVNCB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);