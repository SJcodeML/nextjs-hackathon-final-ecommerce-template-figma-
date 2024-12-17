import Image, { StaticImageData } from "next/image";
import shoppingcart1 from "../../public/shoopingcart1.png";
import shoppingcart2 from "../../public/shoppingcart2.png";
import shoppingcart3 from "../../public/shoppingcart3.png";
import shoppingcart4 from "../../public/shoppingcart4.png";
import { MyButton } from "../Faq/Faq";

export const MyButtonGreen = ({ label }: { label: string }) => {
    return (
        <button
            className='mt-3 w-full rounded-md h-11 bg-[#19d16f] text-white transition-colors duration-300 mb-10 hover:bg-[#e02b76]'

        >
            {label}
        </button>
    );
};

interface ShoppingCart {
    id: number,
    image: StaticImageData
    name: string,
    color: string,
    size: string,
    price: number,
    total: number
}

export const shoppingcartdata: ShoppingCart[] = [
    {
        id: 1,
        image: shoppingcart3,
        name: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: 32.00,
        total: 219.00

    },
    {
        id: 2,
        image: shoppingcart2,
        name: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: 32.00,
        total: 219.00

    },
    {
        id: 3,
        image: shoppingcart3,
        name: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: 32.00,
        total: 219.00

    },

    {
        id: 5,
        image: shoppingcart4,
        name: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: 32.00,
        total: 219.00

    },
    {
        id: 6,
        image: shoppingcart2,
        name: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: 32.00,
        total: 219.00

    }
]

export default function ShoppingCart() {
    return (
        <div className="flex justify-center  mt-20 ">

            <div className="w-[40rem] bg-white">
                {/* nav */}
                <div className="text-[#1d3178] flex text-[1.5rem] mb-7 font-bold">
                    <h1>Product</h1>
                    <h1 className="ml-52"> Price</h1>
                    <h1 className="ml-16"> Quantity</h1>
                    <h1 className="ml-10">Total</h1>

                </div>

                {/* one row of a component making it then will loop it we will have multiple rows */}
                <div className="" >

                    {/* pictue card */}

                    <div className="">
                        {shoppingcartdata.map(item => (
                            <div key={item.id} className="shopping-cart-item my-5 border-b-2 flex gap-16 border-[#e1e1e4]">
                                {/* Picture card */}
                                <div className=" flex mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={85} // set your desired width  
                                        height={85} // set your desired height  
                                        className="shopping-cart-image mr-3"
                                    />
                                    <div className="">
                                        <h1>{item.name}</h1>
                                        <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Color: ${item.color}`}</h3>
                                        <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Size: ${item.size}`}</h3>
                                    </div>
                                </div>
                                {/* price and further divs */}
                                <div className="flex gap-20 ">
                                    {/* price */}
                                    <div className="flex gap-20 text-[#15245e] ">
                                        <span>{`$${item.price.toFixed(2)}`}</span>
                                    </div>

                                    {/* Quantity controls */}
                                    <div className="border-slate-950  flex">
                                        <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center">-</div>
                                        <div className="bg-[#f0eff2]  w-8 h-5 border-2 flex items-center justify-center">1</div>
                                        <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center">+</div>
                                    </div>

                                    {/* Total */}
                                    <div className="text-[#15245e]">
                                        <span>{`$${item.total.toFixed(2)}`}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between">
                    <MyButton label="Update Cart" />
                    <MyButton label="Clear Cart" />
                </div>

            </div>
            {/* rightside section */}

            <div className="w-30 ml-8  ">
                <div className="text-[#1d3178] flex text-[1.5rem] mb-7 justify-center font-bold">
                    <h1>Cart Totals</h1>
                </div>
                <div className="bg-[#f4f4fc] p-4 m-9 rounded-sm">
                    <div className="flex justify-between leading-10 border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                        <h3>Subtotals:</h3>
                        <h3>$219.00</h3>
                    </div>
                    <div className="flex justify-between border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                        <h3>Totals:</h3>
                        <h3>$325.00</h3>
                    </div>
                    <ol className="list-disc list-inside text-[#8a91ab] text-[0.85rem] leading-10">
                        <li>Shipping and taxes calculated at checkout</li>
                    </ol>
                    <MyButtonGreen label="Proceed to Checkout" />
                </div>


                <div className="text-[#1d3178] flex justify-center text-[1.5rem]   font-bold">
                    <h1>Calculate Shopping</h1>
                </div>
                <div className="bg-[#f4f4fc] p-4 m-9 rounded-sm">
                    <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                        <h3>Bangladesh</h3>

                    </div>
                    <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                        <h3>Mirpur Dhaka 1200</h3>

                    </div>

                    <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1] mb-6">
                        <h3>Postal Code</h3>

                    </div>

                    <MyButton label="Shopping" />
                </div>








                {/* ------ */}

            </div>



        </div>


    )

}