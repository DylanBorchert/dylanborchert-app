"use client";
import ContentProcessorClient from "../ContentProcessorClient";
import Footer from "../Footer";

export default function BlogsClient({ content, allBlogs }: any) {

    return (
        <div className="flex flex-col min-h-[calc(100dvh-48px)]">
            <ContentProcessorClient content={content.content} allContent={allBlogs as any} />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}