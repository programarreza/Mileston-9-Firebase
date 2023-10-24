import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
	const navigate = useNavigate()

	const { loginUser } = useContext(AuthContext)

	const handleLogin = (e) => {
		e.preventDefault();
		// get file values
		const email = e.target.email.value;
		const password = e.target.password.value;

		console.log(email, password)

		// validations
		if (password.length < 6) {
			console.log("password must be at least 6 characters longer");
		}

		// login user
		loginUser(email, password)
			.then(() => {
				toast.success("Login successfully");
				navigate("/");
			})
			.catch(error => {
				console.log(error);
			})
	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div className="text-center ">
					<h1 className="text-5xl font-bold">Login now! </h1>

				</div>
				<div className="card flex-shrink-0 w-[400px] max-w-md shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleLogin}>
							<div className="form-control mb-4">
								<input type="email" name="email" placeholder="Email" className="input input-bordered" required />
							</div>

							<div className="form-control">
								<input type="password" name="password" placeholder="Password" className="input input-bordered" required />

							</div>
							<div className="flex items-center justify-between mt-4">
								<div className="flex items-center gap-2">
									<input className="cursor-pointer" type="checkbox" name="checkbox" id="" />
									<p>Remember Me</p>
								</div>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input className="btn btn-primary" type="submit" value="Login" />
							</div>
							<p className="text-center mt-4">New User ? <Link to="/register" className="text-[#1976D2]">Register Here</Link></p>
						</form>
						<SocialLogin />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;