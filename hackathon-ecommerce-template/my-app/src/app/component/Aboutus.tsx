import Image from "next/image";
import aboutus from "../../public/aboutus.png";
import { MyButton } from "../Faq/Faq";
import { StaticImageData } from "next/image";
import freedelivery1 from "../../public/free-delivery1.png";
import freedelivery2 from "../../public/Group.png";
import freedelivery3 from "../../public/Group1.png";
import freedelivery4 from "../../public/cashback1.png";
import ourclientsay1 from "../../public/ourclientsay.png";
import ourclientsay2 from "../../public/ourclientsay2.png";
import ourclientsay3 from "../../public/ourclientsay3.png";



interface Data2 {
    id: number,
    image: StaticImageData,
    name: string,
    description: string

}

const data: Data2[] = [
    {
        id: 1,
        image: freedelivery1,
        name: "Free Delivery",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 2,
        image: freedelivery2,
        name: "Quality Product",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 3,
        image: freedelivery3,
        name: "24/7 Support",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },
    {
        id: 4,
        image: freedelivery4,
        name: "100% Cash Back",
        description: "Chairs can be made from wood, metal, or synthetic materials, and can be upholstered or padded in various colors and fabrics",
    },


]


const Card = ({ item }: { item: Data2 }) => (  
    <div className="flex justify-center">  
        {/* Card */}  
        <div className='flex flex-col bg-[#ffffff] drop-shadow-lg p-4 w-full max-w-[223px] mx-2 mb-12'>  
            <div className='flex justify-center items-center mb-3 h-32'>  
                <Image  
                    src={item.image}  
                    alt={`Image of ${item.name}`}  // More descriptive alt text  
                    layout="intrinsic"   
                    width={70}  
                    height={70}  
                    className="object-contain" // Ensures image maintains aspect ratio  
                />  
            </div>  
            <h3 className='text-[#151875] text-lg leading-6 font-extrabold text-center'>  
                {`${item.name}`}  
            </h3>  
            <h3 className='text-[0.765rem] text-center mt-1 font-thin text-[#8a8fb9]'>  
                {item.description}  
            </h3>  
        </div>  
    </div>  
);


interface DivData {
    id:number,
    image:StaticImageData
}

const divdata:DivData[]=[
    {
        id:1,
        image:ourclientsay1 
    },
    {
        id:1,
        image:ourclientsay2 
    },
    {
        id:1,
        image:ourclientsay3 
    },
]


export default function AboutUs (){
    return (
        <div className="">
              

              {/* first div know about our ecommerce business */}

              <div className="flex gap-x-3 justify-center items-center px-64 pt-32 mb-6" >
                 <div className="bg-[#151875] w-96 rounded-sm h-40 relative">
                 <div className="absolute left-3 bottom-3">
                   <Image
                   src={aboutus}
                   alt=""
                   width={250}
                   height={250}
                   className="rounded-sm"
                />
                </div>
                </div>
                <div className="flex flex-col justify-center  ">
                <h1 className="capitalize text-2xl text-[#151875] leading-10">Know about our ecommerce business, history</h1>
                <p className="capitalize text-[1rem] text-[#8a8fb9]  mb-3">Adipisicing elit. Nesciunt reprehenderit, dicta itquatur totam! Veniam harum fugit autem voluptatum iste officiis mollitia tenetur necessitatibus nostrum iusto. Iure, nobis.</p>
                <MyButton label="Contact Us" />
                </div>
              </div>


              {/* 2nd div  */}
        <div className='flex flex-col items-center'>  
            <div className="flex justify-center items-center mt-10 mb-7">  
                <h1 className="navbar-text text-2xl leading-7 mt-10 mb-5 font-extrabold text-black hoverEffect">  
                    Our Features  
                </h1>  
            </div>  

            {/* Cards Section */}  
            <div className='flex flex-wrap justify-center gap-4 px-4'>  
                {data.map((item) => (  
                    <Card item={item} key={item.id} />  
                ))}  
            </div>  
        </div>  
    


       {/* 3rd div */}
           <div className="w-full h-96 mb-20 bg-[#fbfbff] flex flex-col justify-center items-center mt-24">
           <h1 className="navbar-text text-[2rem] leading-7 mt-10 mb-5 font-extrabold text-black hoverEffect">  
                    Our Client Say! 
                </h1>

                 {/* picture div */}
                <div className="flex gap-4 ">
                {divdata.map((item)=>(
                    <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-900 ...">
                    <Image
                    src={item.image}
                    alt="dfsd"
                    width={50}
                    height={50}
                    />
                    </div> 
                ))}
                </div>
                {/* --------------- */}

                <h1 className="navbar-text text-[1.5rem] leading-7 mt-10 mb-2  text-black hoverEffect">  
                    Selena Womz
                </h1>
                <p className="capitalize text-[0.75rem] text-[#8a8fb9]  mb-3">CEO At Webecy Digital</p>
                <p className="capitalize text-[0.75rem] text-[#8a8fb9]  mb-3 w-[30rem] text-center">
                Soluta pariatur neque laborum facere, aspernatur in doloremque? Ex in, quos eaque sed nostrum error explicabo vero saepe earum commodi delectus ducimus excepturi magni nesciunt labore! Libero harum assumenda accusantium!</p>
                <div className="flex gap-1 justify-start items-center  ">
                    <span className="rounded-full bg-[#ff75b0] text-lg w-5 h-1 "></span>
                    <span className="rounded-full bg-[#ff75b0] text-lg w-8 h-1"></span>
                    <span className="rounded-full bg-[#ff75b0] text-lg w-5 h-1"></span>
                </div> 

           </div>


           {/* ---------------------- */}
          



        </div>
    )
}