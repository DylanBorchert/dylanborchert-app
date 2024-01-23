"use server";

import AboutClient from "@/components/About/AboutClient";
import ToastError from "@/components/ToastError";
import GeometricGradient from "@/components/animated-components/GeometricGradient";
import { getAboutPage } from '@/hooks/Strapi'

export const revalidate = 60;

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