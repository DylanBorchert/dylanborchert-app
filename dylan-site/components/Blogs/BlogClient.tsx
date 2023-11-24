"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function BlogClient({ content, error }: any) {

    if (error) {
        console.error(error)
    }

    return (
        <ContentProcessorClient content={content.content} />
    )
}