import React from "react"
import dynamic from 'next/dynamic';

// Dynamically import the Glider component
import Glider from '../Elements/Glider';
import { motion } from "framer-motion"
import AddIcon from '@mui/icons-material/Add';

function ProductFour() {
  return (
    <div className="bg-white">
     <div className="pt-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
         <div className="flex flex-col  lg:justify-between lg:flex-row ">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-blocksm:mb-4">
          Top picks this week        
     
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <button className="text-gray-700 lg:text-base mr-8 lg:max-w-md">
        Explore more
        </button>
      </div>
      </div>
    {/*<!-- Component: Carousel with controls outside --> */}
      {/*    <!-- Slides --> */}
      <Glider>
          <ul className="whitespace-no-wrap m-2 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li 
            className='product_one_shadow shadow-lg bg-white relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="nuggies.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
            <li 
            className='product_one_shadow shadow-lg relative rounded-xl mt-2 mb-4'>
                <motion.img 
                    whileHover={{scale: 1.1}}
                    src="product1.avif"
                    alt="Product" 
                    className="h-60 w-52 mx-auto object-cover rounded-t-xl  " 
                />
                <div className="px-4 border-t py-3 min-w-20 max-w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Zotix</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Zotix sugar cookies</p>
                    <p className="text-sm text-zinc-700">weight: 3.5gs</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">$19.75</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$29.99</p>
                        </del>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className=" px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white">
                         <AddIcon/>
                        </motion.button>
                    </div>
                </div>
            </li>
          
          </ul>
       </Glider>
      {/*    <!-- Controls --> */}
  
    {/*<!-- End Carousel with controls outside --> */}
  </div>
  )
}

export default ProductFour
