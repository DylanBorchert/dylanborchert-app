"use client";
import ContentProcessorClient from "../../components/ContentProcessorClient";
import Footer from "../../components/Footer";


export default function ProjectsClient({ content, allProjects }: any) {

    return (
        <div className="flex flex-col min-h-[calc(100dvh-48px)]">
            <ContentProcessorClient content={content.content} allContent={allProjects as any} />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}