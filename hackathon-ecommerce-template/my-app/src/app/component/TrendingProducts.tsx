"use client"
// import Image, { StaticImageData } from "next/image";
// import chair from "../../public/chair.png";
// import chair2 from "../../public/chair2.png";
// import chair3 from "../../public/chair3.png";
// import chair4 from "../../public/chair4.png";
// import chair5 from "../../public/chair5.png";
// import chair6 from "../../public/chair6.png";
// import chair7 from "../../public/chair7.png";
// import trendingclock from "../../public/trendingclock.png";
// import tredingdrawer from "../../public/trendingdrawer.png";

// interface Data2 {
//     id: number,
//     image: StaticImageData,
//     name: string,
//     price: number,
//     oldPrice: number
// }

// const data: Data2[] = [
//     {
//         id: 1,
//         image: chair,
//         name: "Sidra",
//         price: 42.00,
//         oldPrice: 65.00

//     },
//     {
//         id: 2,
//         image: chair2,
//         name: "Plastic",
//         price: 42.00,
//         oldPrice: 65.00

//     },
//     {
//         id: 3,
//         image: chair3,
//         name: "Wooden",
//         price: 42.00,
//         oldPrice: 65.00

//     },
//     {
//         id: 4,
//         image: chair7,
//         name: "Foamic",
//         price: 42.00,
//         oldPrice: 65.00

//     },


// ]

// const Card = ({ item }: { item: Data2 }) => (
//     <div className="w-full max-w-  bg-white mb-8 shadow-md  mb-4">
//          {/* Image Container */}
//         <div className="flex justify-center items-center bg-[#f7f7f7] h-60 overflow-hidden">
//             <Image
//                 src={item.image}
//                 alt={`Image of ${item.name}`} // Use a more descriptive alt text if relevant  
//                 layout="responsive"
//                 width={150}
//                 height={150}
//                 className="object-cover"
//             />
//         </div>

//          {/* Card Details */}
//         <div className="p-4 flex leading-6 flex-col text-center ">
//             <h3 className="text-[#151875] text-[1rem]">{item.name}</h3>
//             <div className="flex justify-center items-center gap-4 ">
//                 <span className="text-[#151875] text-[0.75rem]">${item.price.toFixed(2)}</span>
//                 {item.oldPrice && (
//                     <span className="text-[#ba3131] text-[0.75rem] line-through">${item.oldPrice.toFixed(2)}</span>
//                 )}
//             </div>
//         </div>
//     </div>
// );

// export default function TrendingProducts() {
//     return (

//         <div className="flex flex-col items-center mb-16 mt-10">
//             {/* Heading */}
//             <div className="flex justify-center items-center">
//                 <h1 className="navbar-text text-[1.75rem] leading-7 mt-10 mb-16 font-extrabold text-[#1a0b5b] hoverEffect">
//                     Trending Products
//                 </h1>
//             </div>

//             {/* Cards Section */}
//             <div className=" flex justify-center md:justify-center gap-4 px-4">
//                 {data.map((item) => (
//                     <Card item={item} key={item.id} />
//                 ))}
//             </div>


//              {/* main second line divs container */}
//             <div className="flex gap-4 ">
//                 <div className="w-[22rem] h-56 bg-[#eeeffb]" >
//                     <h1 className="pl-4 pt-4 text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>
//                     <h3 className="pl-4 leading-9 text-pink-500 underline">Shop Now</h3>

//                     <div className="flex items-end justify-end">
//                         <Image
//                             src={trendingclock}
//                             alt="ksdlk"
//                             width={150}
//                             height={200}
//                         />

//                     </div>
//                 </div>

//                  {/* second line second div */}

//                 <div className="w-[22rem] h-56 bg-[#eeeffb]" >
//                     <h1 className="pl-4 pt-4 text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>
//                     <h3 className="pl-4 leading-9 text-pink-500 underline">View Collection</h3>

//                     <div className="flex items-end justify-end">
//                         <Image
//                             src={tredingdrawer}
//                             alt="ksdlk"
//                             width={250}
//                             height={100}
//                         />

//                     </div>
//                 </div>

//                  {/* third div */}

//                 <div className=" w-[16rem] h-56  flex flex-col  justify-between" >   
//                    <div className="flex gap-4 ">
//                     <div className="flex  w-20 h-16 bg-[#eeeffb]">
//                         <div className=" flex justify-center mx-4 my-3">
//                         <Image
//                             src={trendingclock}
//                             alt="ksdlk"
//                             width={50}
//                             height={15}
//                         />
//                         </div> 
//                     </div>

//                     <div className="flex flex-col justify-center">
//                             <h1 className="text-[#1a0b5b] ">Eecutive Seat Chair</h1>
//                             <h3 className="text-[#1a0b5b] ">$39.00</h3>
//                         </div>
//                     </div>


//                    <div className="flex gap-4 ">
//                     <div className="flex  w-20 h-16 bg-[#eeeffb]">
//                         <div className=" flex justify-center mx-4 my-3">
//                         <Image
//                             src={trendingclock}
//                             alt="ksdlk"
//                             width={50}
//                             height={15}
//                         />
//                         </div> 
//                     </div>

