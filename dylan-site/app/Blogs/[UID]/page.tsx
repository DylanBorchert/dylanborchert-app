import { getBlog } from '@/hooks/Strapi'
import BlogClient from "@/components/Blogs/BlogClient";
import ToastError from '@/components/ToastError';
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
            title: "Blog Post",
            description: "A Blog by Dylan Borchert"
        }
    } else {
        const { data, error } = await getBlog(params.UID)

        return {
            title: data[0].attributes.title,
            description: data[0].attributes.summary
        }
    }
}

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await getBlog(params.UID);

    return (
        <div>
            <ToastError error={error} />
            {data ? <BlogClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;