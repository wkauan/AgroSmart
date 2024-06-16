import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import Imagem1 from '/static/slider/img1.jpg'
import Imagem2 from '/static/slider/img2.jpg'
import Imagem3 from '/static/slider/img3.jpeg'

import 'swiper/css/bundle'

const Slider = () => {
    const img = [Imagem1, Imagem2, Imagem3];

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
                        <img className='w-full object-cover h-[450px]' src={img} alt="Imagens do slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider