"use server";
import Strapi from '@/hooks/Strapi'
import BlogClient from "@/components/Blogs/BlogClient";

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await Strapi.getBlog(params.UID);

    return (
        <div>
            {data ? <BlogClient content={data as any} /> : <></>}
        </div>
    )
}