import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create account with email and pass 
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // update user profile
    const updateUserProfile = (updateData) => {
        setLoading(true);;
        return updateProfile(auth.currentUser, updateData);
    }

    // login with email and pass
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    //logout 
    const logOut = () => {
        return signOut(auth)
    }

    // set observer
    useEffect(() => {
        setLoading(true)
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => unSubcribe()
    }, [])



    const userInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        login,
        logOut,
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;