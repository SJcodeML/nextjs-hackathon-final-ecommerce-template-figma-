import styles from "./myaccount.module.css";
import Logo from "../component/Logoss";
import Footer from "../component/Footer";


export  const MyButton = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w- h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'

        >
            {label}
        </button>
    );
};



export default function LoginForm (){
    return (
        <div>
             <div className="h-[15rem] bg-[#f6f5ff] flex flex-col mt-3 justify-center ">
                <div className='ml-52 mt-14 justify-center items-center'>
 
                    <h1 className="text-[3rem] leading-10 text-[#101750] navbar-text font-bold ">My Account</h1>
                    {/* nav */}
                    <div className='flex mt-5 mb-20 '>
                       <h3 className={`${styles.customh3Class}`}>Home . </h3>
                       <h3 className={`${styles.customh3Class}`}> Pages . </h3>
                       <h3 className={`${styles.customh3class2}`}>My Account</h3>
                    </div>
                </div>
                </div>

                   {/* form */}

                <div className="flex flex-col justify-center items-center ">
                    <div className="m-20 w-[30rem] h-96 bg-[#ffffff] drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]">
                    <div className="mx-10 my-6 ">
                    <h3 className="text-[#1d3178] text-[2rem] font-bold text-center">Login</h3>
                    <h3 className="text-[#9096b2] text-[0.75rem] text-center mb-6">Please login using account details below</h3>
                    <form className="flex flex-col gap-4" >

                        <input type="text" name="example" placeholder="Email Addres " className="border-gray-500 border-2 h-9" required />
                        <input type="text" name="example" placeholder="Password" className="border-gray-500 border-2 h-9" required />
                        <h3 className="text-[#9096b2] text-[0.75rem] ">Forgot Your Password?</h3>
                        <MyButton label="Sign In"  />
                        <h3 className="text-[#9096b2] text-[0.75rem] text-center">Dont't have an Account?Create account</h3>
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