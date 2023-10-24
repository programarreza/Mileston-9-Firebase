import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext)
	// console.log(user);


	const navLinks = <div className="flex gap-7 text-base">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			Home
		</NavLink>
		<NavLink
			to="/register"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			Register
		</NavLink>
		<NavLink
			to="/login"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			Login
		</NavLink>
	</div >
	return (
		<div className="navbar bg-base-100 shadow-xl">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navLinks}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Programming Hero</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks}
				</ul>
			</div>
			<div className="navbar-end">
				{
					user ? <div>
						<div className="dropdown dropdown-bottom dropdown-end">
							<div tabIndex={0} className="avatar">
								<div className="w-12 rounded-full">
									<img src={user.photoURL} alt={user.displayName} />
								</div>
							</div>
							<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
								<li><a>{user.displayName}</a></li>
								<li> <button
									onClick={logOut}
									className="btn btn-sm btn-ghost">
									Logout
								</button>
								</li>
							</ul>
						</div>
					</div>
						:

						<Link to={"/login"}><button
							onClick={logOut}
							className="btn btn-sm btn-ghost">
							LogIn
						</button>
						</Link>
				}
			</div>
		</div>
	);
};

export default Navbar;