
import Image, { StaticImageData } from "next/image";
import freedelivery1 from "../../public/free-delivery1.png";
import freedelivery2 from "../../public/Group.png";
import freedelivery3 from "../../public/Group1.png";
import freedelivery4 from "../../public/cashback1.png";


interface Data2 {
    id: number,
    image: StaticImageData,
    name: string,
    description: string

}

const data: Data2[] = [
    {
        id: 1,
        image: freedelivery1,
        name: "24/7 Support",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 2,
        image: freedelivery2,
        name: "24/7 Support",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 3,
        image: freedelivery3,
        name: "24/7 Support",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 4,
        image: freedelivery4,
        name: "24/7 Support",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },


]

// const Card = ({ item }: { item: Data2 }) => (
//     <div className="flex  flex-wrap mt-5 px-32 ">



//         {/* card */}
//         <div className='flex drop-shadow-xl ' key={item.id}>
//             <div className='w-60 h-56 flex flex-col bg-[#fbfafa] justify-center items-center  mb-14 '>
//                 <Image
//                     src={item.image}
//                     alt="Picture of the author"
//                     width={50}
//                     height={50}
//                 />


//                 <h3 className='text-[#151875] text-[1rem] leading-6 font-extrabold navbar-text '>{`Code ${item.name}`}</h3>
//                 <h3 className='text-[0.75rem] text-center m-3 font-semibold text-[#8a8fb9]'>{item.description}</h3>
//             </div>


//         </div>
//     </div>

// );


// export default function ShopexOffer() {
//     return (
//         <div className='flex flex-col '>
//             <div className="flex justify-center items-center mt-10 mb-7">
//                 <h1 className="navbar-text text-[1.75rem] leading-7 mt-10 font-extrabold text-[#1a0b5b] hoverEffect">
//                     What Shopex Offer!
//                 </h1>
//             </div>

//             {/* cards section */}
//             <div className='flex flex-wrap justify-between '>
//                 {data.map((item) => (
//                     <Card item={item} key={item.id} />
//                 ))}
//             </div>
//         </div>

//     )
// }

// ---------------------


 

// const Card = ({ item }: { item: Data2 }) => (  
//     <div className="flex justify-center">  
        {/* Card */}  
        {/* <div className='flex flex-col bg-[#fbfafa] drop-shadow-xl rounded-lg p-4 w-full max-w-[300px] mx-2 mb-6'>  
            <div className='flex justify-center items-center mb-4 h-44'>  
                <Image  
                    src={item.image}  
                    alt={`Image of ${item.name}`}  // More descriptive alt text  
                    layout="intrinsic"   
                    width={150}  
                    height={150}  
                    className="object-contain" // Ensure the image covers the area while keeping its aspect ratio  
                />  
            </div>  
            <h3 className='text-[#151875] text-lg leading-6 font-extrabold text-center'>  
                {`Code ${item.name}`}  
            </h3>  
            <h3 className='text-sm text-center m-2 font-semibold text-[#8a8fb9]'>  
                {item.description}  
            </h3>  
        </div>  
    </div>  
);



export default function ShopexOffer() {  
    return (  
        <div className='flex flex-col items-center'>  
            <div className="flex justify-center items-center mt-10 mb-7">  
                <h1 className="navbar-text text-2xl leading-7 font-extrabold text-[#1a0b5b] hoverEffect">  
                    What Shopex Offers!  
                </h1>  
            </div>  

            {/* Cards Section */}  
//             <div className='flex flex-wrap justify-center px-4'>  
//                 {data.map((item) => (  
//                     <Card item={item} key={item.id} />  
//                 ))}  
//             </div>  
//         </div>  
//     );  
// } */}



// ------------------------


  

const Card = ({ item }: { item: Data2 }) => (  
    <div className="flex justify-center">  
        {/* Card */}  
        <div className='flex flex-col bg-[#ffffff] drop-shadow-lg p-4 w-full max-w-[223px] mx-2 mb-12'>  
            <div className='flex justify-center items-center mb-3 h-32'>  
                <Image  
                    src={item.image}  
                    alt={`Image of ${item.name}`}  // More descriptive alt text  
                    layout="intrinsic"   
                    width={70}  
                    height={70}  
                    className="object-contain" // Ensures image maintains aspect ratio  
                />  
            </div>  
            <h3 className='text-[#151875] text-lg leading-6 font-extrabold text-center'>  
                {`Code ${item.name}`}  
            </h3>  
            <h3 className='text-[0.765rem] text-center mt-1 font-thin text-[#8a8fb9]'>  
                {item.description}  
            </h3>  
        </div>  
    </div>  
);


 

export default function ShopexOffer() {  
    return (  
        <div className='flex flex-col items-center'>  
            <div className="flex justify-center items-center mt-10 mb-7">  
                <h1 className="navbar-text text-2xl leading-7 mt-10 mb-5 font-extrabold text-[#1a0b5b] hoverEffect">  
                    What Shopex Offers!  
                </h1>  
            </div>  

            {/* Cards Section */}  
            <div className='flex flex-wrap justify-center gap-4 px-4'>  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>  
        </div>  
    );  
}
