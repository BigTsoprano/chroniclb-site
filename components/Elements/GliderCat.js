import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import {motion} from 'framer-motion'

function GliderCat({children}) {
    const glideRef = useRef(null);

    useEffect(() => {
        const glideInstance = new Glide(glideRef.current, {
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
        })
    
        glideInstance.mount();

        // Return a cleanup function to destroy the Glide instance
        return () => {
          glideInstance.destroy();
        };
      }, []);
  return (
    <div className="glide-01 relative px-2 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-4 lg:py-10  w-full" ref={glideRef}>
    {/*    <!-- Slides --> */}
    <div className="overflow-hidden mx-2 " data-glide-el="track">
    {children}
        </div>
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

     
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
  </div>
  )

}

export default GliderCat
