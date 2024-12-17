
import Image,{StaticImageData} from "next/image";
import sale2 from "../../public/blog/blogsale2.png";
import sale3 from "../../public/blog/blogsale3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight,faEnvelope,faLock,faComment} from '@fortawesome/free-solid-svg-icons';
import offer1 from "../../public/blog/blog.png";
import offer2 from "../../public/blog/blogoffer.png";
import offer3  from "../../public/blog/blogoffer3.png";
import offer4  from "../../public/blog/blogrecent.png";
import graystar from "../../public/shoplist/graystar.png";
import shoplist from "../../public/shoplist/shoplist star.png";
import { MyButton } from "../MyAccount/Loginform";
import React from 'react'; 




interface BlogPageData {
    id:number,
    name:string,
    image:StaticImageData,
    description:string,
    date:string
}
const Sblogpagedata :BlogPageData[]=[
   
    {
        id:2,
        name:"Sapien ac",
        image:sale2 ,
        description:"Viverra pulvinar et enim ndksfkj fjdjkhfsd kjdkjsdfkl kjdfkjsdkf jdkfjsdkj fskdjfksldjf dkfjkd.",
        date:"Aug 09 2020"
    },
    {
        id:3,
        name:"Augue conva",
        image:sale3 ,
        description:"Mattis varius donec fdsfd fskdjfklj ksdjfksjdkljf kjdfkjsdklfj jsdkfjskldjf ksdjfklsjdflk",
        date:"Aug 09 2020"
    },
   
]




interface OBlogPageData {
    id:number,
    image:StaticImageData,
    name:string,
    newprice:number,
    oldprice:number
}
const Oblogpagedata :OBlogPageData[]=[
    {
        id:1,
        image:offer1 ,
        name:"Quam sed",
        newprice:32.00,
        oldprice:56.00
        
    },
    {
        id:2,
        image:offer2  ,
        name:"Quam sed",
        newprice:32.00,
        oldprice:56.00
    },
    {
        id:3,
        image:offer3  ,
        name:"Quam sed",
        newprice:32.00,
        oldprice:56.00
        
    },
    {
        id:4,
        image:offer4  ,
        name:"Quam sed",
        newprice:32.00,
        oldprice:56.00
        
    },
]


export const Stars = ({  
    src,  
    count = 4,  
    width = 17,  
    height = 13,  
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
        width={width}
        height={height}
        />


 </div>
 </div>
    );  
};  


