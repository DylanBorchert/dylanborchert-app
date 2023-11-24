"use server";
import ProjectClient from '@/components/Projects/ProjectClient';
import Strapi from '@/hooks/Strapi'

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await Strapi.getProject(params.UID)

    if (error) {
        console.error(error);
    }

    return (
        <div>
            {data ? <ProjectClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}