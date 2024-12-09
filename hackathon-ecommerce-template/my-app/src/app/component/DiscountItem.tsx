// import Image from "next/image";
// import discountSofa from "../../public/discountsofa.png";

// export default function DiscountItem() {
//     const MyButton = ({ onClick, label }: { onClick?: () => void; label: string; }) => {  
//         return (  
//             <button  
//                 className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'  
//                 onClick={onClick}  
//             >  
//                 {label}  
//             </button>  
//         );  
//     };  
//     return (
        
//             <div className="flex flex-col items-center mt-10">  
//             {/* Heading */}  
//             <div className="flex justify-center items-center">  
//                 <h1 className="navbar-text text-[1.75rem] leading-7 mt-10 font-semibold text-[#1a0b5b] hoverEffect">  
//                     Discount Item
//                 </h1>  
//             </div> 

//             {/* bottom nav featured products */}

//             <div className="flex justify-center gap-7 items-center  mt-3  ">  
//                 <h1 className="navbar-text text-[0.875rem] leading-7 cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
//                     Plastic Chair 
//                 </h1> 
//                 <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
//                     Sofa Collection 
//                 </h1>  
//                 <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
//                     Featured 
//                 </h1>  
                 
//             </div> 

//             {/* row reverse section  */}
            
      
//             <div className="h-[30rem]  flex items-center justify-center flex-row-reverse">


// {/* side sofa pic */}
// <div>
//     <div className="h-[25rem] w-[25rem] bg-pink-200  rounded-full z-0 flex items-center justify-center relative">
    
//     <div className=" w-[40rem] absolute z-10 ">
//     <Image 
//         src={discountSofa}
//         alt="Picture of the author"
//         width={900}
//         height={900}
//     />
//     </div>
//     </div>
// </div>
// {/* side information */}
// <div className="flex flex-col items-center w-full lg:w-[30rem]">  
//                 <div className="flex flex-col ml-28 lg:ml-12 mt-0 lg:mt-10 mb-5">  
//                     <h1 className="text-2xl leading-7 mt-5 mb-5 font-extrabold text-[#1a0b5b] hoverEffect">  
//                         20% Discount of All Products 
//                     </h1>
//                     <h3 className="text-sm leading-5  font-thin text-pink-500 hoverEffect">  
//                         Earns Sofa Compact
//                     </h3>   
//                     <ol className="list-disc ml-4 text-[#acabc3] text-md leading-9">  
//                         <li>All frames constructed with hardwood solids and laminates.</li>  
//                         <li>Reinforced with double wood dowels, glue, screws, nails, corner blocks, and machine nails.</li>  
//                         <li>Arms, backs, and seats are structurally reinforced.</li>  
//                     </ol>  
//                 </div>  

//                 <div className="flex items-center ml-56 lg:ml-28  mb-7 w-full lg:w-[30rem]">  
//                     <MyButton label="Add To Cart" />  
//                     <div className="ml-3 flex flex-col justify-center items-center text-[#1a0b5b] mt-2 text-center">  
//                         <h3 className="text-lg font-semibold">B&B Italian Sofa</h3>  
//                         <h3 className="text-sm font-medium">\$32.00</h3>  
//                     </div>  
//                 </div>  
//             </div>  
// </div>

// </div>  
//     )
// } 



// // text-[#1a0b5b]
// // text-[#acabc3] 

// ------------


import Image from "next/image";  
import discountSofa from "../../public/discountsofa.png";  

export default function DiscountItem() {  
    const MyButton = ({ onClick, label }: { onClick?: () => void; label: string; }) => {  
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
        <div className="flex flex-col items-center mt-10">  
            {/* Heading */}  
            <h1 className="navbar-text text-[1.75rem] leading-7 font-semibold text-[#1a0b5b] hoverEffect">  
                Discount Item  
            </h1>  

            {/* Bottom Nav Featured Products */}  
            <div className="flex justify-center gap-7 items-center mt-3">  
                {["Plastic Chair", "Sofa Collection", "Featured"].map((item) => (  
                    <h1 key={item} className="navbar-text text-[0.875rem] leading-7 cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                        {item}  
                    </h1>  
                ))}  
            </div>   

            {/* Row Reverse Section */}  
            <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-center mt-8 lg:mt-10 space-y-5 lg:space-y-0 lg:space-x-5">  
                {/* Side Sofa Pic */}  
                <div className="flex justify-center">  
                    <div className="h-[23rem] w-[23rem] bg-pink-200 rounded-full flex items-center justify-center relative">  
                        <div className="absolute z-10 h-[40rem] w-[35rem]">  
                            <Image   
                                src={discountSofa}  
                                alt="Discount Sofa"  
                                layout="fill" // Makes the image fill the container  
                                objectFit="contain" // Preserves the aspect ratio  
                            />  
                        </div>  
                    </div>  
                </div>  
                {/* Side Information */}  
                <div className="flex flex-col items-center lg:w-[30rem] text-center lg:text-left px-4">  
                    <div className="flex flex-col mb-5">  
                        <h1 className="text-2xl leading-7 font-extrabold text-[#1a0b5b] hoverEffect">  
                            20% Discount on All Products   
                        </h1>  
                        <h3 className="text-sm leading-5 font-thin text-pink-500 hoverEffect">  
                            Earns Sofa Compact  
                        </h3>   
                        <ol className="list-disc ml-4 text-[#acabc3] text-md leading-9">  
                            <li>All frames constructed with hardwood solids and laminates.</li>  
                            <li>Reinforced with double wood dowels, glue, screws, nails, corner blocks, and machine nails.</li>  
                            <li>Arms, backs, and seats are structurally reinforced.</li>  
                        </ol>  
                    </div>  
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full">  
                        <MyButton label="Add To Cart" />  
                        <div className="ml-0 lg:ml-3 flex flex-col justify-center items-center text-[#1a0b5b] mt-2">  
                            <h3 className="text-lg font-semibold">B&B Italian Sofa</h3>  
                            <h3 className="text-sm font-medium">\$32.00</h3>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}