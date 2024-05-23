"use client";

import Image from "next/image"
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const navitems = [
        {
            label: 'About Us',
            onClick: () => {
                router.push('/about-us');
            },
        },
        {
            label: 'Resources',
            onClick: () => {
                router.push('/resources');
            },
        },
        {
            label: 'What\'s on',
            onClick: () => {
                router.push('/events')
            },
        },
        {
            label: 'Register',
            onClick: () => {
                router.push('https://docs.google.com/forms/d/e/1FAIpQLScha33NmqquIUcfRWT2pElM4E4L_tecYcEENuJusDmjmz3PCg/viewform?usp=sf_link');
            },
        }
    ];

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    if(!isClient) return null;

    return (
        <>
            <div className={`h-20 bg-[#151515] flex items-center justify-between ${isOpen ? 'fixed top-0 w-full z-50' : ''}`}>
                <div className="mx-4">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="block cursor-pointer md:block"
                        height="120"
                        width="120"
                    />
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                        p-[12px]
                        mr-2
                        z-50
                        border-[1px] 
                        border-black
                        bg-white
                        flex 
                        flex-row 
                        items-center 
                        gap-3 
                        rounded-full 
                        cursor-pointer 
                        transition
                        "
                >
                    {
                        isOpen ? (
                            <AiOutlineClose
                                size={24}
                                color="black"
                            />
                        ) : (
                            <AiOutlineMenu
                                size={24}
                                color="black"
                            />
                        )
                    }
                </div>
            </div>
            {isOpen && (
                <div
                    className="
                        fixed
                        z-50
                        shadow-md
                        w-full
                        bg-black
                        text-white 
                        overflow-hidden 
                        right-0 
                        top-20 
                        py-4
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {
                            navitems.map((item, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        label={item.label}
                                        onClick={item.onClick}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileNavbar