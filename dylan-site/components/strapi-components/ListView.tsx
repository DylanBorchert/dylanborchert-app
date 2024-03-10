"use client";
import Link from "next/link";


function ListView(props: any) {
    return (
        <div className="max-w-[1290px] mx-auto px-5">
            <div className="flex justify-start">
                <ul className="flex flex-wrap gap-4">
                    {props.content.map((slide: any) => (
                        <Link href={`/${props.type}/${slide.attributes.UID}`} key={slide.id}>
                            <li
                                className="w-[300px] h-full middleshadow rounded-xl aspect-[4/2] hover:scale-[102%] bg-black/5 hover:bg-black/10 transition-all duration-500 dark:bg-white/5 dark:hover:bg-white/10 overflow-hidden"
                            >
                                <div className="h-full w-full flex flex-col p-3 justify-between group/item  rounded-xl">
                                    <div className="flex align-middle justify-between">
                                        <p className=" font-semibold text-lg line-clamp-3 w-fit">
                                            {slide.attributes.title}
                                        </p>
                                        <div className="relative">
                                            <svg
                                                className="inline-flex text-xl opacity-60 mt-1 mr-2 group-hover/item:mr-0 transition-all duration-250 h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                strokeLinejoin="round" strokeWidth="1.5"
                                                fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" width="1em" height="1em"
                                            >
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                            <p className="text-xs absolute right-0 top-0 group-hover/item:top-7 transition-all duration-250 opacity-0 group-hover/item:opacity-50 scale-50 group-hover/item:scale-100">
                                                Read
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center /">
                                        <p className="text-sm opacity-50">
                                            {new Date(slide.attributes.postDate || slide.attributes.updatedAt).toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="flex-grow"></div>
                                    <div className="flex w-full">
                                        {slide.attributes.tags?.data.map((tag: any) => (
                                            <p className="text-xs text-primary-1 outline outline-primary-1 outline-[1px] rounded-full px-2 py-1 mr-2 text-opacity-100" key={tag.attributes.tag}>{tag.attributes.tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListView