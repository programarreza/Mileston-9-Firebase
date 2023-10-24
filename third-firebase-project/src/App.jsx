import './App.css'
import { TwitterAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from './firebase/firebase.config';
import { useState } from 'react';

function App() {

  const [userValue, setUserValue] = useState()
  
  const handleTwitterSignIn = () => {
    
    const auth = getAuth(app)
    const twitterProvider = new TwitterAuthProvider();
    signInWithPopup(auth, twitterProvider)

    .then(result => {
      const user = result.user;
      setUserValue(user);
      })

      .catch(error => {
        console.log(error);
      })
    }
    console.log(userValue)
    
  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleTwitterSignIn}>Sign In</button>
      {/* <h3>User Name: {user.displayName}</h3>
      <h4>User email: {user.email}</h4>
      <img src={user.photoURL} alt="" /> */}
    </>
  )
}

export default App;
