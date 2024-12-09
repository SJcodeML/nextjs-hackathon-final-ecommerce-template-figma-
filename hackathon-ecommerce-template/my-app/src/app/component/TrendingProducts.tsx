"use client"
import Image , {StaticImageData} from "next/image";
import chair from "../../public/chair.png";
import chair2 from "../../public/chair2.png";
import chair3 from "../../public/chair3.png";
import chair4 from "../../public/chair4.png";
import chair5 from "../../public/chair5.png";
import chair6 from "../../public/chair6.png";
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
        image:chair,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:2,
        image:chair2,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:3,
        image:chair3,
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
    

]

const Card = ({ item }: { item: Data2 }) => (  
    <div className="w-full max-w-xs bg-white shadow-md  mb-4">  
        {/* Image Container */}  
        <div className="flex justify-center items-center bg-[#f7f7f7] h-80 overflow-hidden">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`} // Use a more descriptive alt text if relevant  
                layout="responsive"  
                width={150}  
                height={150}  
                className="object-cover"  
            />  
        </div>  

        {/* Card Details */}  
        <div className="p-4 flex flex-col">  
            <h3 className="text-[#151875] text-[1rem]">{`Code ${item.id}`}</h3>  
            <div className="flex items-end justify-between ">  
                <span className="text-[#151875] text-[0.75rem]">${item.price.toFixed(2)}</span>  
                {item.oldPrice && (  
                    <span className="text-[#ba3131] text-[0.75rem] line-through">${item.oldPrice.toFixed(2)}</span>  
                )}  
            </div>  
        </div>  
    </div>  
);

export default function TrendingProducts (){
    return (

        <div className="flex flex-col items-center mt-10">  
            {/* Heading */}  
            <div className="flex justify-center items-center">  
                <h1 className="navbar-text text-[1.75rem] leading-7 mt-10 font-extrabold text-[#1a0b5b] hoverEffect">  
                    Latest Products 
                </h1>  
            </div> 

           




            {/* Cards Section */}  
            <div className="flex flex-wrap justify-center md:justify-center gap-4 px-4">  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>  
        </div>  
        
       
    
    )
}

