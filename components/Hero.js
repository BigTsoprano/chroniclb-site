
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import MuxVideo from '@mux/mux-video-react'
import { Navigation, Autoplay } from 'swiper/modules';






export default function Hero() {


  return (
    <div className=" bg-white overflow-y-hidden">
    {/* Code block starts */}
     
            <div style={{width:'100%', minWidth:'100%',top:'0', position:'relative', height:'100%'}} className="hero_backdrop pt-8 mx-auto  bg-indigo-700 container  flex flex-col items-center  sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <div className="hero_backdrop"></div>

            <MuxVideo
       playbackId='00B02rzv6t00nBzaJdPPdlSmnNkvhbBN974BZFKFK00lAAI'
        className="hero_video"
        style={{
          borderRadius: '0',
         height:'100%',
         width:'100%',
          objectFit:'cover',
          zIndex: '0',
          position: 'absolute',
          top: '0',
        }}
        metadata={{
          video_id: 'video-id-12346',
          video_title: 'demo_video',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand"
        preferPlayback="mse"
        nonce="some value"

        autoPlay
      muted
      playsInline
        loop
        
 
      ></MuxVideo>
                <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                <div className="w-11/12 z-10 sm:w-2/3 mb-5 sm:mb-10">
                    <h1 className="font-sans z-10 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">Welcome to <span className="text-green-200">Chronic </span>Long Beach</h1>
                    <p className='text-zinc-200 mt-4 text-center text-sm '>Founded in 2010, Chronic Long Beach is one of Long Beach’s original medical cannabis dispensaries. At Chronic Long Beach, we’ve made it our mission to provide the best pain relief alternatives to pharmaceutical drugs by stocking high-quality, safe and legal cannabis products including flower, concentrates, edibles, and tinctures.</p>
                </div>
                <div className="flex z-10 justify-center items-center mb-10 sm:mb-20">
                    <button className="inline-flex mr-8 items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-green-700 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">Shop now</button>
                    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-green-700 text-green-200 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">Learn More</button>
                </div>
            </div>
            <div className="container mx-auto flex z-10 justify-center md:-mt-60 mb-10 -mt-20 sm:-mt-40">
                <div style={{minWidth:'100%', maxWidth:'100%', padding:'0 2rem'}} className="relative z-10 ">
                <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mySwiper shadow-lg rounded-xl pb-8 xl:max-w-4xl mx-auto px-4 lg:px-8"
      >
        <SwiperSlide className='rounded-xl '><img style={{minWidth:'100%', maxWidth:'100%', minHeight:'100%', maxHeight:'100%'}} className=' rounded-xl' src='deal_1.webp'/></SwiperSlide>
        <SwiperSlide className='rounded-xl'><img className='w-full h-full rounded-xl' src='deal2.jpeg'/></SwiperSlide>
        <SwiperSlide className='rounded-xl'><img className='rounded-xl' src='deal3.jpeg'/></SwiperSlide>
   
      </Swiper>                </div>
            </div>
    {/* Code block ends */}
</div>
  );
}

