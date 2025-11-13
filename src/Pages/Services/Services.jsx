import React, { useEffect, useState } from 'react';
import useSecureAxios from '../../Hooks/useSecureAxios';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Components/Loader/Loader';
import Service from '../../Components/Service/Service';

const Services = () => {
    const { loading, user } = useAuth()
    const [services, setServices] = useState([])
    const instance = useSecureAxios();
    const [priceMin, setPriceMin] = useState(null)
    const [priceMax, setPriceMax] = useState(null)

    useEffect(() => {
        if (user) {
            instance.get('/services')
                .then(data => {
                    setServices(data.data)
                })
        }
    }, [instance, user])
    // console.log(priceMax, priceMin);
    const handelFilter = () => {
        if (priceMin) {
            instance.get(`/services?min=${priceMin}`)
                .then(data => {
                    setServices(data.data)
                })
        }
        else if (priceMax) {
            instance.get(`/services?max=${priceMax}`)
                .then(data => {
                    setServices(data.data)
                })
        }
    }

    if (loading) return <Loader />
    return (
        <div className='max-w-7xl mx-auto px-5 mt-20'>
            <h2 className='heading text-center mb-5'>All Services</h2>
            {/* price filtering */}
            {/* <h3 className='text-lg font-semibold'> Filter Services </h3> */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 mb-5'>

                <div className='flex flex-col gap-2 '>
                    <label >Under your Price</label>
                    <input onChange={(e) => {
                        setPriceMin(e.target.value)
                    }} type="number" placeholder='enter your price to filter' name='serviceName' className='h-12 rounded-lg border px-5 border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label > Graterthan your price </label>
                    <input onChange={(e) => { setPriceMax(e.target.value) }} type="number" placeholder='enter your price to filter' name='serviceName' className='h-12 rounded-lg border px-5 border-gray-300 outline-0' />
                </div>
                <button onClick={handelFilter} className='btn btn-primary'>Filter</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <Service key={service._id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;