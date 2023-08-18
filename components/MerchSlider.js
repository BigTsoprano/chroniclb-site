import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link'

function MerchSlider() {
    useEffect(() => {
        const slider = new Glide(".glide-04", {
          type: "carousel",
          focusAt: "center",
          perView: 3,
          autoplay: false,
          animationDuration: 700,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
  return (
    <>
    {/*<!-- Component: Carousel with controls outside --> */}
    <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

    <div className="flex flex-col  lg:justify-between lg:flex-row ">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
          Chronic Long Beach Merch,             <br className="hidden md:block" />
          Premium T-Shirts, Hoodies & Apparel"
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
       
      </div>
      </div>
    <div style={{}} className="glide-04 pl-8 relative  w-full">
      {/*    <!-- Slides --> */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap p-4 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          <li className="max-w-xs min-w-150 shadow-md p-4 rounded-xl">
            <div className="h-175">
            <img
              src="chroniclb_tshirt.png"
              className="m-auto max-h-full w-full max-w-full"
            />
          </div>
          <div className="flex-col">
                <p className="text-black font-semibold text-xs">Chroniclb merch</p>
                <p className="text-black font-base text-base pt-1">Chroniclb t-shirt</p>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <Link href="http://localhost:3000/t-shirt">
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </Link>
            </div>
          </li>
          <li className="max-w-xs min-w-150 shadow-md p-4 rounded-xl">
          <div className="h-175">
            <img
              src="chroniclb_tshirt.png"
              className="m-auto max-h-full w-full max-w-full"
            />
            </div>
            <div className="flex-col">
                <p className="text-black font-semibold text-xs">Chroniclb merch</p>
                <p className="text-black font-base text-base pt-1">Chroniclb t-shirt</p>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <Link href="http://localhost:3000/t-shirt">
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </Link>
            </div>
          </li>
          <li className="max-w-xs min-w-150 shadow-md p-4 rounded-xl">
          <div className="h-175">
            <img
              src="chroniclb_tshirt.png"
              className="m-auto max-h-full w-full max-w-full"
            />
            </div>
            <div className="flex-col">
                <p className="text-black font-semibold text-xs">Chroniclb merch</p>
                <p className="text-black font-base text-base pt-1">Chroniclb t-shirt</p>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <Link href="http://localhost:3000/t-shirt">
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </Link>
            </div>
          </li>
          <li className="max-w-xs min-w-150 shadow-md p-4 rounded-xl">
          <div className="h-175">
            <img
              src="chroniclb_tshirt.png"
              className="m-auto max-h-full w-full max-w-full"
            />
            </div>
            <div className="flex-col">
                <p className="text-black font-semibold text-xs">Chroniclb merch</p>
                <p className="text-black font-base text-base pt-1">Chroniclb t-shirt</p>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <Link href="http://localhost:3000/t-shirt">
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </Link>
            </div>
          </li>
          <li className="max-w-xs min-w-150 shadow-md p-4 rounded-xl">
            <div className="h-175">
            <img
              src="chroniclb_tshirt.png"
              className="m-auto max-h-full w-full max-w-full"
            />
            </div>
            <div className="flex-col">
                <p className="text-black font-semibold text-xs">Chroniclb merch</p>
                <p className="text-black font-base text-base pt-1">Chroniclb t-shirt</p>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <Link href="http://localhost:3000/t-shirt">
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </Link>
            </div>
          </li>
        </ul>
      </div>
      {/*    <!-- Controls --> */}
      <div
        className="flex w-full items-center justify-center gap-2 p-4"
        data-glide-el="controls"
      >
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <title>prev slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <title>next slide</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
    {/*<!-- End Carousel with controls outside --> */}
  </>
  )
}

export default MerchSlider
