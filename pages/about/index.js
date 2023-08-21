import React from 'react'

function about() {
  return (
    <section>
    <div className="relative">
    <img
      src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      className="absolute pb-1 inset-0 object-cover w-full h-full"
      alt=""
    />
    <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
      <svg
        className="absolute inset-x-0 bottom-0 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            A Marijuana Dispensary <br className="hidden md:block" />
            You Can Call Home
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa
              quae.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Sign up for updates
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="firstName"
                    className="inline-block mb-1 font-medium"
                  >
                    First name
                  </label>
                  <input
                    placeholder="John"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Last name
                  </label>
                  <input
                    placeholder="Doe"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    placeholder="john.doe@example.org"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-600 sm:text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* <!-- Section --> */}

<div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="chronic_about p-8 rounded-xl  sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <img src='chronic_about.png' alt='about' className='rounded max-h-25' />
          </div>
          <div className="lg:w-1/2">
            <p className='mb-6 font-sans text-3xl font-bold tracking-tight'>Chronic Long Beach: Leading Cannabis Dispensary in Southern California </p>
            <p className="mb-4 text-sm text-gray-700">
            Established in 2010, Chronic Long Beach stands as one of the pioneer medical cannabis dispensaries in Long Beach. Our dedication to safe, legal cannabis became resolute after regulatory challenges in 2012. This passion led us to become cornerstone members of the Long Beach Collective Association (LBCA), championing safe cannabis access, equitable policies, and reduced cannabis taxation.            </p>
            <p className="mb-4 text-sm text-gray-700">
            Our commitment transcends mere advocacy. At Chronic Long Beach, our emphasis is on an unparalleled customer experience. With adept cannabis consultants at the helm, visitors are guaranteed personalized advice in a trusted ambiance. We take pride in employing local community members, solidifying our commitment to Long Beach.            </p>
            <p className="mb-4 text-sm text-gray-700">
            Acknowledged as a vanguard in the Southern California cannabis sphere, our bond with the community has been our strength. As gratitude, we consistently provide a diverse range of top-quality cannabis products – from edibles and vapes to tinctures. Choose Chronic Long Beach for a fusion of superior service and the finest cannabis solutions.            </p>
  
          </div>
        </div>
      </div>
    </div>

    </section>

  )
}

export default about
