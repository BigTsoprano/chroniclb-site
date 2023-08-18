import React from 'react'

function Blogs() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src="blog1.jpeg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            {/* <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </a> */}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
           SKATE CULTURE AND CANNABIS: A GLOBAL PHENOMENON
          </a>
          {/* <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p> */}
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src="blog2.jpeg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            {/* <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </a> */}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Simple is better"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
CHRONIC'S COMPLETE GUIDE TO CANNABIS IN LONG BEACH
          </a>
          {/* <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p> */}
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src="blog3.jpeg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            {/* <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </a> */}
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Film It!"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
HOW TO FIND THE BEST DISPENSARY IN LONG BEACH
          </a>
          {/* <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p> */}
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blogs
