"use client";
import { useEffect } from "react"

export default function Tags(allTags: any) {

    return (
        <div className="flex w-full">
            {allTags.allTags.tags?.data.map((tag: any) => (
                <p className="text-xs text-primary-1 outline outline-primary-1 outline-[1px] rounded-full px-2 py-1 mr-2 text-opacity-100" key={tag.attributes.tag}>{tag.attributes.tag}</p>
            ))}
        </div>
    )
}
