"use client";
import ContentProcessorClient from "@/components/ContentProcessorClient"
import Socials from "@/components/About/Socials"
import Link from 'next/link';
import Image from "next/image";



export default function About({ content }: any) {

    return (
        <div className="min-h-[calc(100dvh-3rem)]">
            <div className="home-gradient absolute w-full h-full top-0 z-[-1]"></div>
            <div className="mx-auto max-w-[1060px] px-5 grid sm:grid-cols-[14rem_2fr] grid-cols-1 pt-8">
                <div className="m-auto rounded-full bg-black glow-shadow-sm z-[-1]">
                    <Image src={`https://strapi.phantommedia.online${content.portrait.data.attributes.url}`} width={52} height={52} alt="Portarit of Dylan Borchert" className="w-52 h-52 rounded-full" />
                </div>
                <div className="flex flex-col justify-center p-5 h-full  m-auto sm:m-0">
                    <p className="text-lg pt-3">
                        Check my socials
                    </p>
                    <Socials />
                    <div className="flex sm:gap-5 sm:justify-start justify-between">
                        <a href={`https://strapi.phantommedia.online${content.resume.data.attributes.url}`} target="_blank">
                            <div className="p-2 bg-white/10 px-5 py-2 hover:bg-primary-1 hover:text-black text-center rounded-full text-sm sm:mx-0 mt-2 mx-auto transition duration-400 ease-in-out">
                                <p>My Resume</p>
                            </div>
                        </a>
                        <Link href="/contact">
                            <div className="p-2 bg-white/10 px-5 py-2 hover:bg-primary-1 hover:text-black text-center rounded-full text-sm sm:mx-0 mt-2 mx-auto transition duration-400 ease-in-out">
                                <p>Contact Me</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ContentProcessorClient content={content.content} />
        </div>
    )
}