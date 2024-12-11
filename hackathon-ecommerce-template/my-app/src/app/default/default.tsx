import styles from './default.module.css'; 
import Image , {StaticImageData}  from 'next/image';
import {datadefault} from "./data";
import Logoss from "../component/Logoss";
import Footer from "../component/Footer";



interface DefaultData{
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number
}


const Card = ({ item }: { item: DefaultData}) => (  
    <div className="w-60 max-w-xs bg-white shadow-md ml-[0.82rem] mb-4">  
        {/* Image Container */}  
        <div className="flex justify-center items-center p-20 w-60 bg-[#f7f7f7] h-60 overflow-hidden">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`} // Use a more descriptive alt text if relevant  
                layout="responsive"  
                width={50}  
                height={50}  
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





export default function DefualtGrid (){
    
    return (
        <div className='w-full h-full'>
            {/* Upper heading and nav bar  */}
            <div className="h-[40rem] bg-[#f6f5ff] flex flex-col  ">
                <div className='ml-52 mt-14 justify-center'>
 
                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text  ">Shop Grid Default </h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                       <h3 className={`${styles.customh3Class}`}>Home . </h3>
                       <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                       <h3 className={`${styles.customh3class2}`}> Shop Grid Default</h3>
                    </div>
                </div>


                {/* main page */}

                <div className='bg-white'>

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
        </div></div>


                    {/* main grid */}

                    <div className="flex flex-wrap justify-center md:justify-center mx-52 gap-4 px-4 mb-16">  
                {datadefault.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>
            <Logoss/>
            <Footer/>
            
                </div>
</div>
            </div>
        
    )
}
