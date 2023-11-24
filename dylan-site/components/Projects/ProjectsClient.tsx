"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export default function ProjectsClient({ content, allProjects, error }: any) {

    if (error) {
        console.error(error)
    }


    return (
        <ContentProcessorClient content={content.content} allContent={allProjects as any} />
    )
}