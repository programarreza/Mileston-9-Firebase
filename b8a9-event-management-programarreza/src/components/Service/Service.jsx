import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		fetch('/data.json')
			.then(response => response.json())
			.then(data => setCourses(data))

	}, [])

	// console.log(courses);

	return (
		<div className="grid md:grid-cols-2 gap-5 px-2 lg:px-8 xl:px-24 mx-auto">
			{
				courses?.map(course  => <ServiceCard course={course} key={course._id}></ServiceCard>)
			}
			
		</div>
	);
};

export default Service;