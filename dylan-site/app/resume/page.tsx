import { useEffect } from "react"

export default function Resume() {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }, 30)
    }, [])

    return (
        <div>hehe</div>
    )
}
