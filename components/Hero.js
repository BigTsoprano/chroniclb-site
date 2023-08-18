
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Pagination, Navigation } from 'swiper/modules';





export default function Hero() {
 

  return (
    <main id="page-content" className="flex pt-8 p-8 w-full">
          {/* Page Section */}
            {/*

            ADD YOUR MAIN CONTENT BELOW

            */}

            {/* Placeholder */}
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
     
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
 <SwiperSlide className='flex items-center h-auto w-full justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 '><img className='rounded-xl' src="/1.png"/></SwiperSlide>
 <SwiperSlide className='flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 '><img className='rounded-xl' src="/2.png"/></SwiperSlide>
 <SwiperSlide className='flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 '><img className='rounded-xl' src="/3.png"/></SwiperSlide>
 <SwiperSlide className='flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 '><img className='rounded-xl' src="/4.png"/></SwiperSlide>
 <SwiperSlide className='flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 '><img className='rounded-xl' src="/5.png"/></SwiperSlide>
 <SwiperSlide className='flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400'><img className='rounded-xl' src="/1.png"/></SwiperSlide>


</Swiper>
            {/*
      
            ADD YOUR MAIN CONTENT ABOVE
                  
            */}
          {/* END Page Section */}
        </main>
  );
}

