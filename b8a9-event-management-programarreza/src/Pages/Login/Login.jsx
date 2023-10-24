import { useContext, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {
	const {googleLogin, logIn} = useContext(AuthContext)
	const [isShow, setIsShow] = useState(true)
	const location = useLocation()
	const navigate = useNavigate()
	console.log(location);

	const handleLogin = (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");

		console.log(email, password);
		
		logIn(email, password)
		.then(result => {
			toast.success("Login successfully 👏")
			console.log(result.user);
			navigate(location?.state ? location?.state : "/")

		})
		.catch(err => {
			toast.error(err.message);
		})

	}
	
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div className="text-center">
				</div>
				<div className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control mb-3">
							<input type="email" name="email" placeholder="Email" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<input type={isShow ? "password" : "text"}name="password" placeholder="Password" className="input input-bordered" required />
							<p onClick={() => setIsShow(!isShow)} className='text-xl absolute cursor-pointer mt-3 ml-[300px]'>{isShow ? <FaEye /> : <FaEyeSlash />}</p>
							<label className="label mt-2">
								<Link to={""} className="label-text-alt link link-hover">Forgot password?</Link>
							</label>
						</div>
						<div className="form-control my-2">
							<input type="submit" className="btn btn-primary bg-gradient-to-br from-amber-100 via-cyan-200 to-violet-300 text-black" value="Login" />
						</div>
						<p>Dont have an Account ? <Link to={"/register"} className="btn-link"> Create Account</Link> </p>

						<div onClick={googleLogin} className="border cursor-pointer flex items-center gap-4 justify-center p-3 rounded-md text-lg font-medium mt-3">
							<FcGoogle/>
							<button >Login With Google</button>
						</div>
					</form>
					<Toaster />
				</div>
			</div>
		</div>
	);
};

export default Login;