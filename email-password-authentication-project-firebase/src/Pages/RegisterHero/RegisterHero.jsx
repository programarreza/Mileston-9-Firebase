import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const RegisterHero = () => {
	// const [useInfo, setUserInfo] = useState()
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const [isShow, setIsShow] = useState(false)

	const handleRegistrationHero = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const accept = e.target.terms.checked;
		console.log(name, email, password, accept);

		// password validation
		if (password.length < 6) {
			setError("Password should be at least 6 characters")
			return;
		}
		else if (!/[A-Z]/.test(password)) {
			setError('Your password should at least one upper case characters')
			return;
		}
		else if(!accept){
			setError("Please Accept our terms and conditions")
			return;
		}

		// reset error message
		setError('')
		setSuccess('')

		// create use
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				
				setSuccess("Registration Successfully")

				// update profile
				updateProfile(result.user, {
					displayName: name,
					photoURL: "https://example.com/jane-q-user/profile.jpg"
				})
				.then( () => console.log("profile updated"))
				.catch( () => console.log("error"))

				// send verification email:
				sendEmailVerification(result.user)
				.then(() => {
					alert('please check your email and verify your account');
				})
			})
			.catch(error => {
				setError(error.message);
			})
	}
console.log(success);
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Registration now!</h1>
						<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">

							<form onSubmit={handleRegistrationHero}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="email" name="email" placeholder="email" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Your Name</span>
									</label>
									<input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										type={isShow ? "password" : "text"}
										name="password"
										placeholder="password"
										className="input input-bordered relative"
										required />

									<span onClick={() => setIsShow(!isShow)} className="text-2xl absolute mt-12 ml-72 cursor-pointer"> {isShow ? <BiSolidHide></BiSolidHide> : <BiSolidShow></BiSolidShow>}  </span>
									<div className="flex items-center justify-between mt-2">
										<div >
										<input type="checkbox" name="terms" id="terms" className="mr-2" />
										<label htmlFor="terms">Accept our <a href="#">Conditions</a></label>
										</div>
									</div>
									{
										error && <p className="text-center text-red-600">{error}</p>
									}
									{
										success && <p className="text-center text-green-600">{success}</p>
									}
								</div>
								<div className="form-control mt-6">
									<input className="btn btn-primary" type="submit" value="Submit" />
								</div>
							</form>
							<p >already have an account?? Please <Link to="/login" className="text-green-600 underline">Login</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterHero;