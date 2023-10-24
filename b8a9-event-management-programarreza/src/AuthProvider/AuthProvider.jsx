import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { toast } from 'react-hot-toast';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	

	// login with google
	const googleProvider = new GoogleAuthProvider()
	const googleLogin = () => {
		signInWithPopup(auth, googleProvider)
		.then(() => {
			toast.success("Login Successfully 👏");
			
		})
		.catch(err => {
			console.error(err);
		})
	}

	// create user
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// login with email & password
	const logIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth,email, password)
	}


	// update profile
	const profileUpdate = (name, photo) => {
		setLoading(true);
		return updateProfile(name, photo)
	}


	
	// sign out
	const logout = () => {
		setLoading(true)
		return signOut(auth);
	}


	console.log(35, user);
	
	
	// observer
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false)
		})
		return () => {
			unSubscribe();
		}
	},[])


	const AuthDetails = {
		user,
		loading,
		googleLogin,
		createUser,
		logIn,
		logout,
		profileUpdate,
	}

	return (
		<AuthContext.Provider value={AuthDetails}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node
}