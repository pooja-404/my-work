
import React from "react";
import Button from "./Button";
import Link from "next/link";



const Mapsec = () => {
    const data = [
        {
            head: "tool / library",
            text: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",

        },
        {
            head: "tool / library",
            text: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",

        },
        {
            head: "tool / library",
            text: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",

        },
    ];
    return (
        <div className="flex max-w-[1320px] px-3 mx-auto flex-col gap-4 justify-center  min-h-screen items-center">
            <div className=" flex items-center justify-center  gap-3 ">
                {data.map((mydata, index) => (
                    <div
                        key={index}
                        className=" bg-[#c294fb] justify-center flex-col px-5 rounded-[10px] flex transition-all duration-300 hover:scale-[0.95]  h-[250px] w-[250px]">
                        <h2 className=" text-[#20182b] font-bold pt-2">{mydata.head}</h2>
                        <p className=" text-[#20182b] font-medium pt-2">{mydata.text}</p>
                        <div className="flex">
                            <p className="text-[#20182b] font-medium">Learn more</p>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.08008 17L18.0801 7" stroke="#20182b" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.08008 7H18.0801V17" stroke="#20182b" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <Link href={'/About'}><Button text="home" /></Link>
        </div>
    );
};
export default Mapsec


