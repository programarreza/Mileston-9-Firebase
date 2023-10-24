import { useEffect, useState } from "react";
import { BsCalendar3Week } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {

	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch("/team.json")
		.then(res => res.json())
		.then(data => setBlogs(data))
	},[])

	useEffect(() => {
		AOS.init({duration: 1000});
	}, [])

	console.log(16, blogs);
	return (
		<div>
			<div className="bg-gray-300 mb-8 md:mb-12" data-AOS="fade-left">
				<img className='h-[300px] md:h-[90vh] w-full relative' src="https://i.ibb.co/Php39k5/bg-2-jpg.webp" alt="" />

				<h2 className="absolute -mt-16 ml-5 text-3xl text-white">Our Blog</h2>
			</div>

			<div>
				{
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 lg:px-8 xl:px-24 mx-auto mb-12" data-AOS="fade-top">
					{
						blogs.map(blog => <div key={blog.id}>
							<div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
								<div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
									<img className="h-64 w-full" src={blog?.blog_img} alt="profile-picture" />
								</div>
								<div className="p-6">
									<div className=" font-semibold flex items-center gap-2 underline">
										<BsCalendar3Week/>
									<p>{blog?.blog_date}</p>
									</div>
									<h4 className=" block font-sans text-2xl xl:text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
										{blog?.blog_title}
									</h4>
									<p className="block text-lg xl:text-xl font-medium text-gray-500 leading-relaxed antialiased">
										{blog?.blog_description}
									</p>
								</div>
							</div>
						</div>)
					}
				</div>
				}
			</div>
		</div>
	);
};

export default Blog;