import styles from "./shopleft.module.css";
// import shoplistdata from "./data";
import Image , {StaticImageData} from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';




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
 
                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text  ">ShopLeft SideBar </h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                       <h3 className={`${styles.customh3Class}`}>Home . </h3>
                       <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                       <h3 className={`${styles.customh3class2}`}> ShopLeft Side Bar</h3>
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

               {/* main page  */}
               <div className="m-40">
                  {/* left side bar  */}
                <div>
                  <h1 className="text-[#151875] text-[1.15rem] underline ">Product Brand</h1>
                  <ol>
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  

                  <div>
                  <h1 className="text-[#151875] text-[1.15rem]">Product Brand</h1>
                  <ol>
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  

                  <div>
                  <h1 className="text-[#151875] text-[1.15rem]">Product Brand</h1>
                  <ol className="list-inside">
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  

                  <div>
                  <h1 className="text-[#151875] text-[1.15rem]">Product Brand</h1>
                  <ol>
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  

                  <div>
                  <h1 className="text-[#151875] text-[1.15rem]">Product Brand</h1>
                  <ol>
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  

                   <div className="flex items-center  mt-2 md:mt-0">  
                          <input type="text" className="w-40 md:w-52 h-8 border-2 border-slate-300 bg-[#ffffff] " />  
                          <div className="w-8 h-8 bg-pink-600 flex items-center justify-center ">  
                                     <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
                          
                          </div>  
                      </div> 


                  <div>
                  <h1 className="text-[#151875] text-[1.15rem]">Product Brand</h1>
                  <ol>
                    <li>Coaster Furniture</li>
                    <li>Fusiion Dot High Fashion</li>
                    <li>Unique Furniture Restor</li>
                    <li>Dream Furniture Flipping</li>
                    <li>Young Repurposed</li>
                    <li>Green DIY Furnitue</li>
                  </ol>
                  </div>  


               





               </div>


        </div>
    )
}