import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {

	useEffect(() => {
		AOS.init({duration: 1000});
	}, [])


	return (
		<div>
			<div
				className="w-full h-[70vh] bg-[url('https://i.ibb.co/t388KxC/cta-1-jpg.webp')] bg-cover bg-center" data-AOS="fade-top">
				<div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
					<div>
						<h2 className="text-white text-3xl md:text-5xl text-center">Subscribe to stay informed</h2>
						<p className="text-center text-white my-4">Shortest way to explore what will happen on Inconference</p>

						<div className="mt-5 mx-auto text-center">
							<input className="p-4 md:px-24 border-r-0 bg-transparent border rounded-lg rounded-r-none outline-none text-white" type="email" placeholder="your email address.." />
							<button className="border py-4 bg-slate-200 px-2 rounded-r-md " >Subscribe!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;