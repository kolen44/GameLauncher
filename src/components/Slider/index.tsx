import React, { Component } from "react";

import GameCard from '../GameCard/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({children}){	
	return (
		 <Swiper
	      spaceBetween={50}
	      pagination={{ clickable: true }}
	      slidesPerView={1}
	      onSlideChange={() => console.log('slide change')}
	      effect="fade"
	      onSwiper={(swiper) => console.log(swiper)}
	      className='swiper__slider__item'
	    >
	      <SwiperSlide className='swiper__slider__item'><GameCard /></SwiperSlide>
	      <SwiperSlide className='swiper__slider__item'><GameCard /></SwiperSlide>
	      <SwiperSlide className='swiper__slider__item'><GameCard /></SwiperSlide>
	      <SwiperSlide className='swiper__slider__item'><GameCard /></SwiperSlide>
	    </Swiper>
	)
}