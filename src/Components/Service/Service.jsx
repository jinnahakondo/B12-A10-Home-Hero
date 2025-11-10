import React from 'react';
import { Link } from 'react-router';

const Service = ({ service }) => {
    return (
        <div>
            <div className='service-card '>
                <div className=''>
                    <img
                        className='h-52 w-full '
                        src={service.image}
                        alt={service.title} />
                </div>
                <div className='bg-[#0000005b] absolute text-white top-0 h-full w-full grid  place-items-center'>
                    <div>
                        <h3 className='text-center text-lg font-medium mb-5'>{service.title}</h3>
                        {/* <p>{service.price}</p> */}
                        <div className='grid place-items-center'>
                            <Link to={'/auth'} className='btn btn-primary  hover px-8 py-4'>See Details</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;