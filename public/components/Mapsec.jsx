
import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image"
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'


const Mapsec = () => {
    const data = [
        {
            img: card1,
            head: "UI/UX Design",
            text: "The mission will be accomplished, you can just enjoy the delivery and the demos",

        },
        {
            img: card2,
            head: "Development",
            text: "Collaborate using ClickUp. Stunning quality created just for you.",

        },
        {
            img: card3,
            head: "Graphic Design",
            text: "From design to development to make your site live, we will get it done.",

        },
    ];
    return (
        <div className="flex max-w-[1320px] px-3 mx-auto flex-col gap-4 justify-center    min-h-screen items-center">
            <div className=" lg:flex items-center justify-center  gap-3 ">
                {data.map((mydata, index) => (
                    <div
                        key={index}
                        className=" bg-[#c294fb] justify-center flex-col px-5 rounded-[10px] mt-5 lg:mt-0 flex transition-all duration-300 hover:scale-[0.95] py-5  h-[500px] w-[400px]">
                        <Image src={mydata.img} width={600} height={600} className='rounded-md w-full h-full img  duration-300 ' />
                        <h2 className=" text-[#20182b] font-bold pt-2">{mydata.head}</h2>
                        <p className=" text-[#20182b] font-medium pt-2">{mydata.text}</p>
                        <a href="" className="flex">
                            <p className="text-[#20182b] font-medium">Learn more</p>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.08008 17L18.0801 7" stroke="#20182b" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.08008 7H18.0801V17" stroke="#20182b" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
            <Link href={'/About'}><Button text="home" /></Link>
        </div>
    );
};
export default Mapsec


