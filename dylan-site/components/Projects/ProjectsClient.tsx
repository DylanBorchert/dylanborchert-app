"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function ProjectsClient({ content, allProjects }: any) {

    return (
        <ContentProcessorClient content={content.content} allContent={allProjects as any} />
    )
}