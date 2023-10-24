import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {

	const [services, setService] = useState([])

	useEffect(() => {
		fetch("/team.json")
			.then(res => res.json())
			.then(data => setService(data))

	}, [])

	useEffect(() => {
		AOS.init({duration: 1000});
	}, [])

	console.log(14, services);
	return (
		<div className="my-12 bg-gray-50 rounded-md px-2 lg:px-8 xl:px-24 mx-auto">
			<h2 className="text-center text-4xl font-medium  mb-5">Meet Our Team</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2" data-AOS="fade-left">
				{
					services.map(service => <div key={service.id}>
						<div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
							<div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
								<img className="h-64 w-full" src={service?.team_img} alt="profile-picture" />
							</div>
							<div className="p-6 text-center">
								<h4 className=" block font-sans text-2xl xl:text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
									{service?.team_parson}
								</h4>
								<p className="block text-lg xl:text-xl font-medium text-gray-500 leading-relaxed antialiased">
									{service?.designation}
								</p>
								<div className="text-start">
								{
									service?.team_description.length > 80 ? <p className="font-medium"> {service?.team_description.slice(0, 80)} <span className='text-blue-700'></span></p> : <p>{service?.team_description}</p>
								}
								</div>

							</div>
							<div className="flex justify-center gap-7 pb-6 text-2xl">
								<Link to={""} className="text-blue-700">
								<FaFacebook/>
								</Link>

								<Link to={""} className="text-pink-500">
								<FaInstagram/>
								</Link>

								<Link to={""} className="text-[#0E76A8]">
								<FaLinkedin/>
								</Link>
								<Link to={""} className="text-[#00ACEE]">
								<FaTwitterSquare/>
								</Link>
								
							</div>
						</div>

					</div>)
				}
			</div>
		</div>
	);
};

export default OurTeam;