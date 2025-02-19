import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import productdetails1 from "../../public/productdetails1.png";
import productdetails2 from "../../public/productdetails2.png";
import productdetails3 from "../../public/productdetails3.png";
import productdetails4 from "../../public/productdetails4.png";
import Image, { StaticImageData } from "next/image";
import graystar from "../../public/shoplist/graystar.png";
import shoplist from "../../public/shoplist/shoplist star.png";
import Logo from "../component/Logoss";



export  const MyButton = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'

        >
            {label}
        </button>
    );
};



interface PrData {
    id:number,
    image:StaticImageData
}
const prdata:PrData[]=[
    {
        id:1,
        image:productdetails3
    },
    {
        id:2,
        image:productdetails4
    },
    {
        id:3,
        image:productdetails2
    }
]





const YourComponent = () => {  
    return (  
        <div className=''>  
            {prdata.map((item) => (  
                <Image  
                    key={item.id} // Use the unique ID as the key for React  
                    src={item.image}  
                    alt={`Image ${item.id}`} // Change it to a relevant alt text  
                    priority 
                    width={150}  
                    height={150}  
                    className="object-cover my-5 "  
                />  
            ))}  
        </div>  
    );  
};  

interface RpData {
    id:number,
    name:string,
    image:StaticImageData,
    price:number
}
const rpdata:RpData[]=[
    {
        id:1,
        name:"sdfnkdjnc",
        image:productdetails3,
        price:42.00
    },
    {
        id:2,
        name:"sdfnkdjnc",
        image:productdetails4,
        price:42.00
    },
    {
        id:3,
        name:"sdfnkdjnc",
        image:productdetails2,
        price:42.00
    },
    {
        id:4,
        name:"sdfnkdjnc",
        image:productdetails2,
        price:42.00
    }
]

export const Stars = ({
    src,
    count = 4,
    width = 15,
    height = 15,
}: {
    src: StaticImageData | string;  // Type for src  
    count?: number; // Optional type for count  
    width?: number; // Optional type for width  
    height?: number; // Optional type for height  
}) => {
    return (
        <div className="flex ">
            <div style={{ display: 'flex' }}>
                {Array.from({ length: count }, (_, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt="star"
                        width={width}
                        height={height}
                    />
                ))}
            </div>
            <div>
                <Image
                    src={graystar}
                    alt=""
                    width={13}
                    height={15}
                />


            </div>
        </div>
    );
};





