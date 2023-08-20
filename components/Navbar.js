

import React, { useState, useEffect } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import Image from "next/image";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import dynamic from 'next/dynamic';


const NavDrop = dynamic(() => import('./Elements/NavDrop'));
const NavMob = dynamic(() => import('./Elements/NavMob'));

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    
    return (
      <Slide appear={false} direction={"down"} in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  

function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    }
  
    
    useEffect(() => {
      window.addEventListener("scroll", changeBackground);
    }, []);
  
    
  return (
    <HideOnScroll>
      <div className={navbar ? 'navbar active' : 'navbar'}>

    <div className="px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="relative flex items-center justify-between">
      <div         className="inline-flex items-end">
      <a
        href="/"
        aria-label="Company"
        title="Company"
      > </a>
       <Image loading="lazy" alt="chronic long beach logo" placeholder="blur" blurDataURL="/chronic_leaf.png" src='/chronic_leaf.png' width={40} height={40}/>
        
        <a className="chronic_title ml-2 text-xl font-bold tracking-wide text-gray-800">
          Chronic
          <span className='italic pl-4 text-base text-green-700'>Long Beach</span>
        </a>
     
      </div>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>

      <NavDrop/>
        </li>
        <li>
       <button className="bg-transparent border flex justify-start items-center pl-4 border-zinc-400 text-zinc-400 rounded-xl h-10 min-w-40 w-60">
     <SearchOutlinedIcon className='mr-2'/> search
       </button>
        </li>
        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Merch
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Log in
          </a>
        </li>
        <li>
          <button
            href="/"
            className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </button>
        </li>
      </ul>
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-6 text-green-700" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute z-30 top-0 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
              <div         className="inline-flex items-end">
      <a
        href="/"
        aria-label="Company"
        title="Company"
      > </a>
       <img src='chronic_leaf.png' width={40} height={40}/>
        
        <button className="chronic_title ml-2 text-xl font-bold tracking-wide text-gray-800">
          Chronic
          <span className='italic pl-4 text-base text-green-700'>Long Beach</span>
        </button>
     
      </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-green-700" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4 ">
                  <li className="text-black">
                  <NavMob/>
                  </li>
                  <li>
                    <Link
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      <p>
                      Features
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      <p>
                      Pricing
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      <p className='text-black '>
                      About us
                      </p>
                    </Link>
                  </li>
                  <li>
                    <button
                      href="/"
                      class="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  </div>
  </HideOnScroll>

 )
}

export default Navbar
