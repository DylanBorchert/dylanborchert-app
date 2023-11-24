"use server";
import { getBlog } from '@/hooks/Strapi'
import BlogClient from "@/components/Blogs/BlogClient";

export default async function Page({ params }: { params: { UID: string } }) {
    const { data, error } = await getBlog(params.UID);

    return (
        <div>
            {data ? <BlogClient content={data[0].attributes as any} /> : <></>}
        </div>
    )
}