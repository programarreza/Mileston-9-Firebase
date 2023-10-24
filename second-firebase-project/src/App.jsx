import { useState } from 'react';
import './App.css'
import app from './firebase/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function App() {

  const [signInUser, setSignInUser] = useState()
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        setSignInUser(loggedUser);
      })

      .catch(error => {
        console.log(error);
      })
  }
console.log(signInUser);
  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={handleGoogleSignIn}>sign in</button>

      <div>
        {
          signInUser && <div>
            <h3>User Name: {signInUser.displayName}</h3>
            <h3>User email: {signInUser.email}</h3>
            <img src={signInUser.photoURL} alt="" />
          </div>
        }
      </div>

    </>
  )
}

export default App
