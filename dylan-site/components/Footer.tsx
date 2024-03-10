"use client"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from 'next/navigation'
import { useScrollDirection } from 'react-use-scroll-direction'
import { Rotate as Hamburger } from 'hamburger-react'
import SlideText from "@/components/animated-components/SlideText";
import NavMenu from "./NavMenu";
import classNames from "classnames";
import Link from 'next/link';
import { useTheme } from "next-themes";
import Socials from "./Socials";


const Footer = (props: any) => {


    return (
        <div className="w-full h-fit relative text-gray-400">
            <div className="h-full flex flex-col justify-center">
                <div className="flex-col align-middle justify-center mx-auto">
                    <div className="scale-75 text-gray-400">
                        <Socials />
                    </div>
                </div>

                <div className="font-thin text-xs text-center pb-2">
                    <span className="pr-[4px]">
                        © 2024 All rights reserved
                    </span>
                    <span className="hidden md:inline">

                        - Desinged and Developed by Dylan Borchert
                    </span>
                </div>
            </div>

        </div>
    )

}

export default Footer;
