
import Head from 'next/head';
import "../globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faChevronDown, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbarup() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-[#7E33E0] flex items-center justify-between p-4 flex-wrap">
                <div className='flex items-center max-sm:hidden lg:flex pl-48'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#f1f1f1] mx-2 md:mx-3 hidden' />
                    <p className="navbar-text hover:underline decoration-[#bea7de] cursor-pointer hidden lg:block font-semibold text-sm md:text-base text-[#f1f1f1]">
                        sidrajabin457@gmail.com
                    </p>
                </div>
                <div className='flex items-center ml-4 md:ml-8  max-sm:hidden lg:flex'>
                    <FontAwesomeIcon icon={faPhoneVolume} className='text-[#f1f1f1] mx-2 md:mx-3 hidden lg:block' />
                    <p className='navbar-text font-semibold text-sm md:text-base hover:underline hidden lg:block  decoration-[#bea7de] cursor-pointer  text-[#f1f1f1]'>
                        (9567) 344759
                    </p>
                </div>

                {/* Corner side nav */}
                <div className='text-[#f1f1f1] flex flex-wrap items-center ml-auto space-x-4'>
                    <span className='p-2 hover:underline decoration-[#bea7de] under cursor-pointer .navbar-text'>
                        English
                        <FontAwesomeIcon icon={faChevronDown} className="text-[#f1f1f1] ml-1" />
                    </span>
                    <span className='p-2 hover:underline decoration-[#bea7de]  cursor-pointer .navbar-text'>
                        USD
                        <FontAwesomeIcon icon={faChevronDown} className="text-[#f1f1f1] ml-1" />
                    </span>
                    <span className='p-2 hover:underline decoration-[#bea7de] cursor-pointer .navbar-text'>
                        Login
                        <FontAwesomeIcon icon={faUser} className="text-[#f1f1f1] ml-1" />
                    </span>
                    <span className='p-2 hover:underline  decoration-[#bea7de] cursor-pointer .navbar-text'>
                        Wishlist
                        <FontAwesomeIcon icon={faHeart} className="text-[#f1f1f1] ml-1" />
                    </span>
                    <FontAwesomeIcon icon={faCartShopping} className="text-[#f1f1f1] hover:underline cursor-pointer  decoration-[#bea7de] " />
                </div>
            </div>



        </>
    );
}