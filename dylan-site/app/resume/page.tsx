"use client"
import { useEffect } from "react"

export default function Resume() {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "youtube://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }, 10)
    }, [])

    return (
        <div>hehe</div>
    )
}
