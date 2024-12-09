export default function Button() {  
    const MyButton = ({ onClick, label }: any) => {  
        return (  
            <button  
                className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'  
                onClick={onClick}  
            >  
                {label}  
            </button>  
        );  
    };  }

    