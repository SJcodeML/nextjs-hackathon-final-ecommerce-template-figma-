// import Image , {StaticImageData} from "next/image";
// import newsletter from "../../public/newletter.png";

// export default function NewsLetter (){
//     return (
//         <div>
//           <Image




//         </div>
//     )
// }






import Image from "next/image";  
import newsletter from "../../public/newletter.png"; 



export default function NewsLetter() {  
    const divStyle = {  
        backgroundImage: `url(${newsletter.src})`, // Use the src property of Image for the URL  
        backgroundSize: 'cover', // Ensures the image covers the entire div  
        backgroundPosition: 'center', // Centers the background image  
        height: '20rem',  
        width: '100%', // Set width as per your layout  
        display: 'flex', // Use flexbox for any content inside  
        justifyContent: 'center', // Center any inner content horizontally  
        alignItems: 'center', // Center any inner content vertically  
    };  

    const MyButton =({ label }: { label: string })  => {  
        return (  
            <button  
                className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'  
                 
            >  
                {label}  
            </button>  
        );  
    };  

    return (  
        <div style={divStyle} className="flex flex-col mb-14">  
            <h1 className="text-center text-[#1a0b5b] font-bold text-lg ">Get Latest Update By Subscribe <br/>Our Newsletter</h1> 
            <MyButton label="Click Me" />  
            {/* Add any additional content here */}  
            <Image  
                src={newsletter}  
                alt="Newsletter"  
                width={500} // Set appropriate width  
                height={300} // Set appropriate height  
                style={{ display: 'none' }} // Hide if not needed  
            />  
        </div>  
    );  
}