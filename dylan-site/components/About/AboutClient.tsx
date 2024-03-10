"use client";
import ContentProcessorClient from "@/components/ContentProcessorClient"
import Socials from "@/components/Socials"
import Link from 'next/link';
import Image from "next/image";
import { Suspense } from "react";
import Footer from "../Footer";


export default function About({ content }: any) {

    return (
        <div className="min-h-[calc(100dvh-3rem)] -z-10 flex flex-col">
            <div className="mx-auto max-w-[1290px] px-5 grid sm:grid-cols-[14rem_2fr] grid-cols-1 pt-8 w-full">
                <div className="m-auto rounded-full bg-foreground-color glow-shadow-sm relative -z-[1]">
                    <Image src={`https://strapi.phantommedia.online${content.portrait.data?.attributes.url}`} width={500} height={500} alt="Portarit of Dylan Borchert" className="w-52 h-52 rounded-full" />
                </div>
                <div className="flex flex-col justify-center p-5 h-full sm:m-0">
                    <p className="text-lg pt-3">
                        Check my socials
                    </p>
                    <div className='max-w-[1290px]'>
                        <Socials />
                    </div>
                    <div className="flex sm:gap-5 sm:justify-start justify-between">
                        <a href={`https://strapi.phantommedia.online${content.resume.data?.attributes.url}`} target="_blank">
                            <div className="p-2 dark:bg-white/10 bg-black/10 dark:hover:bg-primary-1   px-5 py-2 hover:bg-primary-1 hover:text-black text-center rounded-full text-sm sm:mx-0 mt-2 mx-auto transition duration-400 ease-in-out">
                                <p>My Resume</p>
                            </div>
                        </a>
                        <Link href="/Contact">
                            <div className="p-2 dark:bg-white/10 dark:hover:bg-primary-1 bg-black/10 px-5 py-2 hover:bg-primary-1 hover:text-black text-center rounded-full text-sm sm:mx-0 mt-2 mx-auto transition duration-400 ease-in-out">
                                <p>Contact Me</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ContentProcessorClient content={content.content} />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}