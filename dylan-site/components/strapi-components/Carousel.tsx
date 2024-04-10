"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chevron } from "@/public/chevron";
import Link from "next/link";
import Tags from "../Tags";

const slideWidth = 300;
const slideMargin = 40;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
    if (!slider) return;
    slider.scrollTo({
        left: slideIndex * (slideWidth + slideMargin),
        behavior: "smooth",
    });
};


function Carousel(props: any) {

    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [hasScrollableArea, setHasScrollableArea] = useState(false);

    const currentSlide = useMemo(() => {
        return Math.ceil(sliderPosition / (slideWidth + slideMargin));
    }, [sliderPosition]);

    const scrolledToEndOfSlider = useMemo(() => {
        if (!sliderRef.current) return false;
        return (
            sliderRef.current.scrollWidth - sliderRef.current.scrollLeft - sliderRef.current.clientWidth <= 1
        );
    }, [sliderPosition]);

    const goToNextSlide = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide + 1);
    }, [currentSlide]);

    const goToPreviousSlide = useCallback(() => {
        scrollToSlide(sliderRef.current, currentSlide - 1);
    }, [currentSlide]);

    const handleResize = useCallback(() => {
        if (!sliderRef.current) return;
        setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
    }, []);


    useEffect(() => {
        console.log(props.type)
        window.addEventListener("resize", handleResize, false);
        if (!sliderRef.current) {
            setHasScrollableArea(false);
        } else {
            setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth)
        }
    }, [sliderPosition]);



    return (
        <div className="group">
            <div className="h-[165px] overflow-hidden relative">
                <ul
                    ref={sliderRef}
                    onScroll={(ev) => {
                        setSliderPosition(ev.currentTarget.scrollLeft);
                    }}
                    className="flex h-[200px] pb-10 overflow-x-auto sm:snap-x sm:snap-mandatory group/arrows"
                >
                    {props.content.map((slide: any) => (
                        <Link href={`/${props.type}/${slide.attributes.UID}`} key={slide.id}>
                            <li
                                className="snap-start snap-always shrink-0  scroll-mx-5 ml-4 py-2"
                            >

                                <div className="slide-center relative flex flex-col w-[300px] group/item">
                                    <div className="bg-foreground-color/5 aspect-[4/2] rounded-xl middleshadow hover:scale-[102%] hover:bg-foreground-color/10 transition-all duration-500 overflow-hidden flex-col flex justify-end bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 p-3">
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
                                        <Tags allTags={slide.attributes} />
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="duration-700 absolute translate-y-[-80px] pl-8 sm:block hidden">
                <button
                    disabled={sliderPosition === 0}
                    onClick={() => goToPreviousSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="w-3 h-3 text-primary-1" />
                    <div className="w-8 h-8 absolute -z-10 bg-foreground-color rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
            <div className="duration-700 absolute right-0 translate-y-[-80px] pr-8 sm:block hidden">
                <button
                    disabled={scrolledToEndOfSlider || currentSlide === props.content.length || !hasScrollableArea}
                    onClick={() => goToNextSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="rotate-180 w-3 h-3 text-primary-1" />
                    <div className="w-8 h-8 absolute -z-10 bg-foreground-color rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel