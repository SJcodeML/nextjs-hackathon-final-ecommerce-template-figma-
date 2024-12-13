// import styles from "./shoplist.module.css";
// import shoplistdata from "./data";
import Image , {StaticImageData} from "next/image";




interface ShopListData{
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number
}


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
        </div></div>




        </div>
    )
}