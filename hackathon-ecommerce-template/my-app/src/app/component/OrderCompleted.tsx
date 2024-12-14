import Image from "next/image";
import ordercompleted from "../../public/OrderCompleted/ordercompleted1.png";
import ordercompleted2 from "../../public/OrderCompleted/ordercompleted2.png";

export  const MyButton = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w-40 mb-10 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76] rounded-[0.150rem] '

        >
            {label}
        </button>
    );
};
 
export default function OrderCompleted(){
    return (
        
                <div className="m-12 flex flex-col items-center justify-center "> 
                     <div className="h-[20rem] w-[40rem]  flex border-dashed border-b-2 border-l-2 flex-col mt-3  items-center justify-center ">
                       {/* <div  className="relative my-6 ">
                        <Image
                        src={ordercompleted }
                        alt=""
                        width={65}
                        height={65}
                       /></div> */}
                        <div className="my-6">
                        <Image
                        src={ordercompleted2 }
                        alt=""
                        width={60}
                        height={60}
                        />
                        </div>
                        
                        
                     <h1 className="text-[#1d3178] mt-3 mb-5  text-[1.75rem] leading-4 font-semibold">Your Order is Completed! </h1>
                     <div className="w-[30rem]"><h3 className="text-[#9096b2] text-[0.75rem] text-center mb-6">Thankyou for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</h3></div>
                     <MyButton label="Continue Shopping"/>
                           
                       
                </div>
                </div>
            )
        }
    
