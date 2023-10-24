import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Context_Provider/AuthProvider";

const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => console.log("user logged out successfully"))
			.catch(error => console.error(error))
	}

	const links = <div className="flex gap-12 text-lg">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500" : ""
			}
		>
			Home
		</NavLink>
		<NavLink
			to="/login"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500" : ""
			}
		>
			Login
		</NavLink>
		<NavLink
			to="/register"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500" : ""
			}
		>
			Register
		</NavLink>
		{
			user ? <>
				<span>{user.email}</span>
				<button onClick={handleLogOut} className="btn btn-sm">Sign out</button>
			</> : <button className="btn btn-sm"><Link to="/login">Login</Link></button>
		}
	</div>
	return (
		<div className="navbar bg-gray-500 text-white rounded-md">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{links}
					</ul>
				</div>
				<a className="normal-case text-xl">daisyUI</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links}
				</ul>
			</div>

		</div>
	);
};

export default Navbar;