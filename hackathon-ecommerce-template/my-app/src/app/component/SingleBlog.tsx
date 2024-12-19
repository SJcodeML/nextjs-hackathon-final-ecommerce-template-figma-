import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Image, { StaticImageData } from "next/image";
import recent1 from "../../public/blog/blogrecent.png";
import recent2 from "../../public/blog/blogrecent2.png";
import recent3 from "../../public/blog/blogrecent3.png";
import recent4 from "../../public/blog/blogrecent4.png";
import sale1 from "../../public/blog/blogsale.png";
import sale2 from "../../public/blog/blogsale2.png";
import sale3 from "../../public/blog/blogsale3.png";
import offer1 from "../../public/blog/blog.png";
import offer2 from "../../public/blog/blogoffer.png";
import offer3 from "../../public/blog/blogoffer3.png";
import offer4 from "../../public/blog/blogrecent.png";
import Link from "next/link";
import blogfb from "../../public/blog/blogfollowfb.png";
import bloginsta from "../../public/blog/bolgfollowinsta.png";
import blogtwitter from "../../public/blog/follwblogtwitter.png";
import blogpage1 from "../../public/blogpage1.png";
import blogpage2 from "../../public/blogpage2.png";
import blogpage3 from "../../public/blogpage3.png";
import penBlog from "../../public/penblog.png";
import calenderBlog from "../../public/calender.png";
import Logo from "../component/Logoss";
import Footer from "../component/Footer";
import styles from "@/app/MyAccount/myaccount.module.css";

// --------------- single blog imports
import { faArrowLeft, faArrowRight, faEnvelope, faLock, faComment } from '@fortawesome/free-solid-svg-icons';
import graystar from "../../public/shoplist/graystar.png";
import shoplist from "../../public/shoplist/shoplist star.png";
import { MyButton } from "../MyAccount/Loginform";
import React from 'react';



interface BlogPageData {
    id: number,
    image: StaticImageData,
    description: string,
    date: string
}
const Rblogpagedata: BlogPageData[] = [
    {
        id: 1,
        image: recent1,
        description: "It is a long established fact",
        date: "Aug 09 2020"
    },
    {
        id: 2,
        image: recent2,
        description: "It is a long established fact",
        date: "Aug 09 2020"
    },
    {
        id: 3,
        image: recent3,
        description: "It is a long established fact",
        date: "Aug 09 2020"
    },
    {
        id: 4,
        image: recent4,
        description: "It is a long established fact",
        date: "Aug 09 2020"
    },
]


const Sblogpagedata: BlogPageData[] = [
    {
        id: 1,
        image: sale1,
        description: "Elit ornare in enim mauris.",
        date: "Aug 09 2020"
    },
    {
        id: 2,
        image: sale2,
        description: "Viverra pulvinar et enim.",
        date: "Aug 09 2020"
    },
    {
        id: 3,
        image: sale3,
        description: "Mattis varius donec fdsfd",
        date: "Aug 09 2020"
    },

]

interface PriceRange {
    min: number,
    max: number,
}

interface OBlogPageData {
    id: number,
    image: StaticImageData,
    description: string,
    price1: PriceRange

}


const Oblogpagedata: OBlogPageData[] = [
    {
        id: 1,
        image: offer1,
        description: "Duis lectus est.",
        price1: { min: 12.00, max: 15.00 },

    },
    {
        id: 2,
        image: offer2,
        description: "Duis lectus est.",
        price1: { min: 12.00, max: 15.00 },
    },
    {
        id: 3,
        image: offer3,
        description: "Duis lectus est.",
        price1: { min: 12.00, max: 15.00 },

    },
    {
        id: 4,
        image: offer4,
        description: "Duis lectus est.",
        price1: { min: 12.00, max: 15.00 },

    },
]



interface DataBlog {
    id: number,
    image: StaticImageData,
    name: string,
    date: string,
    subject: string,
    description: string,
    readmore: string
}

