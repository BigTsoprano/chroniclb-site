import React from 'react'

function DealsOne() {
  return (
    <div className='w-full bg-green-100 '>
<div className="overflow-hidden  sm:grid sm:grid-cols-2 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
<div className='pr-8 py-8'>
  <img
    alt="weed_deal"
    src="weed_deal.jpeg"
    className="h-56 w-full object-cover rounded-lg sm:h-full"
  />
  </div>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      ChronicLB Anniversary Deals!
      </h2>

      <p className=" text-gray-700 font-semibold  md:mt-4 md:block">
      $59.99 Celebration Pack - 60% Off! Honor ChronicLB's anniversary with our newest pack release! Boasting 4 luxury items valued at $149.99, this pack features ChronicLB's signature 3.5g Jar, Elite Live Resin 1g Cartridge, & CLB Organic Vegan Gummies. Secure yours while supplies last!
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
        >
          Learn more
        </a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default DealsOne
