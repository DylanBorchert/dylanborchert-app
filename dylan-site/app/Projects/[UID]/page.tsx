import { getProject } from '@/hooks/Strapi'
import BlogClient from "@/app/Blogs/[UID]/BlogClient";
import ToastError from '@/components/ToastError';
import { Metadata, ResolvingMetadata } from "next";
import ProjectClient from './ProjectClient';

type Props = {
    params: {
        UID: string; id: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {

    const { data, error } = await getProject(params.UID)

    if (searchParams && data) {
        return {
            title: data[0].attributes.title,
            description: data[0].attributes.summary,
            robots: 'index, follow',
        }

    } else {
        return {
            title: "Project",
            description: "A Project by Dylan Borchert",
        }
    }
}

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await getProject(params.UID);

    return (
        <div>
            <ToastError error={error} />
            {data ? <ProjectClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;