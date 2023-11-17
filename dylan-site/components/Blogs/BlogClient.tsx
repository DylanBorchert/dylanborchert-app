"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function BlogClient({ content }: any) {
    return (
        <ContentProcessorClient content={content.content} />
    )
}