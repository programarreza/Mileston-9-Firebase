import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-poppins ">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<Toaster/>
		</div>
	);
};

export default MainLayout;