const datablog: DataBlog[] = [
    {
        id: 1,
        name: "Sabor Ali",
        image: blogpage1,
        date: "21-August-2020",
        subject: "Top Essential Trends in 2021",
        description: " More off this less hello samlande lied much over tightly circa horse More off this less hello samlande lied much over tightly circa horse taped mightly taped mightly",
        readmore: "Read More",
    },
    {
        id: 2,
        image: blogpage2,
        name: "Sur Fausia",
        date: "21-August-2020",
        subject: "Top Essential Trends in 2021",
        description: " More off this less hello samlande lied much over tightly circa horse taped More off this less hello samlande lied much over tightly circa horse taped mightly mightly",
        readmore: "Read More",
    },
    {
        id: 3,
        image: blogpage3,
        name: "Sober Ali",
        date: "21-August-2020",
        subject: "Top Essential Trends in 2021",
        description: " More off this less hello samlande lied much over tightly circa ho More off this less hello samlande lied much over tightly circa horse taped mightly rse taped mightly",
        readmore: "Read More",
    },
]

const Card = ({ item }: { item: DataBlog }) => (
    <div className="w-full   mb-14 ">
        {/* Image Container */}


        <div className="flex justify-center items-center bg-[#f7f7f7] overflow-hidden">
            <Image
                src={item.image}
                alt={`Image of ${item.name}`}
                layout="responsive"
                width={250}
                height={250}
                className="object-cover"
            />
        </div>

        {/* Card Details */}
        <div className="p-4 flex flex-col">

            <div className="flex gap-12 pr-16">
                <div className=" flex justify-between gap-1  ">
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
                <span className="text-[#8a8fb9] text-[0.80rem] leading-7 mb-9">{item.description}</span>
                <span className="text-[#8a8fb9] text-[0.80rem] leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, consequuntur temporibus blanditiis autem esse enim magnam in quod, quisquam obcaecati eum fuga recusandae numquam! Repellendus aperiam asperiores harum eaque accusantium facere repudiandae, minima ipsam at neque tenetur, impedit ad sunt quibusdam dolorem recusandae tempora quasi rem fuga! Autem, adipisci vitae?</span>
                <span className="text-[#8a8fb9] text-[0.80rem]  mb-9 h-40 bg-[#fafafb] border-l-4 border-l-[#fc45a0] leading-8 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis dolor facere? Amet optio vel doloremque voluptatem, odit unde deleniti omnis voluptatum maxime esse eveniet. Rem ut sapiente voluptatum inventore sed ducimus esse natus atque quis! Saepe corrupti ad labore.</span>
                <span className="text-[#151875] text-[1rem] underline hover:text-pink-400 cursor-pointer leading-7">{item.readmore}</span>

            </div>
        </div>
    </div>
);




// --------------------------------------single blog data
interface RSBlogPageData {
    id: number,
    name: string,
    image: StaticImageData,
    description: string,
    date: string
}
const SSblogpagedata: RSBlogPageData[] = [

    {
        id: 2,
        name: "Sapien ac",
        image: sale2,
        description: "Viverra pulvinar et enim ndksfkj fjdjkhfsd kjdkjsdfkl kjdfkjsdkf jdkfjsdkj fskdjfksldjf dkfjkd.",
        date: "Aug 09 2020"
    },
    {
        id: 3,
        name: "Augue conva",
        image: sale3,
        description: "Mattis varius donec fdsfd fskdjfklj ksdjfksjdkljf kjdfkjsdklfj jsdkfjskldjf ksdjfklsjdflk",
        date: "Aug 09 2020"
    },

]


interface OOBlogPageData {
    id: number,
    image: StaticImageData,
    name: string,
    newprice: number,
    oldprice: number
}

const OOblogpagedata: OOBlogPageData[] = [
    {
        id: 1,
        image: offer1,
        name: "Quam sed",
        newprice: 32.00,
        oldprice: 56.00

    },
    {
        id: 2,
        image: offer2,
        name: "Quam sed",
        newprice: 32.00,
        oldprice: 56.00
    },
    {
        id: 3,
        image: offer3,
        name: "Quam sed",
        newprice: 32.00,
        oldprice: 56.00

    },
    {
        id: 4,
        image: offer4,
        name: "Quam sed",
        newprice: 32.00,
        oldprice: 56.00

    },
]


export const Stars = ({
    src,
    count = 4,
    width = 8,
    height = 8,
}: {
    src: StaticImageData | string;  // Type for src  
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
                    width={10}
                    height={10}
                />


            </div>
        </div>
    );
};



