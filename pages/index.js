import Hero from "@/components/Hero";
import MerchSlider from "@/components/MerchSlider";
import Categories from "@/components/Categories";
import DealsOne from "@/components/DealsOne";
import Gmaps from "@/components/Gmaps";
import EndBanner from "@/components/EndBanner";



export default function Home() {
 

  return (
   <section>
    <Hero/>
    <Categories/>
    <DealsOne/>
    <MerchSlider/>
    <Gmaps/>
    <EndBanner/>

 
   </section>
  );
}

