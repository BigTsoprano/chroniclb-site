
import Hero from "@/components/Hero";
import MerchSlider from "@/components/products/MerchSlider";
import DealsOne from "@/components/deals/DealsOne";
import Gmaps from "@/components/Gmaps";
import EndBanner from "@/components/EndBanner";
import ProductOne from "@/components/products/ProductOne";
import ProductTwo from "@/components/products/ProductTwo";
import DealTwo from "@/components/deals/DealTwo";
import ProductThree from "@/components/products/ProductThree";
import Blogs from "@/components/Blogs";
import CustomerReviews from "@/components/CustomerReviews";
import DealThree from "@/components/deals/DealThree";
import Category from "@/components/Category";
import ProductFour from "@/components/products/ProductFour";
import ProductFive from "@/components/products/ProductFive";



export default function Home() {
 

  return (
   <section>
    <Hero/>
    <Category/>
    <ProductOne/>
    <ProductTwo/>
    <ProductThree/>
    <DealTwo/>
    <ProductFour/>
    <DealThree/>
    <ProductFive/>
    <DealsOne/>
    <MerchSlider/>
    <Blogs/>
    <CustomerReviews/>
    <Gmaps/>
    <EndBanner/>

 
   </section>
  );
}