//                     <div className="flex flex-col justify-center">
//                             <h1 className="text-[#1a0b5b] ">Eecutive Seat Chair</h1>
//                             <h3 className="text-[#1a0b5b] ">$39.00</h3>
//                         </div>
//                     </div>


//                    <div className="flex gap-4 ">
//                     <div className="flex  w-20 h-16 bg-[#eeeffb]">
//                         <div className=" flex justify-center mx-4 my-3">
//                         <Image
//                             src={trendingclock}
//                             alt="ksdlk"
//                             width={50}
//                             height={15}
//                         />
//                         </div> 
//                     </div>

//                     <div className="flex flex-col justify-center">
//                             <h1 className="text-[#1a0b5b] ">Eecutive Seat Chair</h1>
//                             <h3 className="text-[#1a0b5b] ">$39.00</h3>
//                         </div>
//                     </div>


//                 </div>


//             </div>

//         </div>



//     )
// }


// ----------------------
 
import Image, { StaticImageData } from "next/image";  
import chair from "../../public/chair.png";  
import chair2 from "../../public/chair2.png";  
import chair3 from "../../public/chair3.png";  
import chair4 from "../../public/chair4.png";  
import chair5 from "../../public/chair5.png";  
import chair6 from "../../public/chair6.png";  
import chair7 from "../../public/chair7.png";  
import trendingclock from "../../public/trendingclock.png";  
import trendingdrawer from "../../public/trendingdrawer.png";  

interface Data2 {  
    id: number,  
    image: StaticImageData,  
    name: string,  
    price: number,  
    oldPrice: number  
}  

const data: Data2[] = [  
    {  
        id: 1,  
        image: chair,  
        name: "Sidra",  
        price: 42.00,  
        oldPrice: 65.00  
    },  
    {  
        id: 2,  
        image: chair2,  
        name: "Plastic",  
        price: 42.00,  
        oldPrice: 65.00  
    },  
    {  
        id: 3,  
        image: chair3,  
        name: "Wooden",  
        price: 42.00,  
        oldPrice: 65.00  
    },  
    {  
        id: 4,  
        image: chair7,  
        name: "Foamic",  
        price: 42.00,  
        oldPrice: 65.00  
    },  
];  

