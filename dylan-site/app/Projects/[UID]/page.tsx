"use server";
import ProjectClient from '@/components/Projects/ProjectClient';
import ToastError from '@/components/ToastError';
import { getProject } from '@/hooks/Strapi'

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await getProject(params.UID)

    return (
        <div>
            <ToastError error={error} />
            {data ? <ProjectClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";