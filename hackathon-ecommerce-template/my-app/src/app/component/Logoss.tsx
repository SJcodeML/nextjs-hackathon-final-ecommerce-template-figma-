import Image from "next/image";
import logos from "../../public/logos.png"


export default function Logo (){
    return(
        <div>
            <Image
            src={logos}
            alt="picture of logo"
            width={500}
            height={100}
            />
        </div>
    )
}

