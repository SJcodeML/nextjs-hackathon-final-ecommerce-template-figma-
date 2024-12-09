import Image from "next/image";
import cartsofa from "../../public/cartsofa.png";

export default function DiscountItem() {
    return (
        
            <div className="flex flex-col items-center mt-10">  
            {/* Heading */}  
            <div className="flex justify-center items-center">  
                <h1 className="navbar-text text-[1.75rem] leading-7 mt-10 font-semibold text-[#1a0b5b] hoverEffect">  
                    Discount Item
                </h1>  
            </div> 

            {/* bottom nav featured products */}

            <div className="flex justify-center gap-7 items-center  mt-3  ">  
                <h1 className="navbar-text text-[0.875rem] leading-7 cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Plastic Chair 
                </h1> 
                <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Sofa Collection 
                </h1>  
                <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Featured 
                </h1>  
                 
            </div> 

            {/* row reverse section  */}
            
      
            <div className="h-[30rem]  flex items-center justify-center flex-row-reverse">


{/* side sofa pic */}
<div>
    <div className="h-[25rem] w-[25rem]   rounded-full z-0 flex items-center justify-center relative">
    
    <div className="absolute z-10 ">
    <Image 
        src={cartsofa}
        alt="Picture of the author"
        width={450}
        height={450}
    />
    </div>
    </div>
</div>
{/* side information */}
<div className="flex flex-col">
<div className="">

    <h1>Unique Features Of Latest & Trending Products</h1>
    <ul>
        <li>All Frames contsructed with hardwood solids and laminates</li>
        <li>Reinforced with double wood dowels, glue,screw &nails corner blocks and machine nails</li>
        <li>Arms, backs and seats are structually reinforced</li>
    </ul>

</div>

<div>
    <button></button>
    <div>
        <h3>B&B Italian Sofa</h3>
        <h3>$32.00</h3>
    </div>
</div>
</div>

</div>


       

   </div>




        
    )
} 



// text-[#1a0b5b]
// text-[#acabc3] 