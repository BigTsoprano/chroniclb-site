import Image from "next/image"
import dynamic from 'next/dynamic';
const GliderCat = dynamic(() => import('./Elements/GliderCat'));



function Category() {
    
  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
 <GliderCat>
  <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
    <li className="relative rounded-lg    flex items-center justify-center">
      <div className="absolute inset-0  rounded-lg bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Shop all</h1>

      <Image
       placeholder="blur"
       blurDataURL="URL"
       width={350}
         height={250}
                         loading="lazy"
                         alt="Chronic Long Beach shop all"
        src="/shop_all.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-black hover:opacity-50 opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Flower</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop flower"
        src="/shop_flower.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex  rounded-lg items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Preroll</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop preroll"
        src="/shop_preroll.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex items-center rounded-lg justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Vapes</h1>
      <Image 
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop vapes"
        src="/shop_vape.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Concentrates</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop concentrates"
        src="/shop_dabs.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Edibles</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop edibles"
        src="/shop_edibles.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Tablets</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop tablets"
        src="/shop_pill.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Tinctures</h1>
      <Image
         placeholder="blur"
         blurDataURL="URL"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop tinctures"
        src="/shop_tincture.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Topicals</h1>
      <Image  
       placeholder="blur"
       blurDataURL="URL"
       width={350}
         height={250}
                         loading="lazy"
                         alt="Chronic Long Beach shop topicals"
        src="/shop_topical.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Drinks</h1>
      <Image   
      placeholder="blur"
       blurDataURL="/shop_drink.webp"
       width={350}
         height={250}
                         loading="lazy"
                         alt="Chronic Long Beach shop drinks"
        src="/shop_drink.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
    <li className="relative flex rounded-lg items-center justify-center">
      <div className="absolute rounded-lg inset-0 bg-black opacity-40"></div>
      <h1 className="absolute z-10 text-white font-sans sm:text-3xl text-xl font-bold tracking-tight text-center">Clones</h1>
      <Image
         placeholder="blur"
         blurDataURL="/shop_clone.webp"
         width={350}
           height={250}
                           loading="lazy"
                           alt="Chronic Long Beach shop clones"
        src="/shop_clone.webp"
        className="m-auto max-h-full rounded-lg w-full max-w-full"
      />
    </li>
  </ul>
  </GliderCat>

        {/*    <!-- Controls --> */}
       
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}

export default Category
