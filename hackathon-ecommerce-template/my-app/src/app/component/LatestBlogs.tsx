"use client"
import Image , {StaticImageData} from "next/image";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";





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

export default function LatestBlogs(){
    return (
        <div>
        <Image
        src={blog1}
        alt="picture of logo"
        width={500}
        height={100}
        />
    </div>
    )
}