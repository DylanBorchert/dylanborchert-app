"use server";
import Strapi from '@/hooks/Strapi'
import BlogClient from "@/components/Blogs/BlogClient";

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await Strapi.getBlog(params.UID);

    if (error) {
        console.error(error);
    }

    return (
        <div>
            {data ? <BlogClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}