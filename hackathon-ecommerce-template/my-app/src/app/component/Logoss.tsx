import Image from "next/image";
import logos from "../../public/logos.png"


export default function Logo (){
    return(
        <div className="flex justify-center items-center mb-12">
            <Image
            src={logos}
            alt="picture of logo"
            width={700}
            height={200}
            />
        </div>
    )
}

