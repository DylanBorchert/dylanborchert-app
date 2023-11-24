"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function BlogsClient({ content, allBlogs, error }: any) {

    if (error) {
        console.error(error)
    }

    return (
        <ContentProcessorClient content={content.content} allContent={allBlogs as any} />
    )
}