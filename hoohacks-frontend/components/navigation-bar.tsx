"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/toggle-mode"

import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useEffect, useState } from "react";

export default function NavigationBar() {
    const pathname = usePathname();
    
    const [ isSolid, setIsSolid ] = useState(false);

    function toggleVisability() {
        if( window.scrollY > 300 ) {
            setIsSolid(true);
        } else {
            setIsSolid(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisability);

        return () => {
            window.removeEventListener("scroll", toggleVisability);
        }
    }, [])

    const menuItems: {
        name: string;
        path: string;
        isActive: () => boolean;
    }[] = [
        {
            name: "Home",
            path: "/",
            isActive: () => pathname === "/",
        }, {
            name: "About",
            path: "#about",
            isActive: () => pathname === "/about",
        }, {
            name: "Pricing",
            path: "#pricing",
            isActive: () => pathname === "/contact",
        }
    ]

    function MobileMenu({ item, key }: { item: {name: string; path: string; isActive: () => boolean;}, key: number }) {
       return ( 
            <li key={key}>
                <Link href={item.path} className={(item.isActive() ? "text-bold" : "") + ""}>
                    {item.name}
                </Link>
            </li>
        )
    }

    function LargeMenu({ item, key } : { item: {name: string; path: string; isActive: () => boolean; } , key: number }) {
        return (
            <div key={key}>
                <Link href={item.path} className={(item.isActive() ? "text-bold" : "") + ""}>
                    <p>{item.name}</p>
                </Link>
            </div>
        )
    }

    function MobileSheet() {
        
        return (
            <Sheet>
               <SheetTrigger>
                    <FontAwesomeIcon icon={ faBars } /> 
               </SheetTrigger>
               <SheetContent side={"top"}>
                    <SheetTitle className="inline-flex">
                       <Image src="/hoohacks-owl-logo.png" className="mr-2" alt="Hooty-hootenson" width={40} height={40} /> 
                       HooStocks
                    </SheetTitle>
                    <SheetDescription>
                        idk, its a demo. Also it aint that colourful.
                    </SheetDescription>
                    <ul>
                        {
                            menuItems.map((item, index) => (
                                <MobileMenu item={item} key={index} />
                            ))
                        }
                    </ul>
                    <div className="px-4 py-4 relative">
                    <div className="absolute bottom-5 right-5">
                    <ModeToggle/>
                    </div>
                    </div>
               </SheetContent>
            </Sheet>
        )
    }

    return (
       <nav className={(isSolid ? "shadow-gray-800 bg-neutral-200 dark:bg-neutral-900 bg-opacity-20 " : "" ) + "px-12 transition-all duration-300 fixed top-0 z-20 pt-2 pb-3 w-full overflow-hidden"}>
            <div className="grid mt-3 mb-1 grid-cols-2 lg:grid-cols-4">
                <div className="inline-flex my-2">
                    <Link href="/" className="inline-flex">
                        <Image src="/hoohacks-owl-logo.png" alt="HooHacks" width={45} height={40} className="mr-2 bg-black dark:bg-transparent px-2 py-2 rounded-md"/>
                        <h1 className="text-2xl font-semibold px-2 py-1">HooStocks</h1>
                    </Link>
                </div>
                <div className="hidden text-center my-2 col-span-2 py-1 lg:visible lg:flex justify-evenly"> 
                    {
                        menuItems.map((item, index) => (
                            <LargeMenu item={item} key={index} />
                        ))
                    }
                </div>
                <div className="lg:hidden inline-flex justify-end my-2 py-1">
                   <MobileSheet/> 
                </div>
                <div className="hidden lg:inline-flex gap-2 justify-end my-2 py-1">
                        <Button>
                            Login
                        </Button>
                        <Button variant="outline">
                            Sign-up
                        </Button>
                        <ModeToggle/> 
                </div>
            </div>
       </nav>
    )
}
