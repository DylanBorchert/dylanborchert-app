import ProjectClient from '@/components/Projects/ProjectClient';
import ToastError from '@/components/ToastError';
import { getProject } from '@/hooks/Strapi'
import { useEffect } from 'react';
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: {
        UID: string; id: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {

    if (!searchParams) {
        return {
            title: "Project",
            description: "A Project by Dylan Borchert"
        }
    } else {
        const { data, error } = await getProject(params.UID)

        return {
            title: data[0].attributes.title,
            description: data[0].attributes.summary

        }
    }
}

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
export const revalidate = 0;