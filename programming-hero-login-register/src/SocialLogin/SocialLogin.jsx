import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {

	const { googleLogin} = useContext(AuthContext)
	const navigate = useNavigate();

	const handleSocialLogin = (media) => {
		media()
		.then(() => {
			toast.success("Login Successfully")
			navigate("/")
		})
		.catch(error => {
			console.log(error);
		})
	}
	return (
		<div>
			<button onClick={() =>  handleSocialLogin(googleLogin)} className="btn btn-primary btn-sm">Google</button>
		</div>
	);
};

export default SocialLogin;