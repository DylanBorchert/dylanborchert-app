"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function BlogsClient({ content }: any) {
    return (
        <ContentProcessorClient content={content.content} />
    )
}