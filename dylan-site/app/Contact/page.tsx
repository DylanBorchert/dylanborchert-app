"use server";
import ContactClient from "@/components/Contact/ContactClient";
import DotParticals from "@/components/animated-components/DotParticals";

export default async function Home() {

    return (
        <div>
            <DotParticals />
            <ContactClient />
        </div>
    )
}