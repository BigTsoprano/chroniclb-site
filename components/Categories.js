import Link from 'next/link'
import React from 'react'

function Categories() {
  return (
    <div className='cat_section'>
        <div className='cat_wrapper pb-4'>
            <Link href='https://chroniclb.com/menu/'>
            <button className='cat_btn border border-black transition duration-100  hover:bg-green-800 hover:text-white text-sm font-bold'>
                All
            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/flower/'>
            <button className='cat_btn border border-black hover:bg-green-800 transition duration-100 hover:text-white  text-sm font-bold'>
                Flower
            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/preroll/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100  text-sm font-bold'>
                Preroll
            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/vape-cartridge/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Vape Cartridge
                        </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/concentrate/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Concentrate
            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/edible/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Edible
            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/capsuletablet/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Capsule/Tablet

            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/tincture/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Tincture

            </button>
            </Link>
            <Link href='https://chroniclb.com/menu/categories/topical/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Topical

            </button>
            </Link>
                <Link href='https://chroniclb.com/menu/categories/drink/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
Drink
            </button>
            </Link>
                <Link href='https://chroniclb.com/menu/categories/non-cannabis/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Non-Cannabis

            </button>
            </Link>
                <Link href='https://chroniclb.com/menu/categories/clones/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Clones

            </button>
            </Link>
                <Link href='https://chroniclb.com/menu/categories/gear/'>
            <button className='cat_btn border border-black hover:bg-green-800 hover:text-white transition duration-100 text-sm font-bold'>
            Gear

            </button>
            </Link>
        </div>

      
    </div>
  )
}

export default Categories
