// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA546kVWaeAEHPb7S0pAXf8729PwOktV_k",
  authDomain: "homepage-editor.firebaseapp.com",
  projectId: "homepage-editor",
  storageBucket: "homepage-editor.firebasestorage.app",
  messagingSenderId: "879743851252",
  appId: "1:879743851252:web:d448f3a38313f667ca9ca1",
  measurementId: "G-3DEQ6PF3QR"
};

const stagingFirebaseConfig = {
  apiKey: "AIzaSyC9pu-lfiNALgo01sGqwLV3SYmaU7Lqr5I",
  authDomain: "homepage-editor-staging.firebaseapp.com",
  projectId: "homepage-editor-staging",
  storageBucket: "homepage-editor-staging.firebasestorage.app",
  messagingSenderId: "423402655829",
  appId: "1:423402655829:web:07e05ed5bdc468273dc4dc",
  measurementId: "G-EH7EFY3DBH"
};

// Initialize Firebase
export const app = initializeApp(import.meta.env.PROD ? firebaseConfig : stagingFirebaseConfig);
export const analytics = getAnalytics(app);

if (!import.meta.env.prod) console.log(`Firebase initialized with project ID: ${app.options.projectId}`);