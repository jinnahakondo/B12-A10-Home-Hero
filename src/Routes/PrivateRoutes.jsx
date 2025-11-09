import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user } = useAuth()
    if (!user) {
        return <Navigate to={'/auth'} state={location.pathname} />
    }
    return children
};

export default PrivateRoutes;