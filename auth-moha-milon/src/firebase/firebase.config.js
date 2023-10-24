// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPPEad8nUbDDcz3_sztnOUiEob_f2yaoI",
  authDomain: "auth-moha-milon-b64df.firebaseapp.com",
  projectId: "auth-moha-milon-b64df",
  storageBucket: "auth-moha-milon-b64df.appspot.com",
  messagingSenderId: "686473720627",
  appId: "1:686473720627:web:879022d1e0b6a136778446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;