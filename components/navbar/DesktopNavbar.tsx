"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "./Logo"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function DesktopNavbar() {
    return (
        <NavigationMenu className="bg-[#151515] lg:text-xl md:text-lg">
                    <NavigationMenuList>
                        <NavigationMenuItem className=" text-white hover:text-[#00F6BC]">
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[325px] ">
                                    <ListItem
                                        className="w-[400px]"
                                        title="Magazines & Articles"
                                        href='/resources'
                                    >

                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem >
                        <NavigationMenuItem className=" text-white hover:text-[#00F6BC]">
                            <NavigationMenuTrigger>What&apos;s on</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[325px] ">
                                    <ListItem
                                        className="w-[400px]"
                                        title="Activities & Events"
                                        href='/events'
                                    >

                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className=" text-white hover:text-[#00F6BC]">
                            <Link href="/about-us" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className=" text-white hover:text-[#00F6BC]">
<Link href="https://docs.google.com/forms/d/e/1FAIpQLScha33NmqquIUcfRWT2pElM4E4L_tecYcEENuJusDmjmz3PCg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Register
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href="#"
                    ref={ref}
                    className={cn(
                        "block space-y-1 w-full rounded-md  no-underline outline-none ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-xl font-medium leading-none">{title}</div>
                    <p className=" text-xl ">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
