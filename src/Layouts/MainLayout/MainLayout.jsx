import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=' h-screen'>
            <header>
                <Navbar />
            </header>
            <main className='mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <div className='max-w-7xl mx-auto pl-6'>
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;