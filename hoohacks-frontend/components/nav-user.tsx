"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/toggle-mode"

import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useEffect, useState } from "react";

export default function NavigationBar() {
    const pathname = usePathname();

    const [isSolid, setIsSolid] = useState(false);

    function toggleVisability() {
        if (window.scrollY > 300) {
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

    return (
        <nav className={(isSolid ? "shadow-gray-800 bg-neutral-200 dark:bg-neutral-900 bg-opacity-20 " : "") + "px-12 transition-all duration-300 fixed top-0 z-20 pt-2 pb-3 w-full "}>
            <div className="grid mt-3 mb-1 grid-cols-2 lg:grid-cols-3">
                <div className="inline-flex my-2">
                    <Link href="/" className="inline-flex">
                        <Image src="/hoohacks-owl-logo.png" alt="HooHacks" width={45} height={40} className="mr-2 bg-black dark:bg-transparent px-2 py-2 rounded-md" />
                        <h1 className="text-2xl font-semibold px-2 py-1">HooStocks</h1>
                    </Link>
                </div>
                <div className="inline-flex grid justify-items-center ">

                    {/* HOW DO I MAKE THE COMMAND BAR THE FULL SIZE OF THE PARENT DIV */}

                    {/* Fixed, had to remove the grid from the Command className -Yatin */}

                    <Command className="justify-items-center w-full">
                        <CommandInput placeholder="Search Stock Ticker" />
                        <CommandList></CommandList>
                    </Command>
                </div>
                <div className="lg:hidden inline-flex justify-end my-2 py-1">
                </div>
                <div className="hidden lg:inline-flex gap-2 justify-end my-2 py-1">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="w-0 br-10 rounded-full">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <h1 className="p-2 font-bold">My Account</h1>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}
