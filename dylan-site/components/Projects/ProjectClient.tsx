"use client";
import { use, useEffect, useMemo } from "react";
import ContentProcessorClient from "../ContentProcessorClient";
import Footer from "../Footer";



export default function ProjectClient({ content }: any) {

    return (
        <div className="flex flex-col min-h-[calc(100dvh-48px)]">
            <div className="max-w-[1290px] mx-auto px-5 mt-16 w-full">
                <div className="p-5 bg-foreground-color/5 rounded-md middleshadow transition-all duration-500 overflow-hidden outline-[2px] outline outline-black/50 dark:outline-white/50">
                    <h1 className="font-bold max-w-[1290px] mx-auto text-4xl mb-1">
                        {content.title}
                    </h1>
                    <span className="dark:text-white/65 text-black/65">
                        {new Date(content.postDate || content.updatedAt).toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <p className="mt-5">
                        {content.summary}
                    </p>
                </div>
            </div>
            <ContentProcessorClient content={content.content} />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}