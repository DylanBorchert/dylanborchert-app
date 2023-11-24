"use server";

import AboutClient from "@/components/About/AboutClient";
import GeometricGradient from "@/components/animated-components/GeometricGradient";
import { getAboutPage } from '@/hooks/Strapi'

export default async function About() {

    const { data, error } = await getAboutPage();

    return (
        <div className="">
            <GeometricGradient />
            {data ? <AboutClient content={data as any} /> : <></>}
        </div>
    )
}