import Image from "next/image";
import discountsofa from "../../public/discountsofa.png";


export default function DiscountItem (){
    return (
        <div>
             <div className="h-[25rem] w-[25rem]   bg-[#d6b7e2c1] rounded-full z-0 flex items-center justify-center relative">
                    
                    <div className="absolute z-10 ">
                    <Image 
                        src={discountsofa }
                        alt="Picture of the author"
                        width={450}
                        height={450}
                    />
                    </div>
                    </div>
        </div>
    )
}