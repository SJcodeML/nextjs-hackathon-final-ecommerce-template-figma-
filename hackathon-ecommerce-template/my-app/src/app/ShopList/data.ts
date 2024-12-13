
import  {StaticImageData} from "next/image";

import shoplist1 from "../../public/shoplist/shoplist1.png";
import shoplist2 from "../../public/shoplist/shoplist2.png";
import shoplist3 from "../../public/shoplist/shoplist3.png";
import shoplist4 from "../../public/shoplist/shoplist4.png";
import shoplist5 from "../../public/shoplist/shoplist5.png";
import shoplist6 from "../../public/shoplist/shoplist6.png";




interface ShopListData{
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number,
    description:string
}

export  const shoplistdata:ShopListData[]=[
   

  {
        id:1,
        image:shoplist2,
        name:"Accumson Tincidunt",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."
  },
   
       { id:2,
        image:shoplist3,
        name:"Is Nulla",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."

    },
    {
        id:3,
        image:shoplist4,
        name:"Vel sem",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."
        

    },
    {
        id:4,
        image:shoplist5,
        name:"Porttitor Cum",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."

    },
    {
        id:5,
        image:shoplist6,
        name:"Nunc in",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."

    },
    {
        id:6,
        image:shoplist1,
        name:"Vitae Facilisis",
        price:42.00,
        oldPrice:65.00,
        description :"lorem ispum dolor sit amet, consectetuer ElementInternals. Magna in est adipscing in phasellus non in justo."
    },
    

]