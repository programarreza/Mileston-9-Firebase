// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPF1TYi_vIyWNI5zK17aBkK_wplM_Zu6s",
  authDomain: "thath-firebase-project.firebaseapp.com",
  projectId: "thath-firebase-project",
  storageBucket: "thath-firebase-project.appspot.com",
  messagingSenderId: "319440154509",
  appId: "1:319440154509:web:e04d8e92494f1c48bc97c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;