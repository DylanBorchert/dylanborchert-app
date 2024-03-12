"use client";
import ContentProcessorClient from "../../components/ContentProcessorClient";
import { useSearchParams } from 'next/navigation'
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default function BlogsClient({ content, allBlogs }: any) {
    const searchParams = useSearchParams();


    return (
        <div className="flex flex-col min-h-[calc(100dvh-48px)]">
            <ContentProcessorClient content={content.content} allContent={allBlogs as any} />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}