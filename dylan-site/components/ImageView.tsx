"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageView({ item, index }: any) {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show])

    return (
        <div key={index} className='max-w-[1060px] mx-auto px-5 py-5'>
            <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto">
                {item.title}
            </h1>
            <div className='w-fit relative group'>
                <span onClick={handleClick} tabIndex={index} className="group-hover:opacity-100 opacity-0 focus:opacity-100 absolute top-2 right-2 px-1 bg-black/20 rounded-full hover:bg-primary-1 hover:text-black cursor-pointer transition duration-400 ease-in-out">view</span>
                <Image src={`https://strapi.phantommedia.online${item.image.data.attributes.url}`} width={500} height={500} alt='' key={index} className='h-auto w-auto max-h-[50dvh]' />
            </div>
            {show && <div className='bg-black fixed w-full h-[100dvh] z-50 top-0 left-0 animate-fade-down-nav flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-5 left-5 w-10 h-10 z-50 cursor-pointer" onClick={handleClose} viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" />
                </svg>
                <div className="h-[100dvh] w-full flex justify-center">
                    <Image src={`https://strapi.phantommedia.online${item.image.data.attributes.url}`} width={1000} height={1000} alt='' key={index} className='object-contain mx-auto' />
                </div>
            </div>}
        </div>
    )
}