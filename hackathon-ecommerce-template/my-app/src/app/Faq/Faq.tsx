import Logo from "../component/Logoss";
import Footer from "../component/Footer";
import styles from "./faq.module.css";



const MyButton = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'

        >
            {label}
        </button>
    );
};


export default function Faq() {
    return (
        <div>
             <div className="h-[15rem] bg-[#f6f5ff] flex flex-col mt-3 justify-center ">
                <div className='ml-52 mt-14 justify-center items-center'>
 
                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text font-bold ">FAQ </h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                       <h3 className={`${styles.customh3Class}`}>Home . </h3>
                       <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                       <h3 className={`${styles.customh3class2}`}> Faq</h3>
                    </div>
                </div>
                </div>


            <div className="grid mx-[13rem] mt-24 grid-cols-2 gap-6 mb-20">
                {/* left */}
                <div>
                    <h1 className="text-[#1d3178] mt-3 mb-5  text-[1.75rem] leading-4 font-semibold">General Information </h1>

                    {/* block  */}
                     <div className="my-10">
                    <div className="mt-8 mb-8 leading-7 ">
                        <h1 className="text-[#1d3178] text-[1rem] font-semibold leading-6">Eu dictumst cum at sed euismood condimentum?</h1>
                        <h3 className="text-[#a1abcc] text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum unde maxime? Aspernatur iste delectus atque vero pariatur. Et, odio!</h3>

                    </div>

                    <div className="mt-8 mb-8leading-7 ">
                        <h1 className="text-[#1d3178] text-[1rem] font-semibold leading-6">Eu dictumst cum at sed euismood condimentum?</h1>
                        <h3 className="text-[#a1abcc] text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum unde maxime? Aspernatur iste delectus atque vero pariatur. Et, odio!</h3>

                    </div>

                    <div className="mt-8 mb-8 leading-7 ">
                        <h1 className="text-[#1d3178] text-[1rem] font-semibold leading-6">Eu dictumst cum at sed euismood condimentum?</h1>
                        <h3 className="text-[#a1abcc] text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum unde maxime? Aspernatur iste delectus atque vero pariatur. Et, odio!</h3>

                    </div>

                    <div className="mt-8 mb-8 leading-7 ">
                        <h1 className="text-[#1d3178] text-[1rem] font-semibold leading-6">Eu dictumst cum at sed euismood condimentum?</h1>
                        <h3 className="text-[#a1abcc] text-[0.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum unde maxime? Aspernatur iste delectus atque vero pariatur. Et, odio!</h3>

                    </div>
                    </div>



                </div>

                {/* right */}
                <div className="flex flex-col bg-[#f8f8fb]">
                    <div className="m-14">
                    <h3 className="text-[#1d3178] font-bold mt-6 mb-16">Ask a Question</h3>
                    <form className="flex flex-col gap-8" >

                        <input type="text" name="example" placeholder="Your Name* " className="border-gray-500 border-2 h-10" required />
                        <input type="text" name="example" placeholder="Subject* " className="border-gray-500 border-2 h-10" required />
                        <textarea name="example" placeholder="Type Your Message*" className="border-gray-500 border-2 h-32" required />
                        <MyButton label="Click Me" />
                    </form>
                    </div>
                </div>
            </div>
            <div  >
                <Logo />
            </div>
            <Footer />
        </div>
    )
}