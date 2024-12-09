// import Image, { StaticImageData } from 'next/image';
// import chair2 from "../../public/chair2.png";
// import chair3 from "../../public/chair3.png";
// import chair4 from "../../public/chair4.png";
// import chair5 from "../../public/chair5.png";
// import chair6 from "../../public/chair6.png";
// import chair7 from "../../public/chair7.png";


// export default function FeaturedSection() {
//     return (
//         <div className="mb-10 justify-center items-center bg-[#f1f1f1]">
//             <div className=" flex justify-center items-center">
//                 <h1 className=".navbar-text text-[1.75rem] leading-[4rem] mt-30 font-extrabold text-[#1a0b5b] hoverEffect">
//                     Featured Products
//                 </h1>
//             </div>
//             {/* Featured Card section */}
//             <div className="flex justify-evenly mt-5 mx-48 flex-wrap">
//                 {/* card 1 */}
//                 <div className='flex flex-col '>
//                     <div className='w-60 h-40 bg-[#f6f7fb] flex  justify-center items-center   drop-shadow-xl '>
//                         <Image
//                             src={chair5}
//                             alt="Picture of the author"
//                             width={150}
//                             height={150}
//                         />

//                     </div>
//                     <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500   '>
//                         <h2 className='text-[#fb2e86] font-bold leading-5'>
//                             Cantiever chair
//                         </h2>
//                         <h3 className='text-[#151875] text-[0.75rem] '>Code V525201</h3>
//                         <h3 className='text-[#151875] text-[0.75rem]'>$42.00</h3>
//                     </div>
//                 </div>

//                 {/* card 2 */}

//                 <div className='flex flex-col '>
//                     <div className='w-60 h-40 bg-[#f6f7fb] flex  justify-center items-center   drop-shadow-xl '>
//                         <Image
//                             src={chair5}
//                             alt="Picture of the author"
//                             width={150}
//                             height={150}
//                         />

//                     </div>
//                     <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500   '>
//                         <h2 className='text-[#fb2e86] font-bold leading-5'>
//                             Cantiever chair
//                         </h2>
//                         <h3 className='text-[#151875] text-[0.75rem] '>Code V525201</h3>
//                         <h3 className='text-[#151875] text-[0.75rem]'>$42.00</h3>
//                     </div>
//                 </div>

//                 {/* card 3 */}
//                 <div className='flex flex-col '>
//                     <div className='w-60 h-40 bg-[#f6f7fb] flex  justify-center items-center  drop-shadow-xl '>
//                         <Image
//                             src={chair5}
//                             alt="Picture of the author"
//                             width={150}
//                             height={150}
//                         />

//                     </div>
//                     <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500   '>
//                         <h2 className='text-[#fb2e86] font-bold leading-5'>
//                             Cantiever chair
//                         </h2>
//                         <h3 className='text-[#151875] text-[0.75rem] '>Code V525201</h3>
//                         <h3 className='text-[#151875] text-[0.75rem]'>$42.00</h3>
//                     </div>
//                 </div>


//                 {/* card 4 */}

//                 <div className='flex flex-col '>
//                     <div className='w-60 h-40 bg-[#f6f7fb] flex  justify-center items-center drop-shadow-xl '>
//                         <Image
//                             src={chair5}
//                             alt="Picture of the author"
//                             width={150}
//                             height={150}
//                         />

//                     </div>
//                     <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500   '>
//                         <h2 className='text-[#fb2e86] font-bold leading-5'>
//                             Cantiever chair
//                         </h2>
//                         <h3 className='text-[#151875] text-[0.75rem] '>Code V525201</h3>
//                         <h3 className='text-[#151875] text-[0.75rem]'>$42.00</h3>
//                     </div>
//                 </div>




//             </div>
//         </div>
//     )
// }



import Image from 'next/image';  
import chair5 from "../../public/chair5.png"; 
import LatestProducts from './LatestProducts'; 
import ShopexOffer from './ShopexOffer';

export default function FeaturedSection() {  
    return (  
        <div className="mb-10 justify-center items-center bg-[#ffffff]">  
            <div className="flex justify-center items-center">  
                <h1 className="navbar-text text-[1.75rem] leading-[4rem] mt-10 font-extrabold text-[#1a0b5b] hoverEffect">  
                    Featured Products  
                </h1>  
            </div>  
            {/* Featured Card section */}  
            <div className="flex justify-center flex-wrap mt-5 mx-4 md:mx-48">  
                {[...Array(4)].map((_, index) => (  
                    <div key={index} className='flex flex-col m-2'>  
                        <div className='w-60 h-40 bg-[#f6f7fb] flex justify-center items-center drop-shadow-xl'>  
                            <Image  
                                src={chair5}  
                                alt="Picture of the author"  
                                width={150}  
                                height={150}  
                            />  
                        </div>  
                        <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500'>  
                            <h2 className='text-[#fb2e86] font-bold leading-5'>  
                                Cantiever chair  
                            </h2>  
                            <h3 className='text-[#151875] text-[0.75rem]'>Code V525201</h3>  
                            <h3 className='text-[#151875] text-[0.75rem]'>\$42.00</h3>  
                        </div>  
                    </div>  
                ))}  
            </div>  

            <LatestProducts/>
            <ShopexOffer/>
        </div>  
    )  
}