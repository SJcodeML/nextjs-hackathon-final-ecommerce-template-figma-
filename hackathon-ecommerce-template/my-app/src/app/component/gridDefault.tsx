import Image, {StaticImageData}  from "next/image";
import chair from "../../public/chair.png";
import chair2 from "../../public/chair2.png";
import chair3 from "../../public/chair3.png";
import chair4 from "../../public/chair4.png";
import chair5 from "../../public/chair5.png";
import chair6 from "../../public/chair6.png";
import chair7 from "../../public/chair7.png";

interface GridData {
    id:number,
    image:StaticImageData,
    name:string;
    price:number,
    oldPrice:number

}


const griddata:GridData[] =[
    {
        id:1,
        image:chair,
        name:"Plastic",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:2,
        image:chair2,
        name:"Wooden",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:3,
        image:chair3,
        name:"4Wheel",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:4,
        image:chair4,
        name:"Demo",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:5,
        image:chair5,
        name:"Restrict",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:6,
        image:chair6,
        name:"Google",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:7,
        image:chair7,
        name:"Guide",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:8,
        image:chair,
        name:"Therapy",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:9,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:10,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:11,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:12,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:13,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:14,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:15,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:16,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    

]


export default function ShopGridDefault() {  
    return (  
        <div className="mb-10 justify-center items-center bg-[#ffffff]">  
            <div className="flex justify-center items-center">  
                <h1 className="navbar-text text-[1.75rem] leading-[4rem] mt-10 font-extrabold text-[#1a0b5b] hoverEffect">  
                    Featured Products  
                </h1>  
            </div>  
            {/* Featured Card section */}  
            <div className="flex justify-center flex-wrap mt-5 mx-4 md:mx-48">  
                {[...Array(16)].map((_, index) => (  
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

           {/* <Logo/> */}
        </div>  
    )  
}





