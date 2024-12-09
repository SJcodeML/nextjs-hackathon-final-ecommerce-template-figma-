"use client";




// export default function HeroSection() {
//     const MyButton = ({ onClick, label }:any) => {  
//         return (  
//           <button   
//             className='mt-3 w-32 h-11  bg-[#fb2e86] text-white transition-colors duration-300' >
//             {label}  
//           </button>  
//         );  
//       }; 
      

//     return (
//         <div className=" flex flex-col md:flex-row  h-[35rem] bg-[#F2F0FF] mt-[0.55rem] mb-12 ">
//             <div>
//                 <Image
//                     src={hanginglamp}
//                     alt="Picture of the author"
//                     width={387}
//                     height={387}
//                 />
//             </div>

             {/* text section */}
             {/* <div className='mt-24 w-95 '>
                 <div className='w-95 h-7  text-[#fb2e86] font-bold text-sm leading-7'>
                     Best Furniture For Your Castle
                     <div className='w-95'>
                         <h1 className='text-black .navbar-text tracking-wider text-[2.5rem]  leading-10 my-3'>NEW FURNITURE COLLECTION TRENDS in 2020</h1>
                         <h3 className='text-[#8a8fb9] font-bold text-sm leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus reprehenderit obcaecati possimus omnis deserunt consequatur.</h3>
                     </div>
                    
             <div className="">  
      <MyButton label="Click Me" />  
     </div>  
                 </div>
             </div>

            <div className="">
                  <Image
                     src={chair}
                     alt="Picture of the author"
                     width={700}
                     height={700}
                   />
                </div>




        </div> */}
//     )
// }



// ---------------







import Image from 'next/image';  
import hanginglamp from "../../public/hanginglamp.png";  
import chair from "../../public/chair.png";  

export default function HeroSection() {  
    const MyButton = ({ onClick, label }: any) => {  
        return (  
            <button  
                className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'  
                onClick={onClick}  
            >  
                {label}  
            </button>  
        );  
    };  

    return (  
        <div className="flex flex-col md:flex-row  justify-between h-auto bg-[#F2F0FF]  mt-[0.55rem] mb-12">  
            <div className="hidden lg:block justify-center p-0 m-0">  
                <Image  
                    src={hanginglamp}  
                    alt="Hanging Lamp"  
                    width={300}  
                    height={300}  
                    className="object-contain"  
                />  
            </div>  

            {/* Text Section */}  
            <div className="flex-1 text-center md:text-left md:mt-24 md:ml-14 lg:ml-1">  
                <div className='text-[#fb2e86] font-bold text-sm leading-7 mb-2'>  
                    Best Furniture For Your Castle  
                </div>  
                <h1 className='text-black tracking-wider text-[2rem] md:text-[2.5rem] leading-10 my-3'>  
                    NEW FURNITURE COLLECTION TRENDS in 2020  
                </h1>  
                <h3 className='text-[#8a8fb9] font-bold text-sm leading-7 mb-5'>  
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus reprehenderit obcaecati possimus omnis deserunt consequatur.  
                </h3>  
                <MyButton label="Click Me" />  
            </div>  

            <div className="flex-1">  
                <Image  
                    src={chair}  
                    alt="Chair"  
                    width={700}  
                    height={700}  
                    className="max-w-full h-auto"  
                />  
            </div>  
        </div>  
    );  
}