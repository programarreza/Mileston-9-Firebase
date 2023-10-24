import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext)




	const handleSignOut = () => {
		logout()
			.then(result => {
				console.log(result.user);
			})
			.catch(err => {
				console.error(err);
			})
	}

	const navLinks = <div className="flex gap-10 font-semibold text-lg">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-600  underline" : ""
			}
		>
			Home
		</NavLink>
		<NavLink
			to="/blog"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-600  underline" : ""
			}
		>
			Blog
		</NavLink>
		<NavLink
			to="/contact"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-600  underline" : ""
			}
		>
			Contact
		</NavLink>
	</div>

	console.log(38, user);

	return (
		<div>
			<div className="navbar bg-base-100 shadow-xl p-2 rounded-md px-2 lg:px-8 xl:px-24 mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-62">
							{navLinks}
						</ul>
					</div>
					<div className="normal-case text-3xl font-semibold flex items-center gap-2">
						<img className="w-14" src="https://i.ibb.co/KbDLS71/75d4009ea942504b8be5.webp" alt="" />
						<p className="hidden md:block text-2xl lg:text-3xl">Corporate Events</p>
					</div>

				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{navLinks}
					</ul>
				</div>
				<div className="navbar-end">
					{
						user && <p className="font-medium mr-2">{user?.displayName}</p>
					}
					<div className="avatar">
						<div className="w-12 rounded-full mr-3">
							{
								user ? <div>
									<img src={user?.photoURL} />
								</div>
									:
									<img src="/profile.png" />
							}

						</div>
					</div>
					{
						user ? <Link to={"/login"}>
							<button onClick={handleSignOut} className="btn">Login Out</button>
						</Link>
							:
							<Link to={"/login"}>
								<button className="btn">Login</button>
							</Link>
					}
				</div>
			</div>
		</div>
	);
};

export default Navbar;