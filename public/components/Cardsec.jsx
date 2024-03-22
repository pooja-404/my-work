import Image from "next/image"
import img from '../assets/images/img.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import Button from "./Button";
import Link from "next/link";


export default function Cardsec() {
    const data = [
        {
            img: img
        },
        {
            img: img2
        },
        {
            img: img3
        },
    ]
    return (
        <>
            <div className=' max-w-[1320px] px-3 mx-auto flex flex-col gap-4 justify-center min-h-screen items-center'>
                <div className=' flex items-center justify-center  gap-3 '>
                    {data.map((mydata, index) => (
                        <div key={index} className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] '>
                            <Image src={mydata.img} width={600} height={600} className='rounded-md w-full h-full img transition-all hover:scale-[0.5]  duration-300 ' />
                        </div>
                    ))
                    }
                </div>
                <Link href={'/'}><Button text="about" /></Link>
            </div>
        
        </>
    )
}

{/* <Image
    src={img}
    width={500}
    height={500}
    alt="Picture"
/> */}