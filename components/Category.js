import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import {motion} from 'framer-motion'
import Image from "next/image"


function Category() {
    useEffect(() => {
        const slider = new Glide(".glide-01", {
          type: "carousel",
          focusAt: "0",
          perView: 5,
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
              perView: 3,
            },
            640: {
              perView: 2,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative px-2 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-10  w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden mx-2 " data-glide-el="track">
  <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
    <li className="relative rounded-lg    flex items-center justify-center">
      <div className="absolute inset-0  rounded-lg bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Shop all</h1>

      <Image
       placeholder="blur"
       blurDataURL="URL"
       width={700}
         height={500}
                         loading="lazy"
                         alt="Chronic Long Beach shop all"
        src="/shop_all.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-black hover:opacity-50 opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Flower</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop flower"
        src="/shop_flower.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex  rounded-lg items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Preroll</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop preroll"
        src="/shop_preroll.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex items-center rounded-lg justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Vapes</h1>
      <Image 
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop vapes"
        src="/shop_vape.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Concentrates</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop concentrates"
        src="/shop_dabs.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Edibles</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop edibles"
        src="/shop_edibles.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Tablets</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop tablets"
        src="/shop_pill.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Tinctures</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop tinctures"
        src="/shop_tincture.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Topicals</h1>
      <Image  
       placeholder="blur"
       blurDataURL="URL"
       width={700}
         height={500}
                         loading="lazy"
                         alt="Chronic Long Beach shop topicals"
        src="/shop_topical.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Drinks</h1>
      <Image   
      placeholder="blur"
       blurDataURL="URL"
       width={700}
         height={500}
                         loading="lazy"
                         alt="Chronic Long Beach shop drinks"
        src="/shop_drink.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Clones</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={700}
           height={500}
                           loading="lazy"
                           alt="Chronic Long Beach shop clones"
        src="/shop_clone.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
  </ul>
</div>


        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <motion.button
            whileHover={{scale:1.2}}
            whileTap={{scale:0.8}}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white/40 text-green-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#166534"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </motion.button>
          <motion.button
                  whileHover={{scale:1.2}}
                  whileTap={{scale:0.8}}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white/40 text-greeen-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#166534"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}

export default Category
