"use client"
import Image , {StaticImageData} from "next/image";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import penBlog from "../../public/penblog.png";
import calenderBlog from "../../public/calender.png";





interface DataBlog {
    id:number,
    image:StaticImageData,
    name:string,
    date:string,
    subject:string,
    description:string,
    readmore:string
}

const datablog:DataBlog[] =[
    {
        id:1,
        name:"Sabor Ali",
        image:blog1,
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa horse taped mightly",
        readmore:"Read More",
    },
    {
        id:2,
        image:blog2,
        name:"Sur Fausia",
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa horse taped mightly",
        readmore:"Read More",
    },
    {
        id:3,
        image:blog3,
        name:"Sober Ali",
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa horse taped mightly",
        readmore:"Read More",
    },
]



const Card = ({ item }: { item: DataBlog}) => (  
    <div className="w-full max-w-xs bg-white shadow-md mb-14 ">  
        {/* Image Container */}  


        <div className="flex justify-center items-center bg-[#f7f7f7] overflow-hidden">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`} 
                layout="responsive"  
                width={150}  
                height={200}  
                className="object-cover"  
            />  
        </div>  

        {/* Card Details */}  
        <div className="p-4 flex flex-col">

            <div className="flex justify-between pr-16"> 
                <div className=" flex justify-between gap-1 ">  
                <Image  
                    src={penBlog}  
                    alt="Hanging Lamp"  
                    width={13}  
                    height={13}  
                    className="object-contain"  
                /> 
                <h3 className="text-[#151875] text-[0.85rem] leading-7">{item.name}</h3>  
                </div>   
                 
                 <div className=" flex  gap-1 ">  
                <Image  
                    src={calenderBlog}  
                    alt="Hanging Lamp"  
                    width={13}  
                    height={15}  
                    className="object-contain"  
                />  
                 <span className="text-[#151875] text-[0.85rem] leading-7">{item.date}</span>  
                </div> 
                 
            </div>
            
            <div className="flex items-start justify-between flex-col ">  
                
                {item.subject && (  
                    <span className="text-[#151875] text-lg font-semibold text-[0.75rem] leading-9 tracking-wide">{item.subject}</span>  
                )}  
                 <span className="text-[#8a8fb9] text-[0.80rem] leading-7">{item.description}</span> 
                 <span className="text-[#151875] text-[1rem] underline hover:text-pink-400 cursor-pointer leading-7">{item.readmore}</span> 
            </div>  
        </div>  
    </div>  
);

export default function LatestBlogs(){

    return (
        <div>
             {/* heading */}
             <div className="flex justify-center items-center">  
                <h1 className="navbar-text text-[1.75rem] leading-7 mt-4 mb-12 font-extrabold text-[#1a0b5b] hoverEffect">  
                    Latest Blogs
                </h1>  
            </div> 

            {/* Blog Section */}
            <div className="flex flex-wrap justify-center md:justify-center gap-4 px-4">  
                {datablog.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div> 



        {/* <Image
        src={blog1}
        alt="picture of logo"
        width={500}
        height={100} */}
        {/* /> */}
    </div>
    )
}