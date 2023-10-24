import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

	const [loginError, setLoginError] = useState('')
	const [loginSuccess, setLoginSuccess] = useState('')
	const emailRef = useRef(null)

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		// add validation
		signInWithEmailAndPassword(auth, email, password)
		
		.then((result) => {
			console.log(result.user);
			// email validation
			if(result.user.emailVerified){
				setLoginSuccess("Login successfully");
			}
			else{
				alert("please verify your email address");
			}
		})
		.catch(() => {
			setLoginError("Invalid email or password");
		})
		setLoginError('')
		setLoginSuccess('')
	}


	const handleRestPassword = () => {
		const email = emailRef.current.value;
		if(!email){
			console.log("please provide your email", emailRef.current.value);
			return;
		}
		else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
			console.log("please write a valid email address");
			return;
		}

		// send validation email
		sendPasswordResetEmail(auth, email)
		.then(() => {
			alert("check your email");
		})
		.catch(() => {
			console.log("object");
		})
	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">

						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input 
								type="email" 
								name="email" 
								ref={emailRef}
								placeholder="email" 
								className="input input-bordered" 
								required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" required />
								<label className="label">
									<a onClick={handleRestPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div>
								{
									loginError && <p className="text-red-600">{loginError}</p>
								}
								{
									loginSuccess && <p className="text-green-500">{loginSuccess}</p>
								}
							</div>
							<div className="form-control mt-6">
								<input type="submit" className="btn btn-primary" value="Login" />
							</div>
						</form>
						<p>new to this website? Please <Link to="/registration_Hero" className="text-green-600 underline">Registration</Link></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

