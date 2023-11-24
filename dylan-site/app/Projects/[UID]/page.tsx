"use server";
import ProjectClient from '@/components/Projects/ProjectClient';
import Strapi from '@/hooks/Strapi'

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await Strapi.getProject(params.UID)

    return (
        <div>
            {data ? <ProjectClient error={error} content={data[0].attributes as any} /> : <></>}
        </div>
    )
}