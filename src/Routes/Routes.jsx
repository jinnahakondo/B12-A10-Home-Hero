import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import MyServices from "../Pages/My-Services/MyServices";

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
                element: <p>service</p>
            },
            {
                path: '/my-services',
                element: <PrivateRoutes>
                    <MyServices />
                </PrivateRoutes>
            },
            {
                path: '/add-services',
                element: <PrivateRoutes>
                    <p>add service</p>
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