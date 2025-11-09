import React from 'react';
import HomeVideo from '../../assets/homeClining.mp4'
import Clean from '../../assets/Clean.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'

const Hero = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination
                loop
                autoplay={{ delay: 3000 }}
                speed={500}
            >
                <SwiperSlide>
                    <div className='max-w-7xl mx-auto h-96 relative bg-white'>
                        <img src={Clean} alt="" className='h-80 absolute bottom-3 left-5' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;