import React, { useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create account with email and pass 
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // login with email and pass
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const userInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;