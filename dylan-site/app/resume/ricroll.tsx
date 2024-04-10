"use client"
import { useEffect } from 'react'

export default function () {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?mute=0;autoplay=1"
        }, 100)
    }, [])

    return (
        <div></div>
    )
}

