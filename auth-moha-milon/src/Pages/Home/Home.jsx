import { useContext } from "react";
import { AuthContext } from "../../Context_Provider/AuthProvider";

const Home = () => {
	const authInfo  = useContext(AuthContext)
	return (
		<div>
			my name is : {authInfo.name}
		</div>
	);
};

export default Home;