import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Image, {StaticImageData} from "next/image";
import recent1 from "../../public/blog/blogrecent.png";
import recent2 from "../../public/blog/blogrecent2.png";
import recent3 from "../../public/blog/blogrecent3.png";
import recent4 from "../../public/blog/blogrecent4.png";
import sale1 from "../../public/blog/blogsale.png";
import sale2 from "../../public/blog/blogsale2.png";
import sale3 from "../../public/blog/blogsale3.png";
import offer1 from "../../public/blog/blog.png";
import offer2 from "../../public/blog/blogoffer.png";
import offer3  from "../../public/blog/blogoffer3.png";
import offer4  from "../../public/blog/blogrecent.png";
import Link from "next/link";
import blogfb from "../../public/blog/blogfollowfb.png";
import bloginsta from "../../public/blog/bolgfollowinsta.png";
import blogtwitter from "../../public/blog/follwblogtwitter.png";


interface BlogPageData {
    id:number,
    image:StaticImageData,
    description:string,
    date:string
}
const Rblogpagedata :BlogPageData[]=[
    {
        id:1,
        image:recent1 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:2,
        image:recent2 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:3,
        image:recent3 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:4,
        image:recent4 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
]


const Sblogpagedata :BlogPageData[]=[
    {
        id:1,
        image:sale1 ,
        description:"Elit ornare in enim mauris.",
        date:"Aug 09 2020"
    },
    {
        id:2,
        image:sale2 ,
        description:"Viverra pulvinar et enim.",
        date:"Aug 09 2020"
    },
    {
        id:3,
        image:sale3 ,
        description:"Mattis varius donec fdsfd",
        date:"Aug 09 2020"
    },
   
]

interface PriceRange {  
    min: number,  
    max: number,  
} 

interface OBlogPageData {
    id:number,
    image:StaticImageData,
    description:string,
    price1:PriceRange
    
}


const Oblogpagedata :OBlogPageData[]=[
    {
        id:1,
        image:offer1 ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
    {
        id:2,
        image:offer2  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
    },
    {
        id:3,
        image:offer3  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
    {
        id:4,
        image:offer4  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
]


export default function BlogPage ( ) {
    return (
        <div>
            {/* search bar */}
             <div>
                <h1 className="text-[#151875] text-2xl font-semibold">Search</h1>
                <div  className="border-[#bdbdd8] border-2  w-64 h-10 flex justify-around items-center " >
                <input type="text" placeholder="Search for Posts" />
                <FontAwesomeIcon icon={faSearch} className="text-[#bdbdd8] "/>
               
                </div>


                {/* Catoegories */}
                
                 <div className="mb-20">
                <h1 className="text-[#151875] text-2xl font-semibold">Categories</h1>
                <div className="text-[#3f509e] font-[0.75rem]  h-28 leading-[7] grid grid-rows-3 grid-cols-2 w-80  grid-flow-col gap-1">
                <h3 className="">Women(21)</h3>
               <h3>Women(21)</h3>
               <h3>Women(21)</h3>
               <h3>Women(21)</h3>
               <h3>Women(21)</h3>
               <h3>Women(21)</h3>
                </div></div>

                {/* Recent products Post */}

                <div className="mb-20">
                <h1 className="text-[#151875] text-2xl font-semibold">recent Post</h1>
                    {Rblogpagedata.map((item)=>(
                   <div className="flex gap-4  ">
                     <Image 
                     src={item.image}
                    alt=""
                    width ={150}
                    height={150}
                    />
                    <div className="mt-3">
                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>
                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>
                    </div>
                   </div>))}
                </div>

                {/* Sale Products */}

                <div className="mb-20">
                <h1 className="text-[#151875] text-2xl font-semibold">Sale Products</h1>
                   {Sblogpagedata.map((item)=>(
                   <div className="flex gap-4">
                     <Image 
                     src={item.image}
                    alt=""
                    width ={150}
                    height={150}
                    />
                    <div className="mt-3">
                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>
                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>
                    </div>
                   </div>))} 
                </div>

                {/* Offer Producs Posts */}
                <div className="mb-20 w-52 " >
                <h1 className="text-[#151875] text-2xl font-semibold mb-7">Offer Product</h1>
                    {Oblogpagedata.map((item)=>(
                   <div className=" w-36 mb-4">
                     <Image 
                     src={item.image}
                    alt=""
                    width ={150}
                    height={150}
                    />
                    <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#3f509e] text-[1rem] leading-8 ">{item.description}</h3>
                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{`$${item.price1.min.toFixed(2)} - $${item.price1.max.toFixed(2)}`}</h4>
                    {/* <h4 className="text-[#8a8fb9] text-[0.85rem]">{`${item.price2.toFixed(2)}`}</h4> */}
                    </div>
                   </div>))}
                </div>
                {/* tags Section */}
                  
                   <div>
                   <h1 className="text-[#151875] text-2xl font-semibold">Tags</h1>
                   <div className="mb-20 text-[#151875] text-[1rem] font-semibold underline hover:text-pink-500 grid grid-cols-3 grid-rows-2 w-96 gap-5">

                         <h3>General</h3>
                         <h3>Atsanil</h3>
                         <h3>Insas</h3>
                         <h3>Bibsaas</h3>
                         <h3>Nutella</h3>
                   </div>
                   </div>


                   {/* Follow section */}
                   <div className=" gap-3 ">
                   <h1 className="text-[#151875] text-2xl font-semibold mb-7">Follow</h1>
                   <div className="flex gap-3">
                   <Link href="https://www.facebook.com/login.php" passHref>  
                <Image  
                    src={blogfb} // Replace with your image path  
                    alt="Description of the image"  
                    width={30} // Set the desired width  
                    height={30} // Set the desired height  
                />  
            </Link> 
             

            <Link href="https://www.facebook.com/login.php" passHref>  
                <Image  
                    src={bloginsta} // Replace with your image path  
                    alt="Description of the image"  
                    width={30} // Set the desired width  
                    height={30} // Set the desired height  
                />  
            </Link> 


            <Link href="https://www.facebook.com/login.php" passHref>  
                <Image  
                    src={blogtwitter} // Replace with your image path  
                    alt="Description of the image"  
                    width={30} // Set the desired width  
                    height={30} // Set the desired height  
                />  
            </Link> 
            </div>
                   </div>

                   {/* Numeric page Navigation bar  */}

                   <div className="flex justify-center items-center">
                    <div className="w-10 flex justify-center items-center h-10 border-[#e0d3f5] text-[#e0d3f5] hover:bg-pink-400 hover:text-white border-2 m-5">1</div>
                    <div className="w-10 flex justify-center items-center h-10 border-[#e0d3f5] text-[#e0d3f5] hover:bg-pink-400 hover:text-white border-2 m-5">2</div>
                    <div className="w-10 flex justify-center items-center h-10 border-[#e0d3f5] text-[#e0d3f5] hover:bg-pink-400 hover:text-white border-2 m-5">3</div>
                    <div className="w-10 flex justify-center items-center h-10 border-[#e0d3f5] text-[#e0d3f5] hover:bg-pink-400 hover:text-white border-2 m-5">4</div>
                   </div>



                
                
                </div>
                 
           

</div>
       
    )
}