export default function ProductDetails() {
    return (
        
        <div >
       <div className='flex  justify-center items-center mx-3'>  
    <div className="w-full max-w-[60rem] bg-white flex justify-center flex-col md:flex-row items-center shadow-2xl mt-20 mb-4">  
        <div className="flex flex-col-reverse p-2 md:flex-row w-full">  
            <div className="gap-2 hidden lg:block md:flex-col md:ml-4 mt-4 md:mt-0 overflow-hidden w-full">  
                {prdata.map((item) => (  
                    <Image  
                        key={item.id}  
                        src={item.image}  
                        alt={`Image ${item.id}`}  
                        priority  
                        width={150}  
                        height={150}  
                        className="object-cover my-2 md:my-4 transition-transform duration-200 hover:scale-105" // Added transitions and hover state  
                    />  
                ))}  
            </div>  
            <div className="flex justify-center items-center w-full md:w-auto">  
                <Image  
                    src={productdetails1}  
                    alt="Product Detail"  
                    priority  
                    width={450}  
                    height={600}  
                    className="object-cover md:h-[32rem] h-[22rem] w-full md:w-[52rem] py-2 transition-transform duration-200  " // Adjusted width for small screens  
                />  
            </div>  
        </div>  

        {/* Card Details */}  
        <div className="p-4 flex flex-col leading-6 my-2 w-full">  {/* Ensure full width for smaller screens */}  
            <div className="flex gap-2 md:flex-row justify-between  md:gap-20"> {/* Stack in column on small screens */}  
                <h3 className="text-[#151875] text-[1.25rem] font-bold">sdfkdkcmkmdcdc</h3>  
                <div className="flex gap-1 justify-center items-center">  
                    <span className="rounded-full bg-[#de9034] w-2 h-2"></span>  
                    <span className="rounded-full bg-[#e60584] w-2 h-2"></span>  
                    <span className="rounded-full bg-[#5e37ff] w-2 h-2"></span>  
                </div>  
            </div>  

            <div className="flex flex-col justify-around my-3">  
                <div className="flex items-center gap-3 ">  
                    <span className="text-[#151875] text-[0.75rem]">42.00</span>  
                    <span className="text-[#ba3131] text-[0.75rem] line-through">65.00</span>  
                    <div className="flex ">  
                        <Stars src={shoplist} />  
                    </div>  
                </div>  
                <h3 className="text-[#9295aa] text-[0.75rem] leading-8 font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, asperiores. Eos, aut.</h3>  
                <div className="flex flex-row gap-3 drop-shadow-md mt-2">  
                    <span className="rounded-full bg-[#ffffff] w-7 h-7">  
                        <FontAwesomeIcon icon={faCartShopping} className="text-[#464a6e] m-1" />  
                    </span>  
                    <span className="rounded-full bg-[#ffffff] w-7 h-7">  
                        <FontAwesomeIcon icon={faHeart} className="text-[#464a6e] m-1" />  
                    </span>  
                    <span className="rounded-full bg-[#ffffff] w-7 h-7">  
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-[#464a6e] m-1" />  
                    </span>  
                </div>  
            </div>  
        </div>  
    </div>   
</div>

      {/* Description section */}
      <div className='h-[auto] w-full bg-[#f9f8fe] my-20  px-12'> {/* Adjusted height for flexibility */}  
    <div className='flex justify-center items-center flex-col'>  
        <div className='flex flex-col w-full max-w-6xl justify-start items-center m-8'> {/* Set a max width for larger screens */}  
            <div className=' items-center justify-start text-[#151875] my-8 font-semibold flex gap-6 flex-wrap '> {/* Updated gap & flex-wrap */}  
                <h3 className="text-lg hover:underline ">Description</h3>  
                <h3 className="text-lg hover:underline">Additional Info</h3>  
                <h3 className="text-lg hover:underline">Reviews</h3>  
                <h3 className="text-lg hover:underline">Video</h3>  
            </div>  

            {/* First Block */}  
            <div className="w-full lg:px-14">  
                <div className='my-8 '>  
                    <h2 className='hover:underline text-[#151875] font-semibold text-xl'>Various Tempor</h2>  
                    <p className='text-[#a9acc6] text-[0.87rem] font-semibold'>  
                        consectetur, adipisicing elit. Assumenda laudantium tenetur similique, quibusdam recusandae aspernatur culpa dolorem animi facilis ab accusamus voluptatem incidunt?  
                        Ut, ea incidunt. Aliquid illo harum quisquam. Consequuntur facere exercitationem, ipsum maiores rerum itaque reprehenderit minima magnam harum voluptate minus,  
                        ex aperiam sequi earum eos! Odit temporibus ea repudiandae, animi error quia accusantium quo ducimus quam a.  
                    </p>  
                </div>  

                <div className='my-8'>  
                    <h2 className='hover:underline text-[#151875] font-semibold text-xl'>More Details</h2>  
                    <ol className="list-disc list-inside text-[#a9acc6] text-[0.90rem] font-semibold">  
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>  
                        <li>Consectetur adipisicing elit. Ullam consectetur omnis quibusdam aut?</li>  
                        <li>Voluptates. Tenetur explicabo nihil beatae fuga, corporis dignissimos optio.</li>  
                    </ol>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>
{/* ---------------------------- */}

<div className='h-auto w-full my-20 flex justify-center items-center '> {/* Changed height to 'auto' for flexibility */}  
    <div className="flex  flex-wrap justify-center mx-4  gap-4"> {/* Adjusted margins and gap for better responsiveness */}  
        {rpdata.map((item) => (  
            <div key={item.id} className="w-full md:w-[240px] bg-white flex flex-col shadow-md mb-4"> {/* Updated to full width on small screens */}  
                {/* Image Container */}  
                <div className="flex justify-center items-center w-full overflow-hidden">  
                    <Image  
                        src={item.image}  
                        alt={`Image of ${item.name}`} // Keep descriptive alt text  
                         priority
                        width={300}  
                        height={300}  
                        className="object-cover  w-full h-auto"  
                    />  
                </div>  

                {/* Card Details */}  
                <div className="p-4 flex flex-col leading-6 my-2">  
                    <div className="flex justify-between gap-4"> {/* Updated the gap for better spacing */}  
                        <h3 className="text-[#151875] text-[1.25rem] font-bold">{item.name}</h3>  
                    </div>  

                    <div className="flex flex-col justify-around my-3">   
                        <div className="flex items-center gap-3 ">  
                            <span className="text-[#151875] text-[0.75rem]">${item.price.toFixed(2)}</span>  

                            <div className="flex">  
                                <Stars src={shoplist} />  
                            </div>  
                        </div>  
                    </div>  
                </div>   
            </div>  
        ))}   
    </div>  
</div>













</div>
    )}



 
 

   



                  