import React, { useEffect } from 'react';
import Service from '../Service/Service';
import axios from 'axios';

const LatestServices = () => {
    useEffect(() => {
        axios.get('http://localhost:3000/services')
            .then(data => console.log(data.data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='heading text-center'>Latest Services</h2>
            <Service />
        </div>
    );
};

export default LatestServices;