import React from 'react'
import { motion } from "framer-motion"

function DealThree() {
  return (
    <section className='w-full bg-zinc-100'>
    <div className="px-4 py-16 mx-auto lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
       
  
        <div className="lg:col-span-2 lg:py-8">
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a href="#" className="block group">
                <img
                  src="stiiizy_one.avif"
                  alt=""
                  className="object-cover w-full rounded aspect-square"
                />
  
                <div className="mt-3">
                  <h3
                    className="text-lg font-bold text-black truncate block capitalize text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    STIIIZY - Advanced Starter Kit
                   
                  </h3>
  
                  <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-1">$33.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$39.99</p>
                        </del>
                     
                    </div>
                </div>
              </a>
            </li>
  
            <li>
              <a href="#" className="block group">
                <img
                  src="stiiizy_two.avif"
                  alt=""
                  className="object-cover w-full rounded aspect-square"
                />
  
                <div className="mt-3">
                  <h3
                    className="text-lg font-bold text-black truncate block capitalize group-hover:underline group-hover:underline-offset-4"
                  >
                   STIIIZY - Red Starter Kit
                  </h3>
  
                  <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-1">$18.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$23.99</p>
                        </del>
                     
                    </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid p-6 bg-white rounded-xl shadow-md place-content-center sm:p-8">
          <div className="max-w-md mx-auto text-center lg:text-left">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Stiizy</h2>
  
              <p className="mt-4 text-gray-500">
             
The Original line of STIIIZY pods contain premium THC oil and “botanically derived terpenes” that add depth of flavor and aroma. Real flower taste with none of the flower, basically.
              </p>
            </header>
  
            <a
              href="#"
              className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200 mt-8"
            >
              Shop Stiiizy
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DealThree
