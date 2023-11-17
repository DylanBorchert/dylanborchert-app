"use server";

import BlogsClient from "@/components/Blogs/BlogsClient";
import Strapi from "@/hooks/Strapi";

export default async function Blogs() {

    const { data, error } = await Strapi.getBlogPage();

    return (
        <div>
            {data ? <BlogsClient content={data as any} /> : <></>}
        </div>
    )
}