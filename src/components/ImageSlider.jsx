import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import '../styles/slider.scss';

import img1 from "../assets/images/ice1.jpg";
import img2 from "../assets/images/ice2.jpg";
import img3 from "../assets/images/ice3.jpg";

const imgs = [img1, img2, img3,img1, img2, img3];

function ImageSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={22}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {/* <SwiperSlide >
                <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} />
            </SwiperSlide> */}
            {imgs.map((img, index) => (
                <SwiperSlide key={index} className='swiper-slider'>
                    <img src={img} alt={`ice-cream-${index}`} />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default ImageSlider