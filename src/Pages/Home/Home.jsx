import React from 'react';
import Hero from '../../Components/Hero/Hero';
import LatestServices from '../../Components/LatestServices/LatestServices';
import ChooseUs from '../../Components/WhyChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='max-w-7xl mx-auto space-y-20 px-5'>
                <LatestServices />
                <ChooseUs />
            </div>
        </div>
    );
};

export default Home;