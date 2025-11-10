import React from 'react';
import HomeVideo from '../../assets/homeClining.mp4'
import Clean from '../../assets/Clean.jpg'
import Electrician from '../../assets/elitrician.jpg'
import Gardening from '../../assets/gardening.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination
                loop
                autoplay={{ delay: 3000 }}
                speed={500}
            >
                <SwiperSlide>

                    <div className='mx-auto relative h-[90vh] -z-30 bg-white'>

                        <img src={Clean} alt="" className='h-full object-cover w-full' />
                    </div>
                    <div className=' bg-[#0000004d] absolute top-0 w-full flex justify-center items-center flex-col min-h-full'>
                        <div className='max-w-7xl mx-auto grid place-items-center px-5'>
                            <h1 className='text-3xl lg:text-5xl font-extrabold text-white text-center '>Professional House Cleaning <br /> Services</h1>
                            <p className='text-white text-center my-7'>Keep your home spotless and stress-free with our trusted cleaning experts. We handle everything from dusting and mopping to deep cleaning <br /> kitchens and bathrooms — so you can relax in a fresh, healthy environment.</p>

                            <Link to={'/auth'} className='btn btn-primary  hover px-8 py-4'>See Details</Link>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='mx-auto relative h-[90vh]  -z-30 bg-white'>

                        <img src={Electrician} alt="" className='h-full object-cover w-full' />
                    </div>
                    <div className=' bg-[#0000005b] absolute top-0 w-full flex justify-center items-center flex-col min-h-full'>
                        <div className='max-w-7xl mx-auto grid place-items-center px-5'>
                            <h1 className='text-3xl lg:text-5xl font-extrabold text-white text-center '>Expert Electrical Repairs <br /> & Installations</h1>
                            <p className='text-white text-center my-7'>From minor repairs to full wiring, our licensed electricians deliver fast and dependable service — ensuring safety and lasting performance. We’re <br /> here to keep your home powered efficiently with quality you can trust.</p>

                            <Link to={'/auth'} className='btn btn-primary  hover px-8 py-4'>See Details</Link>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='mx-auto relative h-[90vh]  -z-30 bg-white'>

                        <img src={Gardening} alt="" className='h-full object-cover w-full' />
                    </div>
                     <div className=' bg-[#0000005b] absolute top-0 w-full flex justify-center items-center flex-col min-h-full'>
                        <div className='max-w-7xl mx-auto grid place-items-center px-5'>
                            <h1 className='text-3xl lg:text-5xl font-extrabold text-white text-center '>Professional Gardening & Landscaping <br /> Service</h1>
                            <p className='text-white text-center my-7'>Bring your outdoor space to life with our expert gardening services — from lawn care and plant maintenance to landscape design. We ensure a fresh, <br />green, and beautifully organized garden that enhances your home’s natural beauty.</p>

                            <Link to={'/auth'} className='btn btn-primary  hover px-8 py-4'>See Details</Link>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Hero;