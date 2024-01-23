"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export const revalidate = 60;

export default function ProjectsClient({ content, allProjects }: any) {

    return (
        <ContentProcessorClient content={content.content} allContent={allProjects as any} />
    )
}