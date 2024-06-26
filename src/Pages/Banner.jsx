import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="banner">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/HeroSection.png" alt="" srcSet="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
