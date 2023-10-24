// import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import 'react-phone-number-input/style.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Register.css';


const Register = () => {
	const { createUser, profileUpdate } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		// get file value
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const image = "https://i.ibb.co/qBrrd5N/image.png"
		// const number = e.target.number.value;
		console.log(name, email, password);

		// validation
		if (password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}

		// create a new user.
		createUser(email, password)

			.then(result => {
				console.log(result.user);

				// update profile
				profileUpdate(name, image) 
				.then(() => {
					toast.success("Registration successfully");
					navigate("/");
				})
				.catch((error) => {
					console.log(error.message);
				});

			})
			.catch(error => {
				toast.error(error.message)
			})
	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div className="text-center ">
					<h1 className="text-5xl font-bold">Register now!</h1>

				</div>
				<div className="card flex-shrink-0 w-[400px] max-w-md shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleRegister}>
							<div className="form-control mb-4">
								<input type="text" name="name" placeholder="Name" className="input input-bordered" required />
							</div>
							<div className="form-control mb-4">
								<input type="email" name="email" placeholder="Email" className="input input-bordered" required />
							</div>
							{/* <div className="form-control mb-4 w-full ">
								<PhoneInput type="number"  placeholder="+880" defaultCountry={'BD'} value={value}  onChange={setValue} >
									
								</PhoneInput>

							</div> */}
							<div className="form-control mb-4">
								<input type="password" name="password" placeholder="Password" className="input input-bordered" />
							</div>
							<div className="form-control">
								{/* <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" /> */}
								<div className="flex items-center justify-between mt-4">
									<div className="flex items-center gap-2">
										<input className="cursor-pointer" type="checkbox" name="checkbox" id="" />
										<p>I agree to the</p>
									</div>
									<label className="label">
										<a href="#" className="label-text-alt link link-hover underline">terms and conditions</a>
									</label>
								</div>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
							<p className="text-center mt-4">Already have Account ? <Link to="/login" className="text-[#1976D2]">Login Here</Link></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;