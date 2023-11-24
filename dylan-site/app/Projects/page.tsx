"use server";

import ProjectsClient from "@/components/Projects/ProjectsClient";
import Strapi from "@/hooks/Strapi";

export default async function Projects() {

    const { data, error } = await Strapi.getProjectPage();
    const { data: allProjects, error: allProjectsError } = await Strapi.getAllProjects();

    if (error) {
        console.error(error);
    }

    if (allProjectsError) {
        console.error(allProjectsError);
    }

    return (
        <div>
            {data ? <ProjectsClient content={data as any} allProjects={{ projects: { data: allProjects } }} /> : <></>}
        </div>
    )
}