import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context_Provider/AuthProvider";

const Register = () => {
	const {createUser} = useContext(AuthContext)

	const handleRegister = (e) => {
		e.preventDefault()
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(name, email, password);

		// create use in firebase
		createUser(email, password)
		.then(result => {
			console.log(result.user);
		})
		.catch(error => {
			console.log(error);
		})
		
	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi </p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleRegister}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your Name</span>
								</label>
								<input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name="email" placeholder="email" className="input input-bordered" required/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" required/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input type="submit" className="btn btn-primary" value="Submit" />
							</div>
						</form>
						<p>Already have Account ? <Link to={"/login"}><button className="btn btn-link">Login</button></Link></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;