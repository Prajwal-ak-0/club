"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import { Button } from './ui/button';


const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative max-md:hidden min-h-screen bg-black"
            >
                <div className="absolute right-0 top-0 h-full w-1/2 bg-cover" style={{ backgroundImage: 'url(bg3.png)' }}></div>
                <div className="relative w-1/2 z-10 text-white md:p-10 p-6">
                    <div className="mt-12 flex items-center justify-center md:gap-y-12 gap-y-8 md:mx-16 flex-col">
                        <Heading title="Magazines & Newsletter" />
                        <p className={`md:text-3xl text-xl font-sans font-normal text-left md:leading-10 ${isHovered ? 'block' : 'hidden'}`}>
                            Dive into the cutting edge of technology with in-depth articles, expert insights and ground breaking discoveries in AI/ML.</p>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: isHovered ? 30 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ pointerEvents: isHovered ? 'all' : 'none' }}
                        >
                            <Button className="" variant={'primary'} size={'primary'}>
                                View All
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative min-h-screen md:hidden bg-black"
            >
                <div className="absolute left-0 top-0 h-full w-full bg-cover opacity-80 md:opacity-40" style={{ backgroundImage: 'url(bg3.png)' }}>

                </div>
                <div className="relative w-3/4 z-10 text-white md:p-10 py-6 pt-28 pl- pr-4">
                    <div className="mt-12 flex items-center ml-2 justify-center md:gap-y-12 gap-y-12 md:mx-16 flex-col">
                        <Heading title="Magazines & Newsletter" />
                        <p className={`md:text-3xl text-xl font-sans font-normal text-left md:leading-10 ${isHovered ? 'block' : 'hidden'}`}>
                            Discover a diverse range of learning opportunities, networking sessions and hands-on experiences</p>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: isHovered ? 30 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ pointerEvents: isHovered ? 'all' : 'none' }}
                        >
                            <Button className="" variant={'primary'} size={'primary'}>
                                View All
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
