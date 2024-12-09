"use client"
import Image , {StaticImageData} from "next/image";
import chair from "../../public/chair.png";
import chair2 from "../../public/chair2.png";
import chair3 from "../../public/chair3.png";
import chair4 from "../../public/chair4.png";

interface Data2 {
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    
}


const data:Data2[] =[
    {
        id:1,
        image:chair,
        name:"Mini LCW chair",
        price:42.00,
        

    },
    {
        id:2,
        image:chair2,
        name:"Mini LCW chair",
        price:42.00,
        

    },
    {
        id:3,
        image:chair3,
        name:"sidra",
        price:42.00,
        

    },
    {
        id:4,
        image:chair4,
        name:"Mini LCW chair",
        price:42.00,
        

    },
    
]


const Card = ({ item }: { item: Data2 }) => (  
    <div className="flex justify-center flex-col mb-14">  
        {/* Card */}  
        <div className='flex flex-col bg-[#ffffff] drop-shadow-lg p-9 w-full rounded-full max-w-[223px] max-h-[223px] mx-2 mb-3'>  
            <div className='flex justify-center items-center mb-3 h-32'>  
                <Image  
                    src={item.image}  
                    alt={`Image of ${item.name}`}  // More descriptive alt text  
                    layout="intrinsic"   
                    width={150}  
                    height={150}  
                    className="object-contain" // Ensures image maintains aspect ratio  
                />  
            </div>  

            
             
        </div>  

        <div className="flex flex-col">
            <h3 className='text-[#151875] text-sm leading-6  text-center'>  
                {`Code ${item.name}`}  
            </h3>  
            <h3 className='text-[0.765rem] text-center mt-1 font-thin text-[#151875]'>  
                ${item.price.toFixed(2)}  
            </h3> 
           </div>

        



    </div>  
);




export default function TopCategories (){
    return (

        <div className='flex flex-col items-center'>  
            <div className="flex justify-center items-center mt-10 mb-7">  
                <h1 className="navbar-text text-2xl leading-7 mt-10 mb-5 font-extrabold text-[#1a0b5b] hoverEffect">  
                    Top Categories  
                </h1>  
            </div>  

            {/* Cards Section */}  
            <div className='flex flex-wrap justify-center gap-4 px-4'>  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>  
        </div>  
    )
}