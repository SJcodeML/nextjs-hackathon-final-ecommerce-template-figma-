
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
    oldPrice:number
}

export  const shoplistdata:ShopListData[]=[
   

  {
        id:1,
        image:shoplist2,
        name:"sidra",
        price:42.00,
        oldPrice:65.00
  },
   
       { id:2,
        image:shoplist3,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:3,
        image:shoplist4,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:4,
        image:shoplist5,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:5,
        image:shoplist6,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:6,
        image:shoplist1,
        name:"sidra",
        price:42.00,
        oldPrice:65.00
    },
    

]