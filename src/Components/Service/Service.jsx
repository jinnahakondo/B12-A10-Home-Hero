import React from 'react';
import { Link } from 'react-router';
import { SlCalender } from "react-icons/sl";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Service = ({ service }) => {
    return (
        <div className='h-full'>
            <div className="card h-full bg-base-100 shadow-sm p-4">
                <figure>
                    <img
                        src={service.image} className='h-64 w-full rounded-lg object-cover' />
                </figure>
                <div className='my-5 space-y-2'>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <span className='text-primary font-bold'> <SlCalender /></span>
                        <p>{service.created_at.slice(0, 10)}</p>
                    </div>
                    <h3 className='text-lg md:text-xl lg:text-2xl font-semibold'>{service.title}</h3>
                    <div className='text-gray-500 flex items-center gap-2'>
                        <p className='font-medium'>Price:</p>
                        <p className='font-medium'>BDT {service.Price}</p>
                    </div>
                </div>
                <div className='mt-auto'>
                    <Link to={`/service-details/${service._id}`} className='btn btn-primary hover flex justify-center items-center gap-2 '>view Details <span className='text-lg mt-1'><FaRegArrowAltCircleRight /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;


