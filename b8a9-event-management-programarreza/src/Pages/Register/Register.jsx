import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
	const { createUser, googleLogin, profileUpdate } = useContext(AuthContext)
	const [isShow, setIsShow] = useState(true)
	const navigate = useNavigate()

	const handleRegistration = (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget)
		const name = form.get("name")
		const photo = form.get("photo")
		const email = form.get("email")
		const password = form.get("password")
		console.log(name, photo, email, password);

		if (password.length < 6) {
			toast.error("Password should be at least 6 characters");
			return;
		}
		else if (!/^.*(?=.{8,})(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
			toast.error("Password should be at least one capital letter and one special character");
			return;
		}

		createUser(email, password)
			.then(result => {
				console.log(result.user);
				profileUpdate(result.user, {
					displayName: name, photoURL: photo
				})
				toast.success("Registration Successfully👏")
				navigate("/")
			})
			.catch(error => {
				toast.error(error.message);
			})
	}

	

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div className="text-center">
				</div>
				<div className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100">
					<form onSubmit={handleRegistration} className="card-body">
						<div className="form-control mb-3 ">
							<input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-sm" required />
						</div>
						<div className="form-control mb-3 ">
							<input type="text" name="photo" placeholder="Photo URL" className="input input-bordered rounded-sm" required />
						</div>
						<div className="form-control mb-3 ">
							<input type="email" name="email" placeholder="Email" className="input input-bordered  rounded-sm" required />
						</div>
						<div className="form-control mb-3 flex relative">
							<input type={isShow ? "password" : "text"} name="password" placeholder="Password" className="input input-bordered rounded-sm" required />
							<p onClick={() => setIsShow(!isShow)} className='text-xl absolute cursor-pointer mt-3 ml-[300px]'>{isShow ? <FaEye /> : <FaEyeSlash />}</p>
						</div>
						<div className="form-control my-2">
							<input type="submit" value="Create Account" className="btn btn-primary bg-gradient-to-br from-amber-100 via-cyan-200 to-violet-300 text-black" />
						</div>
						<div className='flex justify-between items-center'>
							<p>Already have an Account ? </p>
							<Link to={"/login"} className="btn-link"> Login</Link>
						</div>

						<div onClick={googleLogin} className="border cursor-pointer flex items-center gap-4 justify-center p-3 rounded-md text-lg font-medium mt-3">
							<FcGoogle />
							<button>Continue With Google</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;