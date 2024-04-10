import ToastError from "@/components/ToastError";
// import { getTagsPage, getAllTags } from "@/hooks/Strapi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca - Projects',
    description: 'My Projects',
    robots: 'index, follow',
}

export default async function Projects() {



    return (
        <div>
            {/* <ToastError error={error} />
            <ToastError error={allProjectsError} /> */}
            <p>
                Tags
            </p>
        </div>
    )
}


export const dynamic = "force-dynamic";
export const revalidate = 300;