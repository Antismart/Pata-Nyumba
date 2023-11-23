// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "patanyumba-ee6a7.firebaseapp.com",
  projectId: "patanyumba-ee6a7",
  storageBucket: "patanyumba-ee6a7.appspot.com",
  messagingSenderId: "696133679601",
  appId: "1:696133679601:web:86c881d2c7cf108269ec50",
  measurementId: "G-LRYF1B1G9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);