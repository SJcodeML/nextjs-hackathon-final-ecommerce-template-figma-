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
        
        <div>
        <div className='flex justify-center  items-center '>

 <div className="w-[60rem] bg-white flex  justify-center items-center shadow-2xl mt-20 mb-4"> 
    
      <div className=''> 
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
      


   
    <div className="flex justify-center items-center ml-4 m-2 w-80 h-70  overflow-hidden">
        <Image
            src={productdetails1}
            alt="dfv"
            priority
            width={150}
            height={150}
            className="object-cover"
        />
    </div>
    </div>
   


    {/* Card Details */}
    <div className="p-4 flex flex-col leading-6 my-2">
        <div className="flex flex-row jusify-between gap-28">
            <h3 className="text-[#151875] text-[1.25rem] font-bold">sdfkdkcmkmdcdc</h3>
            <div className="flex gap-1 justify-center items-center">
                <span className="rounded-full bg-[#de9034] text-lg w-2 h-2 "></span>
                <span className="rounded-full bg-[#e60584] text-lg w-2 h-2"></span>
                <span className="rounded-full bg-[#5e37ff] text-lg w-2 h-2"></span>

            </div>
        </div>

        <div className=" flex flex-col justify-around my-3">
            <div className="flex items-center gap-3 ">
                <span className="text-[#151875] text-[0.75rem]">42.00</span>

                <span className="text-[#ba3131] text-[0.75rem] line-through">65.00</span>

                <div className="flex ">
                    <Stars src={shoplist} />
                </div>
            </div>
            <h3 className="text-[#9295aa] text-[0.75rem] leading-8 font-[400]  w-[26rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, asperiores. Eos, aut.</h3>
            <div className="flex flex-row gap-3 drop-shadow-md mt-2 ">
                <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                    <FontAwesomeIcon icon={faCartShopping} className="text-[#464a6e] m-1" />
                </span>
                <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                    <FontAwesomeIcon icon={faHeart} className="text-[#464a6e] m-1" />
                </span>
                <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-[#464a6e] m-1" />
                </span>


            </div>

        </div>
    </div>
</div> 
        </div>


      {/* Description section */}

      <div className='h-[28rem] w-full bg-[#f9f8fe] my-20'>

      <div className='flex justify-center items-center flex-col'>
        <div className='flex-col justify-start w-[60rem] items-center m-8'>
            <div className='hover:underline items -center justify-start text-[#151875] my-8 font-semibold flex gap-12'>
                <h3>Description</h3>
                <h3>Additional Info</h3>
                <h3> reviews</h3>
                <h3>Video</h3>
            </div>

            {/* first block */}
            <div>
            <div className='my-8'>
                <h2 className='hover:underline text-[#151875] font-semibold '>Various Tempor</h2>
                <p className=' text-[#a9acc6] text-[0.87rem] font-semibold '> consectetur, adipisicing elit. Assumenda laudantium tenetur similique, quibusdam recusandae aspernatur culpa dolorem animi facilis ab accusamus voluptatem incidunt? Ut, ea incidunt. Aliquid illo harum quisquam.
                Consequuntur facere exercitationem, ipsum maiores rerum itaque reprehenderit minima magnam harum voluptate minus, ex aperiam sequi earum eos! Odit temporibus ea repudiandae, animi error quia accusantium quo ducimus quam a.</p>
             </div>


             <div className='my-8'>
                <h2 className='hover:underline text-[#151875] font-semibold '>More Details</h2>
                <ol className="list-disc list-inside text-[#a9acc6] text-[0.90rem] font-semibold ">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li> consectetur adipisicing elit. Ullam consectetur omnis quibusdam aut?</li>
                    <li> voluptates. Tenetur explicabo nihil beatae fuga, corporis dignissimos optio.</li>
                </ol>
             </div>
             </div>

        </div>
        
        
        </div>
{/* ------------------------------------------- */}

     {/* Related topics */}
     <div className='h-96 w-full  my-20 flex justify-center  items-center'>
    
      <div className="flex  md:flex-row  justify-center mx-[11rem] gap-1 ">  
                      {rpdata.map((item) => (  
                          <div className="w-240  bg-white flex flex-col shadow-md ml-[0.82rem] mb-4">  
                          ;         {/* Image Container */}  
                                  <div  className="flex justify-center items-center  w-[14.5rem] overflow-hidden">  
                                      <Image  
                                          key={item.id}
                                          src={item.image}  
                                          alt={`Image of ${item.name}`} // Use a more descriptive alt text if relevant  
                                          priority  
                                          width={300}  
                                          height={300}  
                                          className="object-cover"  
                                      />  
                                  </div>  
                          
                                  {/* Card Details */}  
                                  <div className="p-4 flex flex-col leading-6 my-2">  
                                      <div className="flex flex-row jusify-between gap-28">
                                      <h3 className="text-[#151875] text-[1.25rem] font-bold">{item.name}</h3> 
                                      
                                      </div>
                          
                                      <div className=" flex flex-col justify-around my-3"> 
                                          <div className="flex items-center gap-3 ">
                                          <span className="text-[#151875] text-[0.75rem]">${item.price.toFixed(2)}</span>  
                                          
                                          <div className="flex ">  
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
        </div>
         
    )
}





