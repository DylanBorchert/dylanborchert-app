import SlideTextLarge from "@/components/animated-components/SlideTextLarge.jsx";
import Link from 'next/link';


function NavigationMenu(props: any) {
    ``

    return (
        <div className="fixed w-full bg-black flex flex-col align-middle justify-around h-[100dvh] z-20 animate-fade-down-nav">
            <div className="h-24 relative text-white">
            </div>
            <div className="w-full flex flex-row m-auto">
                <div className="flex-grow"></div>
                <div className="m-auto w-[500px] grid sm:grid-cols-2 grid-cols-1 mx-8">
                    <div className="mr-auto">
                        <Link href="/">
                            <SlideTextLarge
                                text1={
                                    <div className="text-white small-caps">
                                        Home
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        Home
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/About">
                            <SlideTextLarge
                                text1={
                                    <div className=" text-white small-caps">
                                        About
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        About
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/Projects">
                            <SlideTextLarge
                                text1={
                                    <div className=" text-white small-caps">
                                        Projects
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        Projects
                                    </div>
                                }
                            />
                        </Link>
                        <Link href="/Blogs">
                            <SlideTextLarge
                                text1={
                                    <div className="text-white small-caps">
                                        Blogs
                                    </div>}
                                text2={
                                    <div className="text-transparent font-outline-white small-caps">
                                        Blogs
                                    </div>
                                }
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-grow"></div>
            </div>
            <div className="text-white w-full px-8 pb-4 text-xs flex justify-between">
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