export default function SingleBlog (){
    return (
        <div>
            {/* previous or next navigation bar  */}

            <div className="w-full h-10 bg-[#f7f8fb] text-[#8a8fb9] flex items-center justify-between px-6 border-black">
                <h1>
                <FontAwesomeIcon icon={faArrowLeft}/>
                Previous Post
                </h1>

                <h1>
                Previous Post
                <FontAwesomeIcon icon={faArrowRight}/>
                
                </h1>      
            </div>
            {/* -------- */}




            {/* four pictures two paragraph div */}
            <div>

                {/* card secction */}
                               <div className=" flex justify-between   border-2" >
                               
                                   {Oblogpagedata.map((item)=>(
                                  <div className=" mb-4  ">
                                    <Image 
                                    src={item.image}
                                   alt=""
                                   width ={300}
                                   height={300}
                                   />
                                   
                                   <h3 className="text-black text-[1rem] leading-8 ">{item.name}</h3>
                                   <div className="flex  gap-8">
                                   <h4 className="text-[#151875] text-[0.85rem]">{`${item.newprice.toFixed(2)}`}</h4>
                                   <h4 className="text-pink-500 text-[0.85rem] line-through">{`${item.oldprice.toFixed(2)}`}</h4>
                                   <div className="flex ">  
                                        <Stars src={shoplist} />  
                                             </div>
                                   </div>
                                  </div>))}
                               </div>

                {/* Paragraphs */}

                <div className="text-[#8a8fb9] text-[0.95rem] leading-6 space-y-8 py-8 pt-4 ">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, sapiente, tenetur repellendus assumenda recusandae dolore sed modi possimus placeat sequi ut natus rem non. Aperiam officia tenetur deserunt illum nobis!
                Earum architecto, dignissimos obcaecati consequatur, est quos soluta autem sed incidunt quam error quod? Tenetur fugit, esse illo deserunt officia quos porro temporibus veniam aliquam facere aut repellendus molestias sit.
                Ullam unde obcaecati quam! Commodi impedit obcaecati expedita recusandae nostrum. Sed rerum obcaecati minima vitae expedita commodi rem cupiditate impedit molestias eaque explicabo neque quam, distinctio provident recusandae atque similique!
                Molestias quibusdam voluptatibus, consectetur, autem commodi praesentium ab officiis ratione eaque architecto rem dolore quas impedit amet iusto illum, dolor minima accusantium minus et? Maxime illo est perspiciatis dolor iure.lo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum numquam aspernatur distinctio reiciendis harum, cumque pariatur enim placeat cum, delectus ea excepturi natus aperiam laudantium officia quia vero impedit.
                Molestias reprehenderit vitae beatae qui, facilis dignissimos recusandae doloribus, tempore doloremque, corporis ipsa natus suscipit aut fugit esse at modi cumque sunt libero. Fugit quod, quam sunt temporibus perferendis itaque.
                Ea harum amet provident facere nobis, laborum dicta dolorum quo, praesentium incidunt aspernatur eius omnis veritatis nemo consequuntur dolor impedit, odio doloribus quisquam quidem vitae esse? Vel aperiam aspernatur quos!
                Cumque, itaque eos? Fuga natus reprehenderit saepe placeat id in, veritatis ut magni suscipit numquam distinctio perspiciatis soluta! Cupiditate eaque iure velit quae nostrum cumque, alias harum laudantium. Obcaecati, maiores.</p>
                </div>
            </div>
                {/* ----------------- */}
                   

                   {/* two pics and one paragraph section  */}

                <div>

                {/* card secction */}
                               <div className=" flex justify-between   border-2" >
                               {Oblogpagedata.slice(0, 2).map((item) => ( // Modify this line to slice the first 2 items  
            <div key={item.id} className="mb-4">  
                <Image  
                    src={item.image}  
                    alt=""  
                    width={300}  
                    height={300}  
                />  
                
                 
                </div>  
             
        ))} 
                               </div>

                {/* Paragraphs */}

                <div className="text-[#8a8fb9] text-[0.95rem] leading-6 space-y-8 py-8 pt-4 ">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, sapiente, tenetur repellendus assumenda recusandae dolore sed modi possimus placeat sequi ut natus rem non. Aperiam officia tenetur deserunt illum nobis!
                Earum architecto, dignissimos obcaecati consequatur, est quos soluta autem sed incidunt quam error quod? Tenetur fugit, esse illo deserunt officia quos porro temporibus veniam aliquam facere aut repellendus molestias sit.
                Ullam unde obcaecati quam! Commodi impedit obcaecati expedita recusandae nostrum. Sed rerum obcaecati minima vitae expedita commodi rem cupiditate impedit molestias eaque explicabo neque quam, distinctio provident recusandae atque similique!
                Molestias quibusdam voluptatibus, consectetur, autem commodi praesentium ab officiis ratione eaque architecto rem dolore quas impedit amet iusto illum, dolor minima accusantium minus et? Maxime illo est perspiciatis dolor iure.lo</p>
    
                </div>
                




            </div>
            





        {/* same 2 cards as in ri8 section */}
           <div className="mb-20  ">
                           
                              {Sblogpagedata.map((item)=>(
                               
                              <div className="flex gap-4 border-2 p-4 m-8 shadow-2xl">
                                 
                                <Image 
                                src={item.image}
                               alt=""
                               width ={150}
                               height={150}
                               />
                               <div className="leading-10">
                               <h1 className="text-[#151875] text-2xl font-semibold">{item.name}</h1>
                               <h4 className="text-[#a3a2b6] text-[0.85rem]">{item.date}</h4>
                               <h3 className="text-[#a3a2b6] text-[0.85rem]">{item.description}</h3>
                              
                               </div>
                              </div>))} 
                           </div>
                           {/* ------------------- */}



                           {/* email form */}
        <div className="flex flex-col justify-center items-center">  
            <div className="m-20 w-[30rem] h-[30rem]   text-[#8a8fb9]">  
                <div className="mx-10 my-12 ">  
                  
                    <form className="flex flex-col gap-4">  
                        
                        <div className="relative  w-full ">  
                            <FontAwesomeIcon icon={faEnvelope} className="absolute top-2 left-2 text-gray-500" />  
                            <input  
                                type="text"  
                                name="email"  
                                placeholder="Email Address"  
                                className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
                                required  
                            />  
                        </div >  
                        <div className="relative ">  
                            <FontAwesomeIcon icon={faLock} className="absolute top-2 left-2 text-gray-500" />  
                            <input  
                                type="password"  
                                name="password"  
                                placeholder="Password"  
                                className="border-[#8a8fb9] border-2 h-9 pl-8 pr-2 w-full"  
                                required  
                            />  
                        </div>  
                       
                        <div className="relative col-span-2">  
                            <FontAwesomeIcon icon={faComment} className="absolute top-1 left-3 text-gray-500" />  
                            <textarea  
                                name="comment"  
                                placeholder="Type your comment here..."  
                                className="border-[#8a8fb9] border-2 h-36 pl-10 pr-2 w-full resize-none" // Adjust height and padding  
                                required  
                            />  
                        </div>  
                        <h3 className="text-[#9096b2] text-[0.75rem]">Save my name, email, and website in this browser for the next time I comment.</h3>  
                        <MyButton label="Continue Shipping" />  
                       
                    </form>  
                </div>  
            </div>  
        </div>  
  {/* --------------- */}

export default LoginForm;
    
    
                


        </div>
    )
}