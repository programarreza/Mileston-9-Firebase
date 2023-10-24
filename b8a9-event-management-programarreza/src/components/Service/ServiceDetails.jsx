import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
	const [service, setService] = useState()
	

	const { id } = useParams()
	const services = useLoaderData()


	useEffect(() => {
		const findService = services.find(service => service._id == id)
		setService(findService)
	}, [id, services])

	useEffect(() => {
		AOS.init({duration: 2000});
	}, [])

	// console.log(services);
	console.log(service);
	console.log(id);
	return (
		<div className="relative my-12  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md px-2 lg:px-8 xl:px-24 mx-auto" data-AOS="fade-down">
			<div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
				<div><img src={service?.image}
					alt="image"
					className="h-full w-full object-cover"
				/></div>

				<p className="my-8 px-2">{service?.description}</p>
			</div>
			
			<div className="pb-10 ml-3">
				<button className="btn text-white  bg-gradient-to-r from-sky-500 to-indigo-500">
					Booking Now <FaArrowRight/>
					</button>
			</div>
		</div>
	);
};

export default ServiceDetails;