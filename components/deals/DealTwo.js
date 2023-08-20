import Image from 'next/image'
function DealTwo() {
  return (
    <div className=" bg-zinc-100 mx-auto py-9 md:py-12 w-full">
            <div className="flex items-strech px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex rounded-xl shadow-md hover:shadow-lg flex-col md:flex-row items-strech justify-between bg-white py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-semibold text-gray-800">Best deals on shake</h1>
                        <p className="text-base lg:text-base text-gray-800 mt-2">
                            Save upto <span className="font-bold">50%</span>
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <Image 
                        width={500}
                        height={700}
                        placeholder='blur'
                        blurDataURL='/best_deals.avif'  
                        style={{maxHeight:'250px'}}
                        src="/best_deals.avif"
                         alt="chronic long beach best deals" />
                    </div>
                </div>
                <div className="md:w-4/12 shadow-md hover:shadow-lg  lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-white py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col rounded-xl justify-center relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800">Select vapes</h1>
                        <p className="text-base lg:text-base text-gray-800">
                            Save Upto <span className="font-bold">30%</span>
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <Image style={{maxHeight:'150px'}} 
                        width={500}
                        height={500}
                        placeholder='blur'
                        blurDataURL='/vape_deals.avif'
                        src="/vape_deals.avif" alt="chronic long beach best vape deals" 
                        className="md:w-20 md:h-20 rounded-xl lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DealTwo
