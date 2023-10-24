import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Toaster/>
		</div>
	);
};

export default MainLayout;