"use client"; 


// import Image from "next/image";
// import cartsofa from "../../public/cartsofa.png";

// export default function HomeSingleCart() {
//     const MyButton = ({ onClick, label }: any) => {  
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
//         <>
//             <div className="h-[30rem] mb-7 flex items-center justify-center bg-[#f1f0ff]">


//                 {/* side sofa pic */}
//                 <div>
//                     <div className="h-[25rem] w-[25rem]   bg-[#d6b7e2c1] rounded-full z-0 flex items-center justify-center relative">
                    
//                     <div className="absolute z-10 ">
//                     <Image 
//                         src={cartsofa}
//                         alt="Picture of the author"
//                         width={450}
//                         height={450}
//                     />
//                     </div>
//                     </div>
//                 </div>
//                 {/* side information */}
//                <div className="flex flex-col mr-6 items-start">
                

//                 <div className="flex flex-col ml-12 mt-10 mb-5 w-[30rem]">  
//                 <h1 className="navbar-text text-2xl leading-7 mt-10 mb-5 font-extrabold text-[#1a0b5b] hoverEffect">  
//                     What Shopex Offers!  
//                 </h1>  
           
//                     <ol className="list-disc ml-4">
//                         <li className="text-[#acabc3] text-md leading-9">All Frames contsructed with hardwood solids and laminates</li>
//                         <li className="text-[#acabc3] text-md leading-9">Reinforced with double wood dowels, glue,screw &nails corner blocks and machine nails</li>
//                         <li className="text-[#acabc3] text-md leading-9">Arms, backs and seats are structually reinforced</li>
//                     </ol>

//                 </div>

//                 <div className="flex  ml-12  mb-7 w-[30rem]">
//                 <MyButton label="Click Me" />
//                     <div className="ml-3 flex flex-col justify-center mt-2 items-center text-[#1a0b5b]">
//                         <h3>B&B Italian Sofa</h3>
//                         <h3>$32.00</h3>
//                     </div>
//                 </div>
//                 </div>

//             </div>





//         </>
//     )
// } 

// ------------------------------------


import Image from "next/image";  
import cartsofa from "../../public/cartsofa.png";  

export default function HomeSingleCart() {  
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
        <div className="flex flex-col lg:flex-row items-center justify-center bg-[#f1f0ff] p-4 lg:p-8">  
            {/* Side sofa pic */}  
            <div className="flex justify-center mb-6 lg:mb-0 lg:mr-6">  
                <div className="h-[25rem] w-[25rem] bg-[#d6b7e2c1] rounded-full flex items-center justify-center relative">  
                    <div className="absolute z-10 h-[24rem] w-[24rem]">  
                        <Image   
                            src={cartsofa}  
                            alt="Cart sofa"  
                            layout="fill" // This makes the image fill the container  
                            objectFit="contain" // This preserves the image aspect ratio  
                        />  
                    </div>  
                </div>  
            </div>  
            {/* Side information */}  
            <div className="flex flex-col items-center w-full lg:w-[30rem]">  
                <div className="flex flex-col ml-28 lg:ml-12 mt-0 lg:mt-10 mb-5">  
                    <h1 className="text-2xl leading-7 mt-5 mb-5 font-extrabold text-[#1a0b5b] hoverEffect">  
                        What Shopex Offers!  
                    </h1>  
                    <ol className="list-disc ml-4 text-[#acabc3] text-md leading-9">  
                        <li>All frames constructed with hardwood solids and laminates.</li>  
                        <li>Reinforced with double wood dowels, glue, screws, nails, corner blocks, and machine nails.</li>  
                        <li>Arms, backs, and seats are structurally reinforced.</li>  
                    </ol>  
                </div>  

                <div className="flex items-center ml-56 lg:ml-28  mb-7 w-full lg:w-[30rem]">  
                    <MyButton label="Add To Cart" />  
                    <div className="ml-3 flex flex-col justify-center items-center text-[#1a0b5b] mt-2 text-center">  
                        <h3 className="text-lg font-semibold">B&B Italian Sofa</h3>  
                        <h3 className="text-sm font-medium">\$32.00</h3>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}