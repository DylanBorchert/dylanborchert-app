"use server";

import ProjectsClient from "@/components/Projects/ProjectsClient";
import ToastError from "@/components/ToastError";
import { getAllProjects, getProjectPage } from "@/hooks/Strapi";

export const revalidate = 60;

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