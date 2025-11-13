import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Components/Loader/Loader';

const MainLayout = () => {
    const { loading } = useAuth()
    if (loading) {
        return <Loader />
    }
    return (
        <div className=''>
            <header>
                <Navbar />
            </header>
            <main className='mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <div className='max-w-7xl mx-auto px-5'>
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;