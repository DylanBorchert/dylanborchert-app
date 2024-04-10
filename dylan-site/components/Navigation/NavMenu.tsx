import SlideTextLarge from "@/components/animated-components/SlideTextLarge.jsx";
import Link from 'next/link';


function NavigationMenu(props: any) {
    ``

    return (
        <div className="fixed w-full bg-black flex flex-col align-middle justify-around h-[100dvh] z-20 animate-fade-down-nav">
            <div className="h-24 relative ">
            </div>
            <div className="w-full flex flex-row m-auto">
                <div className="flex-grow"></div>
                <div className="m-auto w-[500px] grid sm:grid-cols-2 grid-cols-1 mx-8">
                    <div className="mr-auto">
                        <Link href="/">
                            <SlideTextLarge
                                text1={
                                    <div className=" small-caps">
                                        home
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        home
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/about">
                            <SlideTextLarge
                                text1={
                                    <div className="  small-caps">
                                        about
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        about
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/projects">
                            <SlideTextLarge
                                text1={
                                    <div className="  small-caps">
                                        projects
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        projects
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/blogs">
                            <SlideTextLarge
                                text1={
                                    <div className=" small-caps">
                                        blogs
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        blogs
                                    </div>
                                }
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-grow"></div>
            </div>
            <div className=" w-full px-8 pb-4 text-xs flex justify-between">
                <div className="py-2">
                    <b>Dylan Borchert</b> © {new Date().getFullYear()}.
                </div>
                <div>
                    <span className="float-left bg-primary-1 p-2 rounded-md hidden">
                        Contact
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu;