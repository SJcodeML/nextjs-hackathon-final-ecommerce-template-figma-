import styles from "./shoplist.module.css";
// import shoplistdata from "./data";
import Image , {StaticImageData} from "next/image";
import {shoplistdata} from "./data";
import shoplist from "../../public/shoplist/shoplist star.png";
import graystar from "../../public/shoplist/graystar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping,faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from "../component/Logoss";
import Footer from "../component/Footer";


interface ShopListData{
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number,
    description:string
}

const Card = ({ item }: { item: ShopListData}) => (  
    <div className="w-340  bg-white flex flex-row shadow-md ml-[0.82rem] mb-4">  
        {/* Image Container */}  
        <div className="flex justify-center items-center m-2 w-80 h-70  overflow-hidden">  
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
        <div className="p-4 flex flex-col leading-6 my-2">  
            <div className="flex flex-row jusify-between gap-28">
            <h3 className="text-[#151875] text-[1.25rem] font-bold">{item.name}</h3> 
            <div className="flex gap-1 justify-center items-center">
                    <span className="rounded-full bg-[#de9034] text-lg w-2 h-2 "></span>
                    <span className="rounded-full bg-[#e60584] text-lg w-2 h-2"></span>
                    <span className="rounded-full bg-[#5e37ff] text-lg w-2 h-2"></span>

                </div> 
            </div>

            <div className=" flex flex-col justify-around my-3"> 
                <div className="flex items-center gap-3 ">
                <span className="text-[#151875] text-[0.75rem]">${item.price.toFixed(2)}</span>  
                {item.oldPrice && (  
                    <span className="text-[#ba3131] text-[0.75rem] line-through">${item.oldPrice.toFixed(2)}</span>  
                )} 
                <div className="flex ">  
                    <Stars src={shoplist} />  
                 </div>
                 </div> 
                 <h3 className="text-[#9295aa] text-[0.75rem] leading-8 font-[400]  w-[26rem]">{item.description}</h3>  
                 <div className="flex flex-row gap-3 drop-shadow-md mt-2 ">
                    <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                        <FontAwesomeIcon icon={faCartShopping} className="text-[#464a6e] m-1" />
                    </span>
                    <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                    <FontAwesomeIcon icon={ faHeart} className="text-[#464a6e] m-1" />
                    </span>
                    <span className="rounded-full bg-[#ffffffff]  w-7 h-7 ">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-[#464a6e] m-1"/>
                    </span> 
                     
                    
                </div> 
                 
            </div>  
       </div> 
    </div>  
);




export const Stars = ({  
    src,  
    count = 4,  
    width = 15,  
    height = 15,  
}: {  
    src:StaticImageData | string;  // Type for src  
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




export default function ShopListComponent (){
    return (
        <div className="bg-white">
               <div className="h-[20rem] bg-[#f6f5ff] flex flex-col  justify-center ">
                <div className='ml-52 mt-14 justify-center items-center'>
 
                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text  ">Shop Grid Default </h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                       <h3 className={`${styles.customh3Class}`}>Home . </h3>
                       <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                       <h3 className={`${styles.customh3class2}`}> Shop List</h3>
                    </div>
                </div>
                </div>

                {/* lower heading and sub heading */}
                <div className='flex mt-20 text-center  '>
                         <div className="h-60 flex flex-col ml-52  ">
                
                            <h1 className="text-[1.65rem] leading-10 text-[#151875] navbar-text ">Ecommerce Aceessories and Fashion Item  </h1>
                            <h3 className="text-[#8a8fb9] font-[400]"> About 9,620 results (0.62 seconds)</h3>
                         </div>
                    

                    {/* right inputs and sorting elements */}
                    <div className='flex'>  
            <div>  
                <label htmlFor="perPage">Per Page</label>  
                <input   
                    type="tet"   
                    id="perPage"   
                    className='border-black border-2'   
                   
                />  
            </div>  

            <div>  
                <label htmlFor="sortBy" className="mr-2">Sort By:</label>  
                <select id="sortBy"  className='border-black border-2' >  
                    <option value="">Select an option</option>  
                    <option value="volvo">Volvo</option>  
                    <option value="saab">Saab</option>  
                    <option value="opel">Opel</option>  
                    <option value="audi">Audi</option>  
                </select>  
            </div>  

            <div>  
                <label htmlFor="view" className="mr-2">View:</label>  
                <input   
                    type="text"   
                    id="view"   
                    className='border-black border-2'  
                   
                />  
            </div>  
        </div>

        </div>
                
        <div className="flex flex-wrap md:flex-col justify-center  mx-[11rem] gap-4 px-4 mb-20">  
                {shoplistdata.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))} 
                </div>

                <Logo />
                <Footer/>
        </div>
    )
}