"use server";
import ProjectClient from '@/components/Projects/ProjectClient';
import { getProject } from '@/hooks/Strapi'

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await getProject(params.UID)

    return (
        <div>
            {data ? <ProjectClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}