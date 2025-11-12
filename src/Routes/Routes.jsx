import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/MyProfile/Profile";
import AddServices from "../Pages/Add services/AddServices";
import MyServices from "../Pages/MyServicess/MyServices";
import UpdateService from "../Components/UpdateService/UpdateService";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/services',
                Component: Services
            },
            {
                path: '/my-services',
                element: <PrivateRoutes>
                    <MyServices />
                </PrivateRoutes>
            },
            {
                path: `/update-service/:id`,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`),
                element: <PrivateRoutes>
                    <UpdateService />
                </PrivateRoutes>
            },
            {
                path: '/add-services',
                element: <PrivateRoutes>
                    <AddServices />
                </PrivateRoutes>
            },
            {
                path: '/my-profile',
                element: <PrivateRoutes>
                    <Profile />
                </PrivateRoutes>
            },
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])