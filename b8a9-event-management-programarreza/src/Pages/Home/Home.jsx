import Banner from "../../components/Header/Banner/Banner";
import OurTeam from "../../components/OurTeam/OurTeam";
import Service from "../../components/Service/Service";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Service></Service>
			<OurTeam></OurTeam>
			<Subscribe></Subscribe>
		</div>
	);
};

export default Home;