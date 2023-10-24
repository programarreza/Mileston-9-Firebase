import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const ServiceCard = ({ course }) => {
	const { _id, name, image, description, price } = course;


	useEffect(() => {
		AOS.init({duration: 1000});
	}, [])

	return (
		<div className="card card-compact  bg-base-100 rounded-sm shadow-md pb-4" data-AOS = "fade-down">
			<figure><img className='w-full h-[250px] md:h-[420px]' src={image} alt="Shoes" /></figure>
			<div className=" p-2 space-y-3 mt-2">

				<div className='flex justify-between'>
					<h2 className="card-title text-base lg:text-xl">{name}</h2>
					<div className='lg:text-xl font-semibold'>
						<p>Cost: {price}</p>
					</div>
				</div>
				{
					description.length > 330 ? <p> {description.slice(0, 330)} <span className='text-blue-700'>Reade More....</span></p> : <p>{description}</p>
				}

				<div className="card-actions justify-center">

					<Link to={`/service_details/${_id}`} className='w-full'>
						<button className="btn w-full md:w-auto border-none text-white  bg-gradient-to-r from-sky-500 to-indigo-500">Details Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};


export default ServiceCard;

ServiceCard.propTypes = {
	course: PropTypes.object,
}