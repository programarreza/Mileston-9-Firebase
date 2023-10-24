import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import RegisterHero from "../Pages/RegisterHero/RegisterHero";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/registration",
				element: <Registration></Registration>
			},
			{
				path: "/registration_Hero",
				element: <RegisterHero></RegisterHero>
			}
		]
	}
])

export default router;