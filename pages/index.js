import Hero from "@/components/Hero";
import MerchSlider from "@/components/MerchSlider";
import Categories from "@/components/Categories";
import DealsOne from "@/components/DealsOne";
import Gmaps from "@/components/Gmaps";
import EndBanner from "@/components/EndBanner";
import ProductOne from "@/components/ProductOne";
import ProductTwo from "@/components/ProductTwo";
import DealTwo from "@/components/DealTwo";
import ProductThree from "@/components/ProductThree";
import Blogs from "@/components/Blogs";



export default function Home() {
 

  return (
   <section>
    <Hero/>
    <Categories/>
    <ProductOne/>
    <ProductTwo/>
    <DealTwo/>
    <ProductThree/>
    <DealsOne/>
    <MerchSlider/>
    <Blogs/>
    <Gmaps/>
    <EndBanner/>

 
   </section>
  );
}

