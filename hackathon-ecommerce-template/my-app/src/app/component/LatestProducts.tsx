"use client"
import Image , {StaticImageData} from "next/image";
import chair7 from "../../public/chair7.png";

interface Data2 {
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number
}

const data:Data2[] =[
    {
        id:1,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:2,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:3,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:4,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:5,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:6,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },

]

const Card = ({ item }: { item: Data2 }) => (  
    <div className="flex justify-center items-center flex-row flex-wrap mt-5 mx-1  ">
        {/* card */}
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 px-4 mb-8  ' key={item.id}>  
        <div className='w-60 h-40 bg-[#f7f7f7] flex justify-center items-center drop-shadow-xl'>  
            <Image  
                src={item.image}  
                alt="Picture of the author"  
                width={150}  
                height={150}  
            />  
        </div>  
        <div className='w-60 h-8 bg-white flex justify-evenly items-center drop-shadow-xl mb-12 hover:bg-blue-500'>  
            <h3 className='text-[#151875] text-[0.75rem]'>{`Code ${item.id}`}</h3>  
            <div className="flex ">
            <h3 className='text-[#151875] text-[0.75rem] gap-2'>${item.price.toFixed(2)}</h3>  
            <h3 className='text-[#ba3131] text-[0.75rem] line-through'>${item.oldPrice.toFixed(2)}</h3> 
            </div> 
        </div>  
    </div> 
    </div> 
);  




export default function LatestProducts(){
    return(
        <div className=" flex flex-wrap justify-center items-center">
             {/* heading */}
               <h1 className="">
                Latest Products
               </h1>
             
             {/* cards section */}
             <div className='flex flex-wrap justify-between '>  
            {data.map((item) => (  
                <Card item={item} key={item.id} />  
            ))}  
        </div>  




        </div>
        
    )
}









 

