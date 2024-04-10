import AboutClient from "@/app/about/AboutClient";
import ToastError from "@/components/ToastError";
import GeometricGradient from "@/components/animated-components/GeometricGradient";
import { getAboutPage } from '@/hooks/Strapi'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca - About',
    description: 'About me',
    robots: 'index, follow',
}

export default async function About() {

    const { data, error } = await getAboutPage();

    return (
        <div className="">
            <ToastError error={error} />
            <GeometricGradient />
            {data ? <AboutClient content={data as any} /> : <></>}
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 300;
