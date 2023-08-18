import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function ProductTwo() {
  return (
    <>
    <div className="pl-4 pt-8  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pl-24 lg:pl-8 ">
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
        <div className='w-full' style={{display:'block', }}>
            <ul className='product_one w-full'>
           
            <li className='product_1 rounded-xl w-full shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                    <li className='product_1 w-full rounded-xl shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                    <li className='product_1 w-full rounded-xl shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                    <li className='product_1 w-full rounded-xl shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                    <li className='product_1 w-full rounded-xl shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                    <li className='product_1 w-full rounded-xl shadow-lg'>
                    <img className='border-b rounded-t-xl' src='product1.avif' alt='product_one' />
                    <div style={{justifyContent:'space-between', height:'100%',maxHeight:'375px', display:'flex'}}className="flex-col p-4">
                        <div>
                <p className="text-black font-semibold text-xs">Zotix</p>
                <p className="text-black font-base text-base pt-1">Zotix sugar cookies - 3.5gs</p>
                </div>
                <div>
                <p className="text-black font-semibold text-sm pt-1">$20.00</p>
                <button className="bg-green-800 text-white rounded-full px-2 py-2 mt-2"><ShoppingCartOutlinedIcon className="text-white"/></button>
                </div>
            </div>
                    </li>
                  
            </ul>
        </div>
      
   
    </>
  )
}

export default ProductTwo
