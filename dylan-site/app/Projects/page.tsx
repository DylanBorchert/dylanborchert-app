import ProjectsClient from "@/app/Projects/ProjectsClient";
import ToastError from "@/components/ToastError";
import { getAllProjects, getProjectPage } from "@/hooks/Strapi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca - Projects',
    description: 'My Projects',
    robots: 'index, follow',
}

export default async function Projects() {

    const { data, error } = await getProjectPage();
    const { data: allProjects, error: allProjectsError } = await getAllProjects();

    return (
        <div>
            <ToastError error={error} />
            <ToastError error={allProjectsError} />
            {data ? <ProjectsClient content={data as any} allProjects={{ projects: { data: allProjects } }} /> : <></>}
        </div>
    )
}


export const dynamic = "force-dynamic";
export const revalidate = 300;