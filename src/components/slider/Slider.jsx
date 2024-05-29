import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import Logo from '/static/logo/logo.png'

import 'swiper/css/bundle'

const Slider = () => {
    const img = [Logo];

    return (
        <div className='w-full bg-branco mt-44'>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}>

                {img.map(img => (
                    <SwiperSlide key={img}>
                        <img className='w-full object-cover h-[450px]' src={img} alt="Produtos mais vendidos" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider