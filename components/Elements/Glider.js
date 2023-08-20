import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import {motion} from "framer-motion";

function Glider({ children }) {
  const glideRef = useRef(null); // Use a ref to access the DOM element

  useEffect(() => {
    const glideInstance = new Glide(glideRef.current, {
      type: "carousel",
      focusAt: "0",
      perView: 4,
      autoplay: false,
      animationDuration: 500,
      bound: false,
      swipeThreshold: false,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 1.5,
        },
      },
    });

    glideInstance.mount();

    // Return a cleanup function to destroy the Glide instance
    return () => {
      glideInstance.destroy();
    };
  }, []);

  return (
    <div className="glide-04 relative w-full pl-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pl-22 lg:pl-6 " ref={glideRef}>
      <div className="overflow-hidden" data-glide-el="track">
        {children}
      </div>
      {/* Controls component or inline controls can be added here */}
      <div
        className="flex w-full items-center justify-center gap-2 p-4"
        data-glide-el="controls"
      >
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.8 }}
          className="inline-flex  h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#047857"
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#047857"
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
  );
}
export default Glider