export default function SingleBlog() {
    return (
        <div>
            
            <div className="h-[15rem] bg-[#f6f5ff] flex flex-col mt-3 justify-center mb-24 ">
                <div className='ml-52 mt-14   justify-center items-center'>

                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text font-bold ">My Account</h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                        <h3 className={`${styles.customh3Class}`}>Home . </h3>
                        <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                        <h3 className={`${styles.customh3class2}`}>My Account</h3>
                    </div>
                </div>
            </div>

            {/* lower part */}

            <div className="flex px-[12rem]  " >
                <div className="flex flex-col">
                    {/* Blog Section */}
                    <Link href="/singleblogpage" className=" justify-center md:justify-center gap-4 px-4">

                        {datablog.slice(0, 1).map((item) => (

                            <Card item={item} key={item.id} />

                        ))}
                    </Link>
                    <div className="mr-4">
                    <div className="w-full h-10 bg-[#f7f8fb] text-[#8a8fb9] flex items-center justify-between px-6 border-black mb-6">
                        <h1>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Previous Post
                        </h1>

                        <h1>
                            Previous Post
                            <FontAwesomeIcon icon={faArrowRight} />

                        </h1>
                    </div>

                    {/* four pictures and 2 paragraphs */}
                    <div className=" w-full flex  space-x-1 mb-4 " >

                        {OOblogpagedata.map((item) => (
                            <div className=" h-80     ">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={180}
                                    height={180}
                                    className="h-60 hover:border-pink-400 hover:border-2"
                                />

                                <h3 className="text-black text-[1rem] text-center leading-10 ">{item.name}</h3>
                                <div className="flex  justify-between p-2 gap-2">
                                    <h4 className="text-[#151875] text-[0.85rem]">{`${item.newprice.toFixed(2)}`}</h4>
                                    <h4 className="text-pink-500 text-[0.85rem] line-through">{`${item.oldprice.toFixed(2)}`}</h4>
                                    <div className="flex ">
                                        <Stars src={shoplist} />
                                    </div>
                                </div>
                            </div>))}
                    </div>



                    {/* two pics and one paragraph section  */}

                    <div>

                        {/* card secction */}
                        <div className=" flex justify-between h-60 mb-5 border-2" >
                            {Oblogpagedata.slice(0, 2).map((item) => ( // Modify this line to slice the first 2 items  
                                <div key={item.id} className="mb-4">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={330}
                                        height={300}
                                        className="h-60"
                                    />


                                </div>))}
                        </div>

                        {/* Paragraphs */}

                        <div className="text-[#8a8fb9] text-[0.95rem] leading-6 space-y-8 py-8 pt-4 ">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, sapiente, tenetur repellendus assumenda recusandae dolore sed modi possimus placeat sequi ut natus rem non. Aperiam officia tenetur deserunt illum nobis!
                                Earum architecto, dignissimos obcaecati consequatur, est quos soluta autem sed incidunt quam error quod? Tenetur fugit, esse illo deserunt officia quos porro temporibus veniam aliquam facere aut repellendus molestias sit.
                                Ullam unde obcaecati quam! Commodi impedit obcaecati expedita recusandae nostrum. Sed rerum obcaecati minima vitae expedita commodi rem cupiditate impedit molestias eaque explicabo neque quam, distinctio provident recusandae atque similique!
                                Molestias quibusdam voluptatibus, consectetur, autem commodi praesentium ab officiis ratione eaque architecto rem dolore quas impedit amet iusto illum, dolor minima accusantium minus et? Maxime illo est perspiciatis dolor iure.lo</p>

                        </div>
                    </div>




                    {/* Follow Section */}
                    <div className="flex space-x-7 justify-center mt-5 mb-10 ">
                        <Link href="https://www.facebook.com/login.php" passHref>
                            <Image
                                src={blogfb} // Replace with your image path  
                                alt="Description of the image"
                                width={25} // Set the desired width  
                                height={25} // Set the desired height  
                            />
                        </Link>


                        <Link href="https://www.facebook.com/login.php" passHref>
                            <Image
                                src={bloginsta} // Replace with your image path  
                                alt="Description of the image"
                                width={25} // Set the desired width  
                                height={25} // Set the desired height  
                            />
                        </Link>


                        <Link href="https://www.facebook.com/login.php" passHref>
                            <Image
                                src={blogtwitter} // Replace with your image path  
                                alt="Description of the image"
                                width={25} // Set the desired width  
                                height={25} // Set the desired height  
                            />
                        </Link>
                    </div>
                    {/* ----------------------- */}





                    {/* same 2 cards as in ri8 section */}
                    <div className="mb-20  ">

                        {SSblogpagedata.map((item) => (

                            <div className="flex gap-4 border-2 p-4 my-8 shadow-2xl">

                                <Image
                                    src={item.image}
                                    alt=""
                                    width={150}
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
                        <div className=" w-[30rem] h-[30rem]   text-[#8a8fb9]">
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
                    </div>
                    {/* --------------- */}
                </div>

                {/* --------------------------------- */}
                {/* search bar */}
                <div>
                    <h1 className="text-[#151875] text-2xl font-semibold mb-3">Search</h1>
                    <div className="border-[#bdbdd8] border-2 mb-7 w-64 h-10 flex justify-around items-center " >
                        <input type="text" placeholder="Search for Posts" />
                        <FontAwesomeIcon icon={faSearch} className="text-[#bdbdd8] " />

                    </div>


                    {/* Catoegories */}

                    <div className="mb-8 ">
                        <h1 className="text-[#151875] text-2xl font-semibold mt-5 ">Categories</h1>
                        <div className="text-[#3f509e] font-[0.75rem]  leading-6 mt-3 grid grid-rows-3 grid-cols-2 w-80  grid-flow-col gap-1">
                            <h3 className="">Women(21)</h3>
                            <h3>Women(21)</h3>
                            <h3>Women(21)</h3>
                            <h3>Women(21)</h3>
                            <h3>Women(21)</h3>
                            <h3>Women(21)</h3>
                        </div></div>

                    {/* Recent products Post */}

                    <div className="mb-10 ">
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Recent Post</h1>

                        {Rblogpagedata.map((item) => (
                            <div className="flex gap-4  ">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="mb-2"
                                />
                                <div className="mt-3">
                                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>
                                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>
                                </div>
                            </div>))}

                    </div>

                    {/* Sale Products */}

                    <div className="mb-10">
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Sale Products</h1>
                        {Sblogpagedata.map((item) => (
                            <div className="flex gap-4">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="mb-2"
                                />
                                <div className="mt-3">
                                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>
                                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>
                                </div>
                            </div>))}
                    </div>

                    {/* Offer Producs Posts */}
                    <div className="mb-2 w-80 " >
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Offer Product</h1>
                        <div className="grid grid-rows-2 grid-cols-2 ">
                            {Oblogpagedata.map((item) => (
                                <div className="  mb-4 ">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={150}
                                        height={150}
                                    />
                                    <div className="flex flex-col ">
                                        <h3 className="text-[#3f509e] text-[0.75rem] leading-8 ">{item.description}</h3>
                                        <h4 className="text-[#8a8fb9] text-[0.65rem]">{`$${item.price1.min.toFixed(2)} - $${item.price1.max.toFixed(2)}`}</h4>
                                        {/* <h4 className="text-[#8a8fb9] text-[0.85rem]">{`${item.price2.toFixed(2)}`}</h4> */}
                                    </div>
                                </div>))}
                        </div>
                    </div>

                    {/* Follow section */}
                    <div className=" gap-3 mb-8 ">
                        <h1 className="text-[#151875] text-xl font-semibold mb-3">Follow</h1>
                        <div className="flex gap-3">
                            <Link href="https://www.facebook.com/login.php" passHref>
                                <Image
                                    src={blogfb} // Replace with your image path  
                                    alt="Description of the image"
                                    width={25} // Set the desired width  
                                    height={25} // Set the desired height  
                                />
                            </Link>


                            <Link href="https://www.facebook.com/login.php" passHref>
                                <Image
                                    src={bloginsta} // Replace with your image path  
                                    alt="Description of the image"
                                    width={25} // Set the desired width  
                                    height={25} // Set the desired height  
                                />
                            </Link>


                            <Link href="https://www.facebook.com/login.php" passHref>
                                <Image
                                    src={blogtwitter} // Replace with your image path  
                                    alt="Description of the image"
                                    width={25} // Set the desired width  
                                    height={25} // Set the desired height  
                                />
                            </Link>
                        </div>
                    </div>

                    {/* tags Section */}

                    <div className="mb-5">
                        <h1 className="text-[#151875] text-xl font-semibold mb-3">Tags</h1>
                        <div className=" text-[#151875] text-[0.95rem] font-semibold underline hover:text-pink-500 grid grid-cols-3 grid-rows-2 w-96 gap-5">

                            <h3>General</h3>
                            <h3>Atsanil</h3>
                            <h3>Insas</h3>
                            <h3>Bibsaas</h3>
                            <h3>Nutella</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Logo/>
            <Footer/>

        </div>

    )
}