import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image';
const Gmaps = dynamic(() => import('./Gmaps'), {
    loading: () => <p>Loading...</p>,
    ssr: false  // Disable server-side rendering for the Google Maps component
  });

function about() {
  return (
    <section>
    <div className="relative  ">
    <div className="hero_backdrop2"></div>
    <Image
    width={1969}
    height={1158}
    placeholder='blur'
    blurDataURL='/about_hero.webp'
      src="/about_hero.webp"
      className="absolute pb-1 inset-0 object-cover w-full h-full"
      alt=""
    />
    <div className="relative z-10 bg-opacity-75 bg-deep-purple-accent-700">
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
            A <span class="relative before:absolute before:bg-green-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span class="relative">Marijuana</span></span> Dispensary <br className="hidden md:block" />
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
          <div className="w-full mt-10 max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white/80 rounded-xl shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Sign up for updates from us
              </h3>
              <form>
                
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Full name
                  </label>
                  <input
                    placeholder="Joe Doe"
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
                    className="inline-block w-full mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200"
                  >
                    Subscribe now
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

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="chronic_about p-8 rounded-xl  sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <img src='chronic_about.png' alt='about' className='rounded max-h-25' />
          </div>
          <div className="lg:w-1/2">
            <p className='mb-6 font-sans text-3xl font-bold tracking-tight'>Chronic Long Beach: Leading Cannabis Dispensary in Southern California </p>
            <p className="mb-4 text-base text-gray-700">
            Established in 2010, Chronic Long Beach stands as one of the pioneer medical cannabis dispensaries in Long Beach. Our dedication to safe, legal cannabis became resolute after regulatory challenges in 2012. This passion led us to become cornerstone members of the Long Beach Collective Association (LBCA), championing safe cannabis access, equitable policies, and reduced cannabis taxation.            </p>
            <p className="mb-4 text-base text-gray-700">
            Our commitment transcends mere advocacy. At Chronic Long Beach, our emphasis is on an unparalleled customer experience. With adept cannabis consultants at the helm, visitors are guaranteed personalized advice in a trusted ambiance. We take pride in employing local community members, solidifying our commitment to Long Beach.            </p>
            <p className="mb-4 text-base text-gray-700">
            Acknowledged as a vanguard in the Southern California cannabis sphere, our bond with the community has been our strength. As gratitude, we consistently provide a diverse range of top-quality cannabis products – from edibles and vapes to tinctures. Choose Chronic Long Beach for a fusion of superior service and the finest cannabis solutions.            </p>
  
          </div>
        </div>
      </div>
    </div>
{/* <!-- Section --> */}
<header className="bg-zinc-100 lg:bg-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:py-20 xl:py-32 items-start">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="relative z-10 flex w-64 mx-auto overflow-hidden md:w-80 lg:w-auto">
            <Image alt="about chronic store" height={2000} width={1125} placeholder='blur' blurDataURL='/about_img.webp' loading='lazy' src="/about_img.webp" decoding="async" data-nimg="future" className="object-cover rounded-xl shadow-lg w-full h-1/3" />
          </div>
        </div>
        <div className="relative order-first px-4 sm:px-6 lg:col-span-7 lg:pl-0 lg:pb-14 lg:pr-16 xl:pr-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-gray-200"></div>
          <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
            <div className="flex justify-center text-black lg:justify-start">
              <div className="flex gap-1">
              <span
                            className="flex gap-1 text-amber-400"
                            role="img"
                            aria-label="Rating: 3 out of 5 stars"
                          >
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>                {/* ... repeat for other stars ... */}
              </div>
            </div>
            <blockquote className="mt-2">
              <p className="text-base font-medium text-black">
                “I've rated this place.  Love 💕 the customer service.  Very friendly staff and the best prices in Southern California 🌴❤️ LOVE ❤️ LOVE 💋 LOVE 💕 this place!!!!  Highly recommend!!!!”
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-black">
              <strong className="font-semibold text-black before:content-['—_']">Mitch Ramsey</strong>, Local Customer
            </figcaption>
          </figure>
        </div>
        <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pr-16 xl:pr-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="max-w-xl text-center lg:text-left">
              <div>
                <p className="font-sans text-3xl font-bold tracking-tight">
                Chronic Long Beach: Handpicked Brands & Premium Medical Marijuana Products                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                At Chronic Long Beach, we're more than just a dispensary – we're your trusted source for top-shelf cannabis products, from indulgent edibles to potent indicas. CNN's Sanjay Gupta hailed us as a “model dispensary,” and we proudly uphold that reputation. Led by our discerning buyer, OG Hefty, we handpick only the finest brands like Buddies, Jeeters, 710 Labs, and local gems such as Cannavis. Whether you're seeking relief or relaxation, our extensive menu boasts over 100 diverse products, including flower, vapes, edibles, and more. Quality and affordability are our watchwords, ensuring you get the best without straining your wallet. Explore our online selection or visit Chronic Dispensary for unparalleled medical marijuana offerings.                </p>
              </div>
              <div className="flex flex-col pb-8 items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a href="#" className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200">
                  Explore Cannabis
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* <!-- Section --> */}
<Gmaps />
{/* <!-- Section --> */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                    Visit us at Chronic Dispensary and get your top shelf medical marijuana today.
                    </h3>
                    {/* <p className="mt-3 text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p> */}
                </div>
                <div className="flex-none mt-4 md:mt-0">
                    <a href="/" className="inline-block mr-4 hover:bg-green-500 rounded-lg bg-green-700 px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-200">
                        Order Online now
                    </a>
                </div>
            </div>
        </div>

    </section>

  )
}

export default about
