import React from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Image from "next/image";

// Dynamically import the Glider component
const Glider = dynamic(() => import('../Elements/Glider'));
import { motion } from "framer-motion"
function MerchSlider() {
  
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
      {/*    <!-- Slides --> */}
<Glider>
        <ul className="whitespace-no-wrap p-4 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">

          <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <Image 
                    whileHover={{scale: 1.1}}
                    height={530}
                    width={425}
                    placeholder="blur"
                    blurDataURL="/chroniclb_tshirt.webp"
                    src="/chroniclb_tshirt.webp"
                    alt="chronic long beach merch" 
                    className="h-60 w-52 mx-auto object-contain rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Chroniclb merch</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Chroniclb t-shirt</p>
                    <p className="text-sm text-zinc-700">Material: cotton</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$20.00</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <Link href="http://localhost:3000/t-shirt">

                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                          <ShoppingCartCheckoutIcon />
                        </motion.button>
                        </Link>

                    </div>
                </div>
            </li>
        
        </ul>
 
      </Glider>
    {/*<!-- End Carousel with controls outside --> */}
  </>
  )
}

export default MerchSlider
