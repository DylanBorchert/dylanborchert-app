import BlogsClient from "@/components/Blogs/BlogsClient";
import ToastError from "@/components/ToastError";
import { getBlogPage, getAllBlogs } from "@/hooks/Strapi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca - Blogs',
    description: 'My Blogs'
}

export default async function Blogs() {

    const { data, error } = await getBlogPage();
    const { data: allBlogs, error: allBlogsError } = await getAllBlogs();

    return (
        <div>
            <ToastError error={error} />
            <ToastError error={allBlogsError} />
            {data ? <BlogsClient content={data as any} allBlogs={{ blogs: { data: allBlogs } }} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 300;