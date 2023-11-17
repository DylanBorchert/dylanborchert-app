"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function ProjectsClient({ content }: any) {

    return (
        <ContentProcessorClient content={content.content} />
    )
}