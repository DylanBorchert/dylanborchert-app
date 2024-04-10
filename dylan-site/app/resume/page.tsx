"use client"
import { useEffect } from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'dylanborchert.ca',
    description: 'My resmue',
    robots: 'index, follow',
}
export default function Resume() {


    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?mute=0;autoplay=1"
        }, 10)
    }, [])

    return (
        <></>
    )
}
