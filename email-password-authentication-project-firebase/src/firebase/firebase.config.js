// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5FxtKtkZphira5TtsPCFyrS299Nc5fyQ",
  authDomain: "email-pass-authenticatio-ce219.firebaseapp.com",
  projectId: "email-pass-authenticatio-ce219",
  storageBucket: "email-pass-authenticatio-ce219.appspot.com",
  messagingSenderId: "331804368565",
  appId: "1:331804368565:web:364fefc623ebeafd2ae8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;