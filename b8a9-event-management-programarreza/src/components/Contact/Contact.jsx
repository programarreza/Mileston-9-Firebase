import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaTwitterSquare } from "react-icons/fa";
import { HiOutlineMailOpen, HiPhoneIncoming } from "react-icons/hi";
import { Link } from "react-router-dom";



const Contact = () => {
	return (
		<div className="grid lg:grid-cols-2 px-2 lg:px-8 xl:px-24 mx-auto">
			<div className="bg-gradient-to-tr from-blue-400 via-blue-200 to-blue-400 p-5">
				<h2 className="text-4xl font-medium mb-12 text-center lg:text-start lg:mt-24">Contact Us</h2>
				<div className="text-xl md:text-2xl">
				<p className=" mb-6 flex items-center gap-2"><FaMapMarkedAlt className="text-[#424964]" /> 420 Love Sreet 133/2 Street Dhaka</p>
				<p className=" mb-6 flex items-center gap-2"><HiOutlineMailOpen className="text-[#424964] " /> corporet.event@gmail.com
				</p>
				<p className=" flex items-center gap-2"> <HiPhoneIncoming className="text-[#424964]" /> 01967-310130
				</p>
				</div>

				{/* social Link */}
				<div className="flex gap-12 pb-6 text-4xl mt-12">
					<Link to={""} className="text-blue-700">
						<FaFacebook />
					</Link>

					<Link to={""} className="text-pink-500">
						<FaInstagram />
					</Link>

					<Link to={""} className="text-[#0E76A8]">
						<FaLinkedin />
					</Link>
					<Link to={""} className="text-[#00ACEE]">
						<FaTwitterSquare />
					</Link>

				</div>
			</div>
			<div className="h-[400px] lg:h-screen">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117869.85315614488!2d90.20260907475037!3d22.60030367738209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aab53b036df139%3A0xad84f4a2bee17eaf!2sNalchity%20Upazila!5e0!3m2!1sen!2sbd!4v1696787808024!5m2!1sen!2sbd"
					width="100%"
					height="100%"
					style={{ border: "0" }}
					allowfullscreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade">

				</iframe>
			</div>
		</div>
	);
};

export default Contact;