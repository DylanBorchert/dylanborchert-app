"use server";

import BlogsClient from "@/components/Blogs/BlogsClient";
import { getBlogPage, getAllBlogs } from "@/hooks/Strapi";

export default async function Blogs() {

    const { data, error } = await getBlogPage();
    const { data: allBlogs, error: allBlogsError } = await getAllBlogs();

    return (
        <div>
            {data ? <BlogsClient content={data as any} allBlogs={{ blogs: { data: allBlogs } }} /> : <></>}
        </div>
    )
}