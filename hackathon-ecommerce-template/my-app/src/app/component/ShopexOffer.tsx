
import Image, {StaticImageData} from "next/image";
import freedelivery1 from "../../public/free-delivery1.png";
import freedelivery2 from "../../public/Group.png";
import freedelivery3 from "../../public/Group1.png";
import freedelivery4 from "../../public/cashback1.png";


interface Data2 {
    id:number,
    image:StaticImageData,
    name:string,
    description:string
   
}

const data:Data2[] =[
    {
        id:1,
        image:freedelivery1,
        name:"24/7 Support",
        description:"cnjdkj jkscjkhjdhf nscnsdjkkhsdjf jndcjnjskdh cndnjhdjfhdj njcsdjkfhjh njsdjfhjd njdjkhfjfh",
    },
    {
        id:2,
        image:freedelivery2,
        name:"24/7 Support",
        description:"cnjdkj jkscjkhjdhf nscnsdjkkhsdjf jndcjnjskdh cndnjhdjfhdj njcsdjkfhjh njsdjfhjd njdjkhfjfh",
    },
    {
        id:3,
        image:freedelivery3,
        name:"24/7 Support",
        description:"cnjdkj jkscjkhjdhf nscnsdjkkhsdjf jndcjnjskdh cndnjhdjfhdj njcsdjkfhjh njsdjfhjd njdjkhfjfh",
    },
    {
        id:4,
        image:freedelivery4,
        name:"24/7 Support",
        description:"cnjdkj jkscjkhjdhf nscnsdjkkhsdjf jndcjnjskdh cndnjhdjfhdj njcsdjkfhjh njsdjfhjd njdjkhfjfh",
    },
   

]

const Card = ({ item }: { item: Data2 }) => (  
    <div className="flex  flex-wrap mt-5 px-32 ">
        {/* card */}
        <div className='flex drop-shadow-xl ' key={item.id}>
                             <div className='w-60 h-56 flex flex-col bg-[#fbfafa] justify-center items-center  mb-14 '>
                                <Image
                                    src={item.image}
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                />
                            
                            
                                <h3 className='text-[#151875] text-[1rem] leading-6 font-extrabold navbar-text '>{`Code ${item.name}`}</h3>
                                <h3 className='text-[0.75rem] text-center m-3 font-semibold text-[#8a8fb9]'>{item.description}</h3>
                            </div>
                            
                               
                            </div>
                            </div>
                        
);  


export default function ShopexOffer (){
    return (
        <div className='flex flex-col '>
           
              {/* cards section */}
              <div className='flex flex-wrap justify-between '>  
            {data.map((item) => (  
                <Card item={item} key={item.id} />  
            ))}  
        </div>  
        </div>
                      
    )
}



