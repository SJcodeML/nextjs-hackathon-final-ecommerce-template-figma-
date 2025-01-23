import { MyButton } from "../Faq/Faq";
import Image from "next/image";
import contactus from "../../public/contactus.png";

// export default function ContactUs (){
//     return (
//         <div className="p-32 px-60">
//           {/* upper part */}

//                <div className="flex justify-between">

//             <div className="w-96 space-y-4">
//             <h1 className="text-[#151875] text-2xl font-semibold">Information About us</h1>
//             <p className="text-[#8a8fb9] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque numquam. Eligendi debitis culpa quos incidunt animi, dolores dolore explicabo molestiae necessitatibus minus distinctio in qui id fugit voluptatum illo?</p>
//             <div className="flex gap-1 justify-start items-center  ">
//                     <span className="rounded-full bg-[#de9034] text-lg w-5 h-5 "></span>
//                     <span className="rounded-full bg-[#e60584] text-lg w-5 h-5"></span>
//                     <span className="rounded-full bg-[#5e37ff] text-lg w-5 h-5"></span>
//                 </div> 
//             </div>
             



//             <div className="w-[30rem] space-y-4">
//             <h1 className="text-[#151875] text-2xl font-semibold">Contact Way</h1>
//             <div >
//                 <ol className="grid grid-rows-2 grid-cols-2 gap-7 text-[0.85rem] ">
//                     <li className=" flex items-center space-y-2 text-[#8a8fb9]">
//                     <span className="rounded-full bg-[#de9034] text-lg w-8 h-8 mr-2"></span>
//                     Tel: 877-67-88-99<br/>E-Mail:shop@store.com</li>
//                         <li className=" flex items-center space-y-2 text-[#8a8fb9]">
//                         <span className="rounded-full bg-[#e60584] text-lg w-8 h-8 mr-2"></span>For over 24hr <br/> Support Forum</li>
//                         <li className=" flex items-center space-y-2 text-[#8a8fb9]">
//                         <span className="rounded-full bg-[#5e37ff] text-lg w-8 h-8 mr-2"></span>20 Margaret st, London<br/>Great britain,3NM98-LK</li>
//                         <li className=" flex items-center space-y-2 text-[#8a8fb9]">
//                         <span className="rounded-full bg-[#1be982] text-lg w-8 h-8 mr-2 "></span>Free standard shipping<br/>on all orders.</li>
//                 </ol>
//             </div>
//              </div>
//                </div>


//                {/* lower part */}
//                <div className="flex justify-between">
                 
//                 {/* Get in touch form */}
//                  <div>
//                     <h1>Get In Touch</h1>
//                     <div className="flex flex-col ">  
//                                 <div className=" w-[30rem] h-[30rem] text-[#8a8fb9]">  
//                                     <div className=" my-12 ">  
                                      
//                                         <form className="flex flex-col gap-4">  
                                            
//                                             <div className="relative  w-full ">  
                                                 
//                                                 <input  
//                                                     type="text"  
//                                                     name="email"  
//                                                     placeholder="Email Address"  
//                                                     className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
//                                                     required  
//                                                 />  
//                                             </div >  
//                                             <div className="relative ">  
                                                
//                                                 <input  
//                                                     type="password"  
//                                                     name="password"  
//                                                     placeholder="Password"  
//                                                     className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
//                                                     required  
//                                                 />  
//                                             </div>  
                                           
//                                             <div className="relative col-span-2">  
                                               
//                                                 <textarea  
//                                                     name="comment"  
//                                                     placeholder="Type your comment here..."  
//                                                     className="border-[#8a8fb9] border-2 h-36 pl-10 pr-2 w-full resize-none" // Adjust height and padding  
//                                                     required  
//                                                 />  
//                                             </div>  
//                                             <h3 className="text-[#9096b2] text-[0.75rem]">Save my name, email, and website in this browser for the next time I comment.</h3>  
//                                             <MyButton label="Send Email" />  
                                           
//                                         </form>  
//                                     </div>  
//                                 </div>  
//                             </div> 
//                  </div>

//                  {/* corner right bottom pic  */}
//                  <div>
//                     <Image
//                     src={contactus}
//                     alt=""
//                     width={500}
//                     height={500}
//                     />
//                  </div>
 
   
   



