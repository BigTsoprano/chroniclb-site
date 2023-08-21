
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MuxVideo from "@mux/mux-video-react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-white overflow-y-hidden">
      {/* Code block starts */}

      <div
     
        className="w-full min-w-full top-0 relative h-full pt-8 mx-auto  bg-zinc-800   flex flex-col items-center  sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64"
      >
        <div className="hero_backdrop"></div>

        <MuxVideo
          playbackId="00B02rzv6t00nBzaJdPPdlSmnNkvhbBN974BZFKFK00lAAI"
          className="hero_video rounded-none h-full w-full object-cover z-0 absolute top-0"
      
          metadata={{
            video_id: "video-id-12346",
            video_title: "demo_video",
            viewer_user_id: "user-id-bc-789",
          }}
          streamType="on-demand"
          preferPlayback="mse"
          nonce="some value"
          autoPlay
          muted
          playsInline
          loop
        ></MuxVideo>
        {/* <img
          className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
          alt="bg"
        />
        <img
          className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
          alt="bg"
        /> */}
        <div className="w-11/12 z-10 mt-10 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="font-sans z-10 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Welcome to Chronic Long
            Beach
          </h1>
          
          <p className="text-zinc-200 mt-4 text-center text-base ">
            Founded in 2010, Chronic Long Beach is one of Long Beach’s original
            medical cannabis dispensaries. At Chronic Long Beach, we’ve made it
            our mission to provide the best pain relief alternatives to
            pharmaceutical drugs by stocking high-quality, safe and legal
            cannabis products including flower, concentrates, edibles, and
            tinctures.
          </p>
        </div>
        <div className="flex z-10 justify-center items-center mb-10 sm:mb-20">
          <button className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200">
            Shop now
          </button>
          <button  className="group relative inline-flex items-center overflow-hidden rounded-lg border border-current px-7 py-3 text-green-600 hover:text-green-500 focus:outline-none focus:ring active:text-green-200"
  href="/download"
>
  <span className="absolute -end-full transition-all group-hover:end-4">
    <svg
      className="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="text-base font-medium transition-all group-hover:me-4">
    Learn more
  </span>
          </button>
        </div>
      </div>
      <div className=" mx-auto px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex z-10 justify-center md:-mt-60 mb-10 -mt-20 sm:-mt-40">
        <div
          
          className="relative z-10 min-w-full max-w-full"
        >
          <Swiper
            rewind={true}
            navigation={true}
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5500,
              disableOnInteraction: true,
            }}
            className="new_swiper rounded-xl pb-8  mx-auto  "
          >
            <SwiperSlide className="rounded-xl ">
              <div className="mx-auto ">
                <div className="flex flex-col w-full overflow-hidden rounded-lg bg-white sm:flex-row h-full">
                  {/* content - start */}
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                    <h2 className="mb-4 text-xl  font-bold text-black md:text-2xl lg:text-4xl">
                    "Locals Only"
                                          <br />
                     
Long Beach Local Brands !!! 
          15 % off 
                    </h2>
                    <div  className=" flex flex-row px-2 items-baseline justify-center">
                   <ul className="mb-8 list-disc max-w-md text-gray-9 mr-8   text-left">
                    <li>Top Shelf Cultivation</li>
                    <li>Clone Guy</li>
                    <li>Lucy Goosey</li>
                    <li>Kan+Ade</li>
                

                   </ul>
                   <ul className="list-disc text-left">

                   <li>Coldfire</li>
                   <li>Uncle Arnie's</li>
                   <li>Sputnik</li>

                   </ul>
                   </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
                      >
                        Save now
                      </a>
                    </div>
                  </div>
                  {/* content - end */}
                  {/* image - start */}
                  <div className="daily_deal_back order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                    <Image
                      src="/dail_deal.webp"
                        width={800}
    height={500}
    placeholder="blur"
    blurDataURL="/dail_deal.webp"
                  
                      alt="Chronic Long Beach daily deals"
                      className="h-full w-full object-contain flex object-center"
                    />
                  </div>
                  {/* image - end */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl ">
              <div className="mx-auto ">
                <div className="flex flex-col w-full overflow-hidden rounded-lg bg-white sm:flex-row h-full">
                  {/* content - start */}
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                    <h2 className="mb-4 text-xl  font-bold text-black md:text-2xl lg:text-4xl">
                    "Locals Only"
                                          <br />
                     
Long Beach Local Brands !!! 
          15 % off 
                    </h2>
                    <div className="flex flex-row px-2 items-baseline justify-center">
                   <ul className="mb-8 list-disc max-w-md text-gray-9 mr-8  text-left">
                    <li>Top Shelf Cultivation</li>
                    <li>Clone Guy</li>
                    <li>Lucy Goosey</li>
                    <li>Kan+Ade</li>
                

                   </ul>
                   <ul className="list-disc text-left">

                   <li>Coldfire</li>
                   <li>Uncle Arnie's</li>
                   <li>Sputnik</li>

                   </ul>
                   </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
                      >
                        Save now
                      </a>
                    </div>

                  </div>
                  {/* content - end */}
                  {/* image - start */}
                  <div className="daily_deal_back order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                  <Image
                      src="/dail_deal.webp"
                      width={800}
                      height={500}
    placeholder="blur"
    blurDataURL="/dail_deal.webp"
                      loading="lazy"
                      alt="Chronic Long Beach daily deals"
                      className="h-full w-full object-contain flex object-center"
                    />
                  </div>
                  {/* image - end */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl ">
              <div className="mx-auto ">
                <div className="flex flex-col w-full overflow-hidden rounded-lg bg-white sm:flex-row h-full">
                  {/* content - start */}
                  <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                    <h2 className="mb-4 text-xl  font-bold text-black md:text-2xl lg:text-4xl">
                    "Locals Only"
                                          <br />
                     
Long Beach Local Brands !!! 
          15 % off 
                    </h2>
                    <div className="flex flex-row px-2 items-baseline justify-center">
                   <ul className="mb-8 list-disc max-w-md text-gray-9 mr-8  text-left">
                    <li>Top Shelf Cultivation</li>
                    <li>Clone Guy</li>
                    <li>Lucy Goosey</li>
                    <li>Kan+Ade</li>
                

                   </ul>
                   <ul className="list-disc text-left">

                   <li>Coldfire</li>
                   <li>Uncle Arnie's</li>
                   <li>Sputnik</li>

                   </ul>
                   </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
                      >
                        Save now
                      </a>
                    </div>

                  </div>
                  {/* content - end */}
                  {/* image - start */}
                  <div className="daily_deal_back order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                  <Image
                      src="/dail_deal.webp"
                        width={800}
                         height={500}
                      loading="lazy"
                      placeholder="blur"
                        blurDataURL="URL"
                      alt="Chronic Long Beach daily deals"
                      className="h-full w-full object-contain flex object-center"
                    />
                  </div>
                  {/* image - end */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
}
