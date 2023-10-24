import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

const PrivateRoute = ({children}) => {
	
	const {user, loading} = useContext(AuthContext)
	console.log(loading);

	
	// wait here
	if(loading)return <h1 className="text-7xl">Loading</h1>

	if(!user?.email){
		return <Navigate to={"/login"}/>
	}

	return children;
};


PrivateRoute.propTypes = {
	children: PropTypes.node
}

export default PrivateRoute;