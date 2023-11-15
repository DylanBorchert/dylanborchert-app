import Link from "next/link";


function ListView(props: any) {
    return (
        <div className="max-w-[1060px] mx-auto px-5">
            <div className="flex justify-center">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {props.content.map((slide: any) => (
                        <li
                            className="w-[300px] h-full bg-white/5 rounded-xl aspect-[4/2] hover:scale-[102%] hover:bg-white/10 transition-all duration-500 "
                            key={slide.id}
                        >
                            <div className="h-full w-full flex flex-col p-3 justify-between group/item">
                                <p className=" font-semibold text-lg line-clamp-3">
                                    {slide.attributes.title}
                                </p>
                                <div className="flex-grow"></div>
                                <div className="flex w-full justify-between">
                                    <div className="flex flex-col justify-center text-white/">
                                        <p className="text-sm">
                                            {new Date(slide.attributes.updatedAt).toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <Link href={`${props.type}/${slide.attributes.UID}`}>
                                        <div className="bg-white/5 py-2 px-3 rounded-full text-sm group-hover/item:bg-primary-1 group-hover/item:text-black">
                                            Read
                                            <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className="inline-flex shrink-0 text-xl ml-auto opacity-60"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListView