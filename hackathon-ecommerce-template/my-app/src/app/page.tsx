
import HeroSection from "./component/HeroSection";
import FeaturedSection from "./component/FeaturedSection";
import LatestProducts from "./component/LatestProducts";
import ShopexOffer from "./component/ShopexOffer";
import HomeSingleCart from "./component/HomeSingleCart";
import TrendingProducts from "./component/TrendingProducts";
import DiscountItem from "./component/DiscountItem";
import TopCategories from "./component/TopCategories";
import NewsLetter from "./component/NewsLetter";
import Logo from "./component/Logoss";
import LatestBlogs from "./component/LatestBlogs";
import Footer from "../app/component/Footer";
// import OrderCompleted from "./component/OrderCompleted";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <FeaturedSection/>
   <LatestProducts />
   <ShopexOffer/>
   <HomeSingleCart/>
   <TrendingProducts />
   <DiscountItem/>
   <TopCategories/>
   <NewsLetter/>
   <Logo/>
   <LatestBlogs/>
   <Footer/>
   
   {/* <OrderCompleted/> */}
   
   
   
   </>
  );
}
