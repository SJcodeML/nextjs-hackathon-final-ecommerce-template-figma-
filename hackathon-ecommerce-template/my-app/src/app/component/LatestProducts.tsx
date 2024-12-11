"use client"
import Image , {StaticImageData} from "next/image";

import chair from "../../public/chair.png";
import chair2 from "../../public/chair2.png";
import chair3 from "../../public/chair3.png";
import chair4 from "../../public/chair4.png";
import chair5 from "../../public/chair5.png";
import chair6 from "../../public/chair6.png";


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
        image:chair4,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:5,
        image:chair5,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:6,
        image:chair6,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },

]

// const Card = ({ item }: { item: Data2 }) => (  
//     <div className=" mt-5   ">
        
        {/* card container */}
        {/* <div className="w-96 flex justify-between items-center flex-col  flex-wrap  mb-8 "> */}
              
              {/* card */}
              {/* <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3  ' key={item.id}>  
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
    </div> 
);   */}

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

// export default function LatestProducts(){
//     return(
//         <div className=" flex flex-wrap justify-center items-center">
//              {/* heading */}
//                <h1 className="">
//                 Latest Products
//                </h1>
             
//              {/* cards section */}
//              <div className='flex flex-wrap justify-between '>  
//             {data.map((item) => (  
//                 <Card item={item} key={item.id} />  
//             ))}  
//         </div>  




//         </div>
        
//     )
// }



export default function LatestProducts() {  
    return (  
        <div className="flex flex-col items-center mt-10">  
            {/* Heading */}  
            <div className="flex justify-center items-center ">  
                <h1 className="navbar-text text-[1.75rem] leading-7 mt-10  font-extrabold text-[#1a0b5b] hoverEffect">  
                    Latest Products 
                </h1>  
            </div> 

            {/* bottom nav featured products */}

            <div className="flex justify-center gap-7  items-center mb-9 mt-3 ">  
                <h1 className="navbar-text text-[0.875rem] leading-7 cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    New Arrival 
                </h1> 
                <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Best Seller 
                </h1>  
                <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Featured 
                </h1>  
                <h1 className="navbar-text text-[0.875rem] leading-7  cursor-pointer hover:text-pink-300 text-[#1a0b5b] hoverEffect">  
                    Best Offer 
                </h1>   
            </div> 




            {/* Cards Section */}  
            <div className="flex flex-wrap justify-center md:justify-center gap-4 px-4">  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>  
        </div>  
    );  
}






 

