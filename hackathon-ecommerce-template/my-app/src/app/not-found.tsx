import Image from "next/image";
import ghf from "../public/fgh.png";
import styles from "../app/Faq/faq.module.css";
import Logo from "../app/component/Logoss";


export  const MyButton = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'

        >
            {label}
        </button>
    );
};



export default function NotFound (){
    return (
         <div className="">
             <div className="h-[10rem] bg-[#f6f5ff] flex flex-col mt-3 justify-center ">

<div className='ml-52 mt-14 justify-center items-center'>
 
 <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text font-bold ">404 Not Found </h1>
 {/* nav */}
 <div className='flex mt-5 mb-20 '>
    <h3 className={`${styles.customh3Class}`}>Home . </h3>
    <h3 className={`${styles.customh3Class}`}> Pages . </h3>
    <h3 className={`${styles.customh3class2}`}> 404 Not Found</h3>
 </div>
</div>
</div>

               
           
            <div className="flex flex-col items-center mb-20">
            <div className=" flex justify-center items-center "> 
            <Image 
            src={ghf}
            alt="404 not found"
            width={500}
            height={500}
            />
            
            </div >
            <MyButton label="Back to Home" />
            </div>
           
            <Logo />
            


        </div>
    )
}