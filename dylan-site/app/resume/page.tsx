import RicRoll from "./ricroll"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca',
    description: 'My resume',
    robots: 'index, follow',
}

export default async function Resume() {
    return (
        <RicRoll />
    )
}
