"use server";
import ContactClient from "@/app/Contact/ContactClient";
import DotParticals from "@/components/animated-components/DotParticals";

export default async function Home() {

    return (
        <div>
            <DotParticals />
            <ContactClient />
        </div>
    )
}