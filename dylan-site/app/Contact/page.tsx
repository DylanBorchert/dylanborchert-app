"use server";
import ContactClient from "@/components/Contact/ContactClient";
import DotParticals from "@/components/animated-components/DotParticals";

export const revalidate = 60;

export default async function Home() {

    return (
        <div>
            <DotParticals />
            <ContactClient />
        </div>
    )
}