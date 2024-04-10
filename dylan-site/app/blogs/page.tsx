import BlogsClient from "@/app/blogs/BlogsClient";
import ToastError from "@/components/ToastError";
import { getBlogPage, getAllBlogs } from "@/hooks/Strapi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca - Blogs',
    description: 'My Blogs',
    robots: 'index, follow',
}

export default async function Blogs() {

    const { data, error } = await getBlogPage();
    const { data: allBlogs, error: allBlogsError } = await getAllBlogs();

    async function getSearchParams(params: any) {
        "use server"
        return params;
    }

    return (
        <div>
            <ToastError error={error} />
            <ToastError error={allBlogsError} />
            {data ? <BlogsClient content={data as any} allBlogs={{ blogs: { data: allBlogs } }} getsearchParams={getSearchParams} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 300;