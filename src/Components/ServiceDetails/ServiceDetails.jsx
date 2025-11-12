import React, { useEffect, useState } from 'react';
import { data, useNavigate, useParams } from 'react-router';
import useSecureAxios from '../../Hooks/useSecureAxios';
import Loader from '../Loader/Loader';

const ServiceDetails = () => {
    const navigate = useNavigate()
    const instance = useSecureAxios()
    const { id } = useParams()
    const [service, setService] = useState(null)
    console.log(service);
    useEffect(() => {
        instance.get(`/services/${id}`)
            .then(data => {
                setService(data.data)
            })
    }, [instance, id])
    if (!service) {
        return <Loader />
    }

    return (
        <div className='max-w-7xl mx-auto px-5 mt-20 min-h-screen'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                <div>
                    <img src={service.image} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-lg  md:text-2xl lg:text-4xl font-bold mb-3'>{service.title}</h2>
                    <p className='font-medium'>{service.Price}</p>
                    <div>
                        <p className='text-gray-500 font-bold'>description:</p>
                        <p className='text-gray-500'>{service.Description}</p>
                    </div>
                    <p className='text-gray-500'>Provider Name: {service.provider}</p>
                    <p className='text-gray-500'>Provider Email: {service.Email}</p>
                    <p className='text-gray-500'>published date: {service.created_at}</p>

                </div>
            </div>
            <div className='mt-10 flex input-accent gap-5'>
                <button onClick={() => navigate(-1)} className='btn py-5 bg-black text-white'>Go Back</button>
                <button className='btn btn-primary px-8'>Book now</button>
            </div>
        </div>
    );
};

export default ServiceDetails;