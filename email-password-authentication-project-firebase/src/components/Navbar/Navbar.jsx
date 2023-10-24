import { NavLink } from "react-router-dom";

const Navbar = () => {

	const navLinks = <div className="flex gap-6 text-xl">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500 underline" : ""
			}
		>
			Home
		</NavLink>

		<NavLink
			to="/login"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500 underline" : ""
			}
		>
			Login
		</NavLink>

		<NavLink
			to="/registration"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500 underline" : ""
			}
		>
			Registration
		</NavLink>
		<NavLink
			to="/registration_Hero"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-500 underline" : ""
			}
		>
			Registration Hero
		</NavLink>
	</div>

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navLinks}
					</ul>
				</div>
				<a className="normal-case text-xl">Email Auth</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks}
				</ul>
			</div>
			
		</div>
	);
};

export default Navbar;