import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import "../globals.css";

export default function NavbarBottom (){
    return (
        // <div className="flex">
        //     <Head>
        //     <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>

        //     </Head>
        //     <div className="h-9 w-24 pt-[0.19rem] font-[700] text-[2rem] leading-8 text-[#ODOE43] pl-[14.5rem]">Hekto</div>
        //     <div className="flex ml-52 items-center">
        //         <p className="text-pink-400">Home</p>
        //         <FontAwesomeIcon icon={faChevronDown } className='text-pink-400 w-3 h-3 pt-1 pl-1' />
        //         <p className="px-5 w-10 h-5 .navbar-bottom" >Pages</p>
        //         <p className="px-8 w-10 h-5 .navbar-bottom">Products</p>
        //         <p className="px-10 w-10 h-5 .navbar-bottom">Blogs</p>
        //         <p className="px-3 w-10 h-5 .navbar-bottom">Shop</p>
        //         <p className="px-5 w-10 h-5 .navbar-bottom">Contact</p>
                
        //     </div>
        //     <div className="flex ">
        //          <input type="text" className="w-52 h-8 ml-60 mb-2 mt-2 border-[2px] border-slate-300" />
        //          <div className="w-8 h-8 mb-2 mt-2  bg-pink-600 flex items-center justify-center">
        //          <FontAwesomeIcon icon={faMagnifyingGlass} className="w" 
        //           />

        //          </div>

                  
        //         </div>







        // </div>

















<div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white">   
    <Head>  
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />  
    </Head>  

    <div className="font-bold text-3xl text-[#ODOE43] pl-[14rem] hover:underline decoration-[#7E33E0] cursor-pointer">Hekto</div>   

    {/* Navigation Links */}  
    <div className="flex space-x-3 md:space-x-10 text-pink-400 items-center">  
        <p className="hover:underline cursor-pointer decoration-[#7E33E0]">Home
        <FontAwesomeIcon icon={faChevronDown} className='text-pink-400 w-3 h-3 pt-1' /> </p>  
         
        <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Pages</p>  
        <p className="hover:underline decoration-[#7E33E0]  cursor-pointer">Products</p>  
        <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Blogs</p>  
        <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Shop</p>  
        <p className="hover:underline decoration-[#7E33E0] cursor-pointer">Contact</p>  
    </div>  

    {/* Search Input */}  
    <div className="flex items-center  mt-2 md:mt-0">  
        <input type="text" className="w-40 md:w-52 h-8 border-2 border-slate-300 bg-[#ffffff] " />  
        <div className="w-8 h-8 bg-pink-600 flex items-center justify-center ">  
                   <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        
        </div>  
    </div>  
</div>






    )
}