//                </div>



//           {/* ------------- */}






//         </div>
//     )
// }






export default function ContactUs() {  
    return (  
        <div className="p-8 md:p-8  lg:px-36 lg:py-28">  
            {/* upper part */}  
            <div className="flex flex-col md:gap-5 md:flex-row justify-between">  
                <div className="w-full md:w-1/2 lg:w-96 space-y-4">  
                    <h1 className="text-[#151875] text-2xl font-semibold">Information About Us</h1>  
                    <p className="text-[#8a8fb9]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque numquam. Eligendi debitis culpa quos incidunt animi, dolores dolore explicabo molestiae necessitatibus minus distinctio in qui id fugit voluptatum illo?</p>  
                    <div className="flex gap-1 justify-start items-center">  
                        <span className="rounded-full bg-[#de9034] text-lg w-5 h-5"></span>  
                        <span className="rounded-full bg-[#e60584] text-lg w-5 h-5"></span>  
                        <span className="rounded-full bg-[#5e37ff] text-lg w-5 h-5"></span>  
                    </div>  
                </div>  

                <div className="w-full md:w-1/2 lg:w-[30rem] space-y-4 ">  
                    <h1 className="text-[#151875] text-2xl font-semibold pt-8 md:pt-0">Contact Way</h1>  
                    <div>  
                        <ol className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[0.85rem]">  
                            <li className="flex items-center space-y-2 text-[#8a8fb9]">  
                                <span className="rounded-full bg-[#de9034] text-lg w-8 h-8 mr-2"></span>  
                                Tel: 877-67-88-99<br />E-Mail: shop@store.com  
                            </li>  
                            <li className="flex items-center space-y-2 text-[#8a8fb9]">  
                                <span className="rounded-full bg-[#e60584] text-lg w-8 h-8 mr-2"></span>  
                                For over 24hr <br /> Support Forum  
                            </li>  
                            <li className="flex items-center space-y-2 text-[#8a8fb9]">  
                                <span className="rounded-full bg-[#5e37ff] text-lg w-8 h-8 mr-2"></span>  
                                20 Margaret St, London<br />Great Britain, 3NM98-LK  
                            </li>  
                            <li className="flex items-center space-y-2 text-[#8a8fb9]">  
                                <span className="rounded-full bg-[#1be982] text-lg w-8 h-8 mr-2"></span>  
                                Free standard shipping<br />on all orders.  
                            </li>  
                        </ol>  
                    </div>  
                </div>  
            </div>  

            {/* lower part */}  
            <div className="flex flex-col md:flex-row justify-between mt-8">  
                {/* Get in touch form */}  
                <div className="w-full md:w-1/2">  
                    <h1 className="text-lg font-semibold">Get In Touch</h1>  
                    <div className="flex flex-col">  
                        <div className="w-full h-[30rem] text-[#8a8fb9]">  
                            <div className="my-12">  
                                <form className="flex flex-col gap-4">  
                                    <div className="relative w-full">  
                                        <input  
                                            type="text"  
                                            name="email"  
                                            placeholder="Email Address"  
                                            className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
                                            required  
                                        />  
                                    </div>  
                                    <div className="relative">  
                                        <input  
                                            type="password"  
                                            name="password"  
                                            placeholder="Password"  
                                            className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
                                            required  
                                        />  
                                    </div>  
                                    <div className="relative">  
                                        <textarea  
                                            name="comment"  
                                            placeholder="Type your comment here..."  
                                            className="border-[#8a8fb9] border-2 h-36 pl-10 pr-2 w-full resize-none"  
                                            required  
                                        />  
                                    </div>  
                                    <h3 className="text-[#9096b2] text-[0.75rem]">Save my name, email, and website in this browser for the next time I comment.</h3>  
                                    <MyButton label="Send Email" />  
                                </form>  
                            </div>  
                        </div>  
                    </div>  
                </div>  

                {/* corner right bottom pic */}  
                <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">  
                    <Image  
                        src={contactus}  
                        alt=""  
                        width={500}  
                        height={500}  
                        className="max-w-full h-auto"  
                    />  
                </div>  
            </div>  
        </div>  
    );  
}