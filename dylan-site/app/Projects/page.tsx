"use server";

import ProjectsClient from "@/components/Projects/ProjectsClient";
import { getAllProjects, getProjectPage } from "@/hooks/Strapi";

export default async function Projects() {

    const { data, error } = await getProjectPage();
    const { data: allProjects, error: allProjectsError } = await getAllProjects();

    return (
        <div>
            {data ? <ProjectsClient content={data as any} allProjects={{ projects: { data: allProjects } }} /> : <></>}
        </div>
    )
}