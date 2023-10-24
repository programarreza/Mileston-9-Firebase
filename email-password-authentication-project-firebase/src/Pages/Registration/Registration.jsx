import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
// import auth from "../../firebase/firebase.config";

const Registration = () => {


	const handleFormSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log( email, password);
		// create user
		createUserWithEmailAndPassword(auth, email, password)
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit} className="flex flex-col w-1/3 mx-auto mt-24 border-2 py-24 p-3 rounded-lg">
				<input className="p-3 rounded-lg" type="email" name="email" id="" placeholder="Email Address" />
				<br />
				
				<input className="p-3 rounded-lg" type="password" name="password" id="" placeholder="Password"/>
				<br />
				<input className="bg-gray-700 w-24 mx-auto p-2 rounded-lg text-white cursor-pointer" type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Registration;