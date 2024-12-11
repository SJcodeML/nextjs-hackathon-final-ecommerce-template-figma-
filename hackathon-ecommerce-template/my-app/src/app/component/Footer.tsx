import "../globals.css";
import Image from "next/image";
import fblink from "../../public/footerfblink.png";
import instalink from "../../public/footerinstalink.png";
import twitterlink from "../../public/footertwitterlink.png";
import Link from "next/link";
import footerleftsection from "../../public/footerleftsection.png";




        // <div className="h-96 bg-[#EEEFFB] flex flex-col md:flex-row  justify-around ">
        //     <div>
        //   <div className=" w-[6.5rem] h-9  ml-20 font-bold text-4xl text-[#ODOE43] pl-[14rem] .navbar-text pt-20">Hekto
        //   </div> 

        //   <div className="flex items-center mt-20 ml-20 pl-[14rem]  ">  
        //       <input type="text" className="w-40 md:w-52 h-8 border-2 border-slate-300 " placeholder="Enter Email Address" />  
        //       <div className="w-14 h-8 bg-pink-600 text-[0.75rem] leading-4 flex items-center justify-center ">  
        //              <p className="text-white"> Sign Up</p> 
                
        //       </div>  
        //    </div>


        //    <div className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem]  mt-3 ml-20 pl-[14rem] cursor-pointer">
        //      <p>Contact Info</p>
        //      <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>

        //    </div>
        //    </div>


        //    {/* side divs */}
         
        //    <div className="pt-10">
        //     <p className="w-28 h-5 .navbar-text text-[1.5rem] font-semibold hover:underline cursor-pointer">Categories</p>
        //     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-10 hover:underline decoration-black cursor-pointer">
        //         <li className="hover:underline decoration-[#7E33E0]  cursor-pointer">Laptops & Computers</li>
        //         <li className="hover:underline decoration-[#7E33E0]  cursor-pointer">Cameras & Photography</li>
        //         <li className="hover:underline decoration-[#7E33E0]  cursor-pointer">Smart Phones & Tablets</li>
        //         <li className="hover:underline decoration-[#7E33E0]  cursor-pointer">Video Games Consoles</li>
        //         <li className="hover:underline decoration-[#7E33E0]  cursor-pointer">Waterproof Headphones</li>
        //     </ul>
        //    </div>


        //    <div className="pt-10">
        //     <p className="w-28 h-5 .navbar-text text-[1.5rem] font-semibold hover:underline cursor-pointer">CustomerCare</p>
        //     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-10 hover:underline cursor-pointer">
        //         <li className="hover:underline decoration-[#7E33E0] cursor-pointer">My Account</li>
        //         <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Discount</li>
        //         <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Returns</li>
        //         <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Orders History</li>
        //         <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Order Tracking</li>
        //     </ul>
        //    </div>

        //    <div className="pt-10">
        //     <p className="w-28 h-5 .navbar-text text-[1.5rem] font-semibold hover:underline cursor-pointer">Pages</p>
        //     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-10 hover:underline cursor-pointer">
        //         <li className="hover:underlin decoration-[#7E33E0] cursor-pointer">Blog</li>
        //         <li className="hover:underlin decoration-[#7E33E0] cursor-pointer">Browse the Shop</li>
        //         <li className="hover:underlin decoration-[#7E33E0] cursor-pointer">Pre-Built Pages</li>
        //         <li className="hover:underlin decoration-[#7E33E0] cursor-pointer">Visual Composer Elements</li>
        //         <li className="hover:underlin decoration-[#7E33E0] cursor-pointer">WooCommers Pages</li>
        //     </ul>
        //    </div>
     
        //    </div>

// ------------------------------------------
//         <div className="bg-[#EEEFFB] h-80 flex flex-col md:flex-row justify-around p-6">  
//   <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0 m-20 ml-52 mt-3">  
//     <div className="font-bold text-4xl text-[#ODOE43] text-center md:text-left ">Hekto</div>  
    
//     <div className="flex items-center mt-4">  
//       <input type="text" className="flex-grow h-10 border-2 border-slate-300" placeholder="Enter Email Address" />  
//       <div className="w-14 h-10 bg-pink-600 text-[0.75rem] leading-4 flex items-center justify-center cursor-pointer">  
//         <p className="text-white">Sign Up</p>   
//       </div>  
//     </div>  

//     <div className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] mt-3 cursor-pointer">  
//       <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Contact Info</p>  
//       <p className="hover:underline decoration-[#7E33E0] cursor-pointer">17 Princess Road, London, Greater London NW1 8JR, UK</p>  
//     </div>  
//   </div>  

//   {/* Side Divs */}  
//   <div className="w-full md:w-1/4 pt-6 md:pt-10 mb-6 md:mb-0">  
//     <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer  decoration-[#7E33E0] ">Categories</p>  
//     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Laptops & Computers</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Cameras & Photography</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Smart Phones & Tablets</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Video Games Consoles</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Waterproof Headphones</li>  
//     </ul>  
//   </div>  

