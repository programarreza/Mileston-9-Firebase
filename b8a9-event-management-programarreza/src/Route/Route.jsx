import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../components/Service/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/service_details/:id",
				element: <PrivateRoute>
							<ServiceDetails></ServiceDetails>
						</PrivateRoute>,
				loader: () => fetch("/data.json")
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "blog",
				element: <PrivateRoute>
					<Blog></Blog>
				</PrivateRoute>
			},
			{
				path: "contact",
				element: <PrivateRoute>
					<Contact></Contact>
				</PrivateRoute>

			}
		]
	}
])

export default router;