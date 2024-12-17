import { MyButton } from "../Faq/Faq";
import { shoppingcartdata} from "./ShoppingCart";
import Image from "next/image";
import { MyButtonGreen } from "./ShoppingCart";


export default function (){
    return (
        <div className="flex ">
            
            <div className="text-[#1d3178] text-[2rem] flex  leading-10 font-bold">
                    <h1>Hekto Demo</h1>
                    </div>
                    <h3 className="text-[#1d3178] text-[0.9rem] ">Cart/Information/Shipping/Payment</h3>
              
                                 <div className="bg-[#f4f4fc] p-12 pt-24 w-[50rem] m-20 rounded-sm">
                                 <div className="text-[#1d3178] flex justify-between text-[1.5rem]   font-bold">
                                 <h1>Contact Information</h1>
                                 <h3 className="flex justify-between text-[#253e98c3] text-[0.9rem]">Already have an account?Login</h3>
                                 </div>
                                     <div className="flex justify-between leading-10 my-3 text-[#c5cbe3] border-b-2 border-b-[#e8e6f1]">
                                     <h3>Email or mobile phone number</h3>
                                     
                                     </div> 
                                     <ol className="list-disc list-inside text-[#7e8293c2] text-[0.95rem] leading-10">
                            <li>Shipping and taxes calculated at checkout</li>
                        </ol>
                                     
                        <div className="text-[#1d3178] flex leading-10 mb-11 mt-20 text-[1.5rem]   font-bold">
                    <h1>Shipping Address</h1>
                    </div>
                         
                         <div className=" ">
                         <h3 className="flex  leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">First Name (optional)</h3>
                         <h3 className=" flex   leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">Last Name (optional)</h3>

                         </div>




                    <div className="bg-[#f4f4fc] ">
                        <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                        <h3>Address</h3>
                        
                        </div> 
                        <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                        <h3>Appartment/suit/e.t.c (optional)</h3>
                        
                        </div>

                        <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1] mb-6">
                        <h3>City </h3>
                        
                        </div>

                        <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1] mb-20">
                        <h3>Postal Code </h3>
                        
                        </div>

                        
                        
                        <MyButton label="Shopping" />
                    </div>
                                 </div>
                     <div className="flex flex-col">

                    <div className="w-[40rem] bg-white">
                                    {/* nav */}
                                    <div className="text-[#1d3178] flex text-[1.5rem] mb-7 font-bold">
                                        <h1>Product</h1>
                                        <h1 className="ml-52"> Price</h1>
                                        <h1 className="-16"> Quantity</h1>
                                        <h1 className="ml-10">Total</h1>
                    
                                    </div>
                    
                                    {/* one row of a component making it then will loop it we will have multiple rows */}
                                    <div className="" >
                    
                                        {/* pictue card */}
                    
                                        <div className="">
                                            {shoppingcartdata.map(item => (
                                                <div key={item.id} className="shopping-cart-item my-5 border-b-2 flex gap-16 border-[#e1e1e4]">
                                                    {/* Picture card */}
                                                    <div className=" flex mb-5">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={85} // set your desired width  
                                                            height={85} // set your desired height  
                                                            className="shopping-cart-image mr-3"
                                                        />
                                                        <div className="">
                                                            <h1>{item.name}</h1>
                                                            <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Color: ${item.color}`}</h3>
                                                            <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Size: ${item.size}`}</h3>
                                                        </div>
                                                    </div>
                                                    {/* price and further divs */}
                                                    <div className="flex gap-20 ">
                                                        {/* price */}
                                                        <div className="flex gap-20 text-[#15245e] ">
                                                            <span>{`$${item.price.toFixed(2)}`}</span>
                                                        </div>
                    
                                                        {/* Quantity controls */}
                                                        <div className="border-slate-950  flex">
                                                            <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center">-</div>
                                                            <div className="bg-[#f0eff2]  w-8 h-5 border-2 flex items-center justify-center">1</div>
                                                            <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center">+</div>
                                                        </div>
                    
                                                        {/* Total */}
                                                        <div className="text-[#15245e]">
                                                            <span>{`$${item.total.toFixed(2)}`}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <MyButton label="Update Cart" />
                                        <MyButton label="Clear Cart" />
                                    </div>
                    
                                </div>

                                <div className="text-[#1d3178] flex text-[1.5rem] mb-7 justify-center font-bold">
                                                    <h1>Cart Totals</h1>
                                                </div>
                                                <div className="bg-[#f4f4fc] p-4 m-9 rounded-sm">
                                                    <div className="flex justify-between leading-10 border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                                                        <h3>Subtotals:</h3>
                                                        <h3>$219.00</h3>
                                                    </div>
                                                    <div className="flex justify-between border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                                                        <h3>Totals:</h3>
                                                        <h3>$325.00</h3>
                                                    </div>
                                                    <ol className="list-disc list-inside text-[#8a91ab] text-[0.85rem] leading-10">
                                                        <li>Shipping and taxes calculated at checkout</li>
                                                    </ol>
                                                    <MyButtonGreen label="Proceed to Checkout" />
                                                </div>

                                                </div>
        </div>
    )
}