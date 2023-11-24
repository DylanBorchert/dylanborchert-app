"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function ProjectClient({ content }: any) {

    return (
        <ContentProcessorClient content={content.content} />
    )
}