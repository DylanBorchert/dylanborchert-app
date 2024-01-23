import { getBlog } from '@/hooks/Strapi'
import BlogClient from "@/components/Blogs/BlogClient";
import ToastError from '@/components/ToastError';

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