"use server";

import BlogsClient from "@/components/Blogs/BlogsClient";
import Strapi from "@/hooks/Strapi";

export default async function Blogs() {

    const { data, error } = await Strapi.getBlogPage();
    const { data: allBlogs, error: allBlogsError } = await Strapi.getAllBlogs();

    if (error) {
        console.error(error);
    }

    if (allBlogsError) {
        console.error(allBlogsError);
    }

    return (
        <div>
            {data ? <BlogsClient content={data as any} allBlogs={{ blogs: { data: allBlogs } }} /> : <></>}
        </div>
    )
}