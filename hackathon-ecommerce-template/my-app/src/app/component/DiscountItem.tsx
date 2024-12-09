import Image from "next/image";
import cartsofa from "../../public/cartsofa.png";

export default function DiscountItem() {
    return (
        <>
            <div className="h-[30rem] mb-7 flex items-center justify-center bg-[#f1f0ff]">


                {/* side sofa pic */}
                <div>
                    <div className="h-[25rem] w-[25rem]   bg-[#d6b7e2c1] rounded-full z-0 flex items-center justify-center relative">
                    
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





        </>
    )
} 