//   <div className="w-full md:w-1/4 pt-6 md:pt-10 mb-6 md:mb-0">  
//     <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer  decoration-[#7E33E0] ">Customer Care</p>  
//     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
//       <li className="hover:underline  decoration-[#7E33E0] cursor-pointer">My Account</li>  
//       <li className="hover:underline  decoration-[#7E33E0] cursor-pointer">Discount</li>  
//       <li className="hover:underline  decoration-[#7E33E0] cursor-pointer">Returns</li>  
//       <li className="hover:underline  decoration-[#7E33E0] cursor-pointer">Orders History</li>  
//       <li className="hover:underline  decoration-[#7E33E0] cursor-pointer">Order Tracking</li>  
//     </ul>  
//   </div>  

//   <div className="w-full md:w-1/4 pt-6 md:pt-10">  
//     <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer  decoration-[#7E33E0] ">Pages</p>  
//     <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Blog</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Browse the Shop</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Pre-Built Pages</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Visual Composer Elements</li>  
//       <li className="hover:underline decoration-[#7E33E0] cursor-pointer">WooCommerce Pages</li>  
//     </ul>  
//   </div>  
// </div>

// ------------
export default function Footer (){
  return (
<div className="flex flex-col">
 <div className="bg-[#EEEFFB] h-auto flex flex-col md:flex-row justify-around p-6">  
  <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0 mx-2">  
    <div className="font-bold text-4xl text-[#ODOE43] text-center md:text-left">Hekto</div>  

    <div className="flex items-center mt-4 ">  
      <input  
        type="text"  
        className="flex-grow md:flex-shrink h-10 border-2 border-slate-300 p-2 rounded-l focus:outline-none focus:border-[#7E33E0] transition duration-200"  
        placeholder="Enter Email Address"  
      />  
      <div className="w-28 h-10 bg-pink-600 text-[0.75rem] leading-4 flex items-center justify-center cursor-pointer">  
        <p className="text-white">Sign Up</p>  
      </div>  
    </div>  

    <div className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] mt-3 cursor-pointer">  
      <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Contact Info</p>  
      <p className="hover:underline decoration-[#7E33E0] cursor-pointer">17 Princess Road, London, Greater London NW1 8JR, UK</p>  
    </div>  
  </div>  

  {/* Side Divs */}  
  <div className="w-full md:w-1/4 pt-6 md:pt-0 mb-6 md:mb-0 mx-2 lg:ml-20 md:ml-20">  
    <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer decoration-[#7E33E0] ">Categories</p>  
    <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Laptops & Computers</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Cameras & Photography</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Smart Phones & Tablets</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Video Game Consoles</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Waterproof Headphones</li>  
    </ul>  
  </div>  

  <div className="w-full md:w-1/4 pt-6 md:pt-0 mb-6 md:mb-0 mx-2">  
    <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer decoration-[#7E33E0]">Customer Care</p>  
    <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">My Account</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Discount</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Returns</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Orders History</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Order Tracking</li>  
    </ul>  
  </div>  

  <div className="w-full md:w-1/4 pt-6 md:pt-0 mx-2">  
    <p className="text-[1.5rem] font-semibold hover:underline cursor-pointer decoration-[#7E33E0]">Pages</p>  
    <ul className="text-[#8A8FB9] font-normal text-sm leading-[1.75rem] pt-4">  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Blog</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Browse the Shop</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Pre-Built Pages</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">Visual Composer Elements</li>  
      <li className="hover:underline decoration-[#7E33E0] cursor-pointer">WooCommerce Pages</li>  
    </ul>  
  </div> 


  
      


  
</div> 
{/* last part  */}
<div className="h-11 bg-[#e7e4f8] flex items-center justify-around">
   <div >
    <Link className="hover:underline hover:decoration-purple-600 "   
        href="https://www.facebook.com/?name=test"   
        target="_blank"   
        rel="noopener noreferrer"  
      >  
        <Image  
          src={footerleftsection}  
          alt="Facebook Link"  
          width={150}  
          height={150}  
        />  
        
      </Link> </div>
   <div className="flex gap-2">  
      <Link   
        href="https://www.facebook.com/?name=test"   
        target="_blank"   
        rel="noopener noreferrer"  
      >  
        <Image   
          src={fblink}  
          alt="Facebook Link"  
          width={15}  
          height={15}  
        />  
      </Link>  


      <Link   
        href="https://www.instagram.com/accounts/login/?hl=en"   
        target="_blank"   
        rel="noopener noreferrer"  
      >  
        <Image   
          src={instalink}  
          alt="Facebook Link"  
          width={15}  
          height={15}  
        />  
      </Link> 



      <Link   
        href="https://www.facebook.com/?name=test"   
        target="_blank"   
        rel="noopener noreferrer"  
      >  
        <Image   
          src={twitterlink}  
          alt="Facebook Link"  
          width={15}  
          height={15}  
        />  
      </Link> 
    </div>    
  

</div>
</div>







   
      
        
    )
}