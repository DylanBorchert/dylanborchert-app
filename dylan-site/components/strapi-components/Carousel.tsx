import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chevron } from "../icons/chevron";
import classNames from "classnames";
import Link from "next/link";

const slideWidth = 300;
const slideMargin = 40;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
    console.log(slider);
    console.log(slideIndex);
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
        window.addEventListener("resize", handleResize, false);
        if (!sliderRef.current) {
            setHasScrollableArea(false);
        } else {
            setHasScrollableArea(sliderRef.current.scrollWidth > sliderRef.current.clientWidth)
        }
        console.log(props.content);
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
                        <li
                            className="snap-start snap-always shrink-0 text-white scroll-mx-5 ml-5 py-2"
                            key={slide.id}
                        >

                            <div className="slide-center relative flex flex-col w-[300px] group/item">
                                <div className="bg-white/5 aspect-[4/2] rounded-xl shadow-xl hover:scale-[102%] hover:bg-white/10 transition-all duration-500 overflow-hidden flex-col flex justify-end">
                                    <div className=" absolute top-0">
                                        <p className=" font-semibold px-5 pt-3">
                                            {slide.attributes.title}
                                        </p>
                                        <p className=" text-xs px-5">
                                            {slide.attributes.summary}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 flex w-full justify-between">
                                        <div className="flex flex-col justify-center text-white/">
                                            <p className="text-sm h-5 px-5">
                                                {new Date(slide.attributes.updatedAt).toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                        </div>
                                        <Link href={`${props.type}/${slide.attributes.UID}`}>
                                            <div className=" bg-white/5 m-3 py-2 px-3 rounded-full text-sm group-hover/item:bg-primary-1 group-hover/item:text-black">
                                                Read
                                                <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className="inline-flex shrink-0 text-xl ml-auto opacity-60"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-700 absolute translate-y-[-80px] pl-8 sm:block hidden">
                <button
                    disabled={sliderPosition === 0}
                    onClick={() => goToPreviousSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="w-3 h-3 text-primary-1" />
                    <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-700 absolute right-0 translate-y-[-80px] pr-8 sm:block hidden">
                <button
                    disabled={scrolledToEndOfSlider || currentSlide === props.content.length || !hasScrollableArea}
                    onClick={() => goToNextSlide()}
                    className={"disabled:opacity-0 scale-90 disabled: w-8 h-8 flex items-center justify-center translate-y-[-50%] hover:scale-110 hover:cursor-pointer transform transition-all duration-500"}
                >
                    <Chevron className="rotate-180 w-3 h-3 text-primary-1" />
                    <div className="w-8 h-8 absolute -z-10 bg-white rounded-full opacity-20"></div>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel