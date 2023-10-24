import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineMailOpen, HiPhoneIncoming } from "react-icons/hi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {

	useEffect(() => {
		AOS.init({duration: 1000});
	}, [])

	return (
		<div className=" bg-[#0f1631] text-white ">
			<footer className="footer ml-0  p-8 md:p-3 lg:p-10 mx-auto px-2 lg:px-8 xl:px-0  text-white " data-AOS="fade-down">
				<nav className="xl:ml-20">
					<header className="font-semibold text-2xl">Contact Us</header>
					<p className=" text-lg mb-3 flex items-center gap-2"><FaMapMarkedAlt className="text-blue-600"/> 420 Love Sreet 133/2 Street Dhaka</p>
					<p className=" text-lg mb-3 flex items-center gap-2"><HiOutlineMailOpen className="text-blue-600 "/> corporet.event@gmail.com
					</p>
					<p className=" text-lg flex items-center gap-2"> <HiPhoneIncoming className="text-blue-600"/> 01967-310130
					</p>
				</nav>
				<nav>
					<header className="font-semibold text-2xl ">Corporate Events</header>
					<Link to={"https://online-academy-6ca5b.web.app/service_details/1"} className="link link-hover text-lg">Conferences And Seminars</Link>
					<Link to={"https://online-academy-6ca5b.web.app/service_details/2"} className="link link-hover text-lg">Trade Shows and Expos</Link >
					<Link to={"https://online-academy-6ca5b.web.app/service_details/3"} className="link link-hover text-lg">Team Building Workshops</Link>
					<Link to={"https://online-academy-6ca5b.web.app/service_details/4"} className="link link-hover text-lg">Product Launches</Link>
					<Link to={"https://online-academy-6ca5b.web.app/service_details/5"} className="link link-hover text-lg">Corporate Meetings</Link>
					<Link to={"https://online-academy-6ca5b.web.app/service_details/6"} className="link link-hover text-lg">Award Ceremonies</Link>
				</nav>
				<nav className="">
					<header className="font-semibold text-2xl">News & Blog</header>
					<div>
						<h2 className="text-lg">Team Building Workshops</h2>
						<div className="flex items-center gap-2 mb-6">
							<HiOutlineCalendar/>
							<p>December 7, 2022</p>
						</div>
						<h2 className="text-lg mt-14">Award Ceremonies</h2>
						<div className="flex items-center gap-2">
							<HiOutlineCalendar/>
							<p>Jun 17, 2023</p>
						</div>
					</div>
				</nav>
				
			</footer>
			
		</div>
	);
};

export default Footer;