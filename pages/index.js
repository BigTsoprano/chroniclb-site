import Hero from "@/components/Hero";
import MerchSlider from "@/components/MerchSlider";
import Categories from "@/components/Categories";
import DealsOne from "@/components/DealsOne";
import Gmaps from "@/components/Gmaps";
import EndBanner from "@/components/EndBanner";
import ProductOne from "@/components/ProductOne";
import ProductTwo from "@/components/ProductTwo";



export default function Home() {
 

  return (
   <section>
    <Hero/>
    <Categories/>
    <ProductOne/>
    <ProductTwo/>
    <DealsOne/>
    <MerchSlider/>
    <Gmaps/>
    <EndBanner/>

 
   </section>
  );
}

