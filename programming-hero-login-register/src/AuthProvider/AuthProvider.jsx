import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)

	// google login
	const googleLogin = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
				
	}

	// sign up
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// sign in/Login 
	const loginUser = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// profile update
	const profileUpdate = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name, photoURL: photo,
		})
	}

	// Log Out User
	const logOut = () => {
		return signOut(auth)
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false)
		});

		return () => {
			unSubscribe();
		}

	}, [])


	const authInfo = {
		googleLogin,
		createUser,
		loginUser,
		logOut,
		profileUpdate,
		user,
		loading,
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node,
}

/**
 * 1. create context and export it
 * 2. set Provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider
 */