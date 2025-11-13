import React, { useEffect, useState } from 'react';
import useSecureAxios from '../../Hooks/useSecureAxios';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Components/Loader/Loader';
import Service from '../../Components/Service/Service';

const Services = () => {
    const { loading, user } = useAuth()
    const [services, setServices] = useState([])
    const instance = useSecureAxios();

    useEffect(() => {
        if (user) {
            instance.get('/services')
                .then(data => {
                    setServices(data.data)
                })
        }
    }, [instance, user])
    console.log(services);
    if (loading) return <Loader />
    return (
        <div className='max-w-7xl mx-auto px-5 mt-20'>
            <h2 className='heading text-center mb-5'>All Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <Service key={service._id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;