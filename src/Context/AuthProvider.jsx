import React, { useState } from 'react';
import { AuthContext } from './AuthContex';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userInfo = {
        name: "Jinnah"
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;