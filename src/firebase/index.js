// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Qh-hVCCV8rke0o1UJqOvmdHQZ8kPMH0",
  authDomain: "make-apps-with-danny-vuefire.firebaseapp.com",
  projectId: "make-apps-with-danny-vuefire",
  storageBucket: "make-apps-with-danny-vuefire.appspot.com",
  messagingSenderId: "733715492888",
  appId: "1:733715492888:web:8c7ded7ed531db2c5f536d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
