// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCF0P5sCKfh_KsvFkcs5cQkY3uCvSKPjg",
  authDomain: "second-firebse-project.firebaseapp.com",
  projectId: "second-firebse-project",
  storageBucket: "second-firebse-project.appspot.com",
  messagingSenderId: "955593312105",
  appId: "1:955593312105:web:c3540b5efad911968ddff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;