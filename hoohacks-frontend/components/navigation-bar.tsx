"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname } from "next/navigation";

import { fak } from "@awesome.me/kit-ce90c26cd7/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
    const pathname = usePathname();

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
            path: "/about",
            isActive: () => pathname === "/about",
        }, {
            name: "Contact",
            path: "/contact",
            isActive: () => pathname === "/contact",
        }, {
            name: "Blog",
            path: "/blog",
            isActive: () => pathname === "/blog",
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
            <li key={key}>
                <Link href={item.path} className={(item.isActive() ? "text-bold" : "") + ""}>
                    <p>{item.name}</p>
                </Link>
            </li>
        )
    }

    return (
       <nav className="px-12 relative pt-2 pb-3 w-full overflow-hidden">
            <div className="grid mt-3 grid-cols-2 lg:grid-cols-6">
                <div className="inline-flex mt-2">
                    <Link href="/" className="inline-flex">
                        <Image src="/hoohacks-owl-logo.png" alt="HooHacks" width={40} height={40} className="mr-2"/>
                        <h1 className="text-2xl font-semibold">HooStocks</h1>
                    </Link>
                </div>
            </div>
       </nav>
    )
}
