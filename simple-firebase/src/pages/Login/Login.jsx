import { useState } from "react";
import app from "../../Firebase/firebaseInit";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
	const [user, setUser] = useState(null)
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider()
	const githubProvider = new GithubAuthProvider()

	const handleGithubSignIn = () => {
		signInWithPopup(auth, githubProvider)
		.then(result  => {
			const loggedUser = result.user;
			console.log(loggedUser);
			setUser(loggedUser);
		})
		.catch(error => {
			console.log(error);
		})
	}

	const handleSingOut = () => {
		signOut(auth)
			.then(result => {
				console.log(result);
				setUser(null)
			})
			.catch(error => {
				console.log(error);
			})
	}

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				const loginUser = result.user;
				setUser(loginUser);
			})
			.catch(error => {
				console.log(error);
			})

	}
	console.log(user);
	return (
		<div>
			{user ? <button onClick={handleSingOut}>Sign Out</button>
				: <>
					<button onClick={handleGoogleSignIn}>Google Login</button>
					<button onClick={handleGithubSignIn}>Github Login</button>
				</>
			}
			{
				user && <div>
					<h3>User Name: {user.displayName}</h3>
					<h3>User Email: {user.email}</h3>
					<h3><img src={user.photoURL} alt="" /> </h3>
				</div>
			}
		</div>
	);
};

export default Login;