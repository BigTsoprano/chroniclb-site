import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import MerchSlider from "@/components/products/MerchSlider";
import DealsOne from "@/components/deals/DealsOne";
import EndBanner from "@/components/EndBanner";
import ProductOne from "@/components/products/ProductOne";
import ProductTwo from "@/components/products/ProductTwo";
import DealTwo from "@/components/deals/DealTwo";
import ProductThree from "@/components/products/ProductThree";
const Blogs = dynamic(() => import("@/components/Blogs"));
const CustomerReviews = dynamic(() => import("@/components/CustomerReviews"));
import DealThree from "@/components/deals/DealThree";
import Category from "@/components/Category";
import ProductFour from "@/components/products/ProductFour";
import ProductFive from "@/components/products/ProductFive";

import Test from "@/components/test";

export default function Home() {
  return (
    <section>
      <Hero />
    
      <Category />
      <ProductOne />
      <ProductTwo />
      <ProductThree />
      <DealTwo />
      <ProductFour />
      <DealThree />
      <ProductFive />
      <DealsOne />
      <MerchSlider />
      <CustomerReviews />
      <EndBanner />
    </section>
  );
}
