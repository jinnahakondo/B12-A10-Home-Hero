import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import axios from 'axios';
import useAxios from '../../Hooks/useAxios';

const LatestServices = () => {
    const instance = useAxios()
    const [service, setService] = useState([])
    useEffect(() => {
        instance.get('/services')
            .then(data => {
                setService(data.data)
            })
    }, [])
    console.log(service);
    return (
        <div className='my-20'>
            <h2 className='heading text-center mb-5'>Latest Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {service.map(service => <Service key={service._id} service={service} />)}
            </div>
        </div>
    );
};

export default LatestServices;