const Card = ({ item }: { item: Data2 }) => (  
    <div className="w-full max-w bg-white mb-4 shadow-md">  
        {/* Image Container */}  
        <div className="flex justify-center items-center bg-[#f7f7f7] h-60 overflow-hidden">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`}  
                layout="responsive"  
                width={150}  
                height={150}  
                className="object-cover"  
            />  
        </div>  

         {/* Card Details */}  
        <div className="p-4 flex leading-6 flex-col text-center">  
            <h3 className="text-[#151875] text-lg">{item.name}</h3>  
            <div className="flex justify-center items-center gap-4">  
                <span className="text-[#151875] text-sm">${item.price.toFixed(2)}</span>  
                {item.oldPrice && (  
                    <span className="text-[#ba3131] text-sm line-through">${item.oldPrice.toFixed(2)}</span>  
                )}  
            </div>  
        </div>  
    </div>  
);  

export default function TrendingProducts() {  
    return (  
        <div className="flex flex-col  mb-16 mt-10">  
             {/* Heading */}
             <div  className="flex flex-col items-center">
            <h1 className="navbar-text text-2xl leading-7 mt-10 mb-16 font-extrabold text-[#1a0b5b] hoverEffect">  
                Trending Products  
            </h1>  

            {/* Cards Section */}  
            <div className="flex flex-col md:flex-row  justify-center md:justify-center gap-4 px-4">  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div> 
            </div>   

             {/* Secondary Promotions Section */}  
            <div className="flex flex-wrap lg:flex-row lg:ml-20 justify-center gap-4 mt-4">  
                {/* First Promo Box */}  
                <div className="w-full max-w-[22rem] h-56 bg-[#eeeffb] flex flex-col justify-between p-4">  
                    <h1 className="text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>  
                    <h3 className="text-pink-500 underline">Shop Now</h3>  
                    <Image  src={trendingclock} alt="Discount clock" width={150} height={200} className="mt-auto" />  
                </div>  

                 {/* Second Promo Box */}  
                 <div className="w-[22rem] h-56 bg-[#eeeffb]" >
                     <h1 className="pl-4 pt-4 text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>
                     <h3 className="pl-4 leading-9 text-pink-500 underline">View Collection</h3>

                    <div className="flex items-end justify-end">
                        <Image
                            src={trendingdrawer}
                            alt="ksdlk"
                            width={250}
                            height={100}
                        />

                    </div>
                </div>

                 {/* Third Promo Box */}  
                <div className="w-full max-w-xs h-56 flex flex-col justify-between">  
                    {[...Array(3)].map((_, index) => (  
                        <div className="flex gap-4 items-center" key={index}>  
                            <div className="w-20 h-16 bg-[#eeeffb] flex justify-center items-center">  
                                <Image src={trendingclock} alt="Trending icon" width={50} height={15} />  
                            </div>  
                            <div className="flex flex-col">  
                                <h1 className="text-[#1a0b5b]">Executive Seat Chair</h1>  
                                <h3 className="text-[#1a0b5b]">\$39.00</h3>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
}
// -----------------------



// "use client";  
// import Image, { StaticImageData } from "next/image";  
// import chair from "../../public/chair.png";  
// import chair2 from "../../public/chair2.png";  
// import chair3 from "../../public/chair3.png";  
// import chair4 from "../../public/chair4.png";  
// import chair5 from "../../public/chair5.png";  
// import chair6 from "../../public/chair6.png";  
// import chair7 from "../../public/chair7.png";  
// import trendingclock from "../../public/trendingclock.png";  
// import trendingdrawer from "../../public/trendingdrawer.png";  

// interface Data2 {  
//     id: number;  
//     image: StaticImageData;  
//     name: string;  
//     price: number;  
//     oldPrice: number;  
// }  

// const data: Data2[] = [  
//     {  
//         id: 1,  
//         image: chair,  
//         name: "Sidra",  
//         price: 42.0,  
//         oldPrice: 65.0,  
//     },  
//     {  
//         id: 2,  
//         image: chair2,  
//         name: "Plastic",  
//         price: 42.0,  
//         oldPrice: 65.0,  
//     },  
//     {  
//         id: 3,  
//         image: chair3,  
//         name: "Wooden",  
//         price: 42.0,  
//         oldPrice: 65.0,  
//     },  
//     {  
//         id: 4,  
//         image: chair7,  
//         name: "Foamic",  
//         price: 42.0,  
//         oldPrice: 65.0,  
//     },  
// ];  

// const Card = ({ item }: { item: Data2 }) => (  
//     <div className="w-full max-w-xs bg-white mb-8 shadow-md">  
//         {/* Image Container */}  
//         <div className="flex justify-center items-center bg-[#f7f7f7] h-60 overflow-hidden">  
//             <Image  
//                 src={item.image}  
//                 alt={`Image of ${item.name}`}  
//                 layout="responsive"  
//                 width={150}  
//                 height={150}  
//                 className="object-cover"  
//             />  
//         </div>  

//         {/* Card Details */}  
//         <div className="p-4 flex leading-6 flex-col text-center">  
//             <h3 className="text-[#151875] text-lg">{item.name}</h3>  
//             <div className="flex justify-center items-center gap-4">  
//                 <span className="text-[#151875] text-sm">${item.price.toFixed(2)}</span>  
//                 {item.oldPrice && (  
//                     <span className="text-[#ba3131] text-sm line-through">${item.oldPrice.toFixed(2)}</span>  
//                 )}  
//             </div>  
//         </div>  
//     </div>  
// );  

// export default function TrendingProducts() {  
//     return (  
//         <div className="flex flex-col items-center mb-16 mt-10">  
//             {/* Heading */}  
//             <h1 className="navbar-text text-2xl leading-7 mt-10 mb-16 font-extrabold text-[#1a0b5b] hoverEffect">  
//                 Trending Products  
//             </h1>  

//             {/* Cards Section */}  
//             <div className="flex flex-col md:flex-row  justify-center md:justify-center gap-4 px-4">  
//                 {data.map((item) => (  
//                     <Card item={item} key={item.id} />  
//                 ))}  
//             </div>  

//             {/* Second Line Divs Container */}  
//             <div className="flex flex-col md:flex-row md:gap-4 mt-10 w-full max-w-4xl justify-center">  
//                 {/* First Promo Box */}  
//                 <div className="w-full md:max-w-xs h-56 bg-[#eeeffb] flex flex-col justify-between p-4">  
//                     <h1 className="text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>  
//                     <h3 className="text-pink-500 underline">Shop Now</h3>  
//                     <Image src={trendingclock} alt="Discount clock" width={150} height={200} className="mt-auto" />  
//                 </div>  

//                 {/* Second Promo Box */}  
//                 <div className="w-full md:max-w-xs h-56 bg-[#eeeffb] flex flex-col justify-between p-4">  
//                     <h1 className="text-[#1a0b5b] font-bold text-lg">23% off in all products</h1>  
//                     <h3 className="text-pink-500 underline">View Collection</h3>  
//                     <Image src={trendingdrawer} alt="Discount drawer" width={250} height={100} className="mt-auto" />  
//                 </div>  

//                 {/* Third Promo Box */}  
//                 <div className="w-full md:max-w-md h-56 flex flex-col justify-between">  
//                     {[...Array(3)].map((_, index) => (  
//                         <div className="flex gap-4 items-center" key={index}>  
//                             <div className="w-20 h-16 bg-[#eeeffb] flex justify-center items-center">  
//                                 <Image src={trendingclock} alt="Trending icon" width={50} height={15} />  
//                             </div>  
//                             <div className="flex flex-col">  
//                                 <h1 className="text-[#1a0b5b]">Executive Seat Chair</h1>  
//                                 <h3 className="text-[#1a0b5b]">\$39.00</h3>  
//                             </div>  
//                         </div>  
//                     ))}  
//                 </div>  
//             </div>  
//         </div>  
//     );  
// }