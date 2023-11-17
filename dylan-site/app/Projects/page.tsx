"use server";

import ProjectsClient from "@/components/Projects/ProjectsClient";
import Strapi from "@/hooks/Strapi";

export default async function Projects() {

    const { data, error } = await Strapi.getProjectPage();

    return (
        <div>
            {data ? <ProjectsClient content={data as any} /> : <></>}
        </div>
    )
}