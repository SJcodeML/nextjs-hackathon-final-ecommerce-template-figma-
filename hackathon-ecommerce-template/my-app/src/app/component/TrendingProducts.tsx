"use client"
import Image , {StaticImageData} from "next/image";
import chair7 from "../../public/chair7.png";

interface Data2 {
    id:number,
    image:StaticImageData,
    name:string,
    price:number,
    oldPrice:number
}

const data:Data2[] =[
    {
        id:1,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:2,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:3,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:4,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:5,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },
    {
        id:6,
        image:chair7,
        name:"sidra",
        price:42.00,
        oldPrice:65.00

    },

]



