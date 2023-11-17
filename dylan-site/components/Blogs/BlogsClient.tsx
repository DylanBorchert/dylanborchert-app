"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function BlogsClient({ content, allBlogs }: any) {
    return (
        <ContentProcessorClient content={content.content} allContent={allBlogs as any} />
    )
}