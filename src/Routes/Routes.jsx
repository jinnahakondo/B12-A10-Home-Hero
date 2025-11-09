import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: Login
            }
        ]
    }
])