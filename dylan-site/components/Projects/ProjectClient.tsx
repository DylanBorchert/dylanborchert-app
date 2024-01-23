"use client";
import ContentProcessorClient from "../ContentProcessorClient";

export const revalidate = 60;

export default function ProjectClient({ content }: any) {

    return (
        <ContentProcessorClient content={content.content} />
    )
}