"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import { Button } from './ui/button';
import Image from 'next/image';

const Activities = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative max-md:hidden min-h-screen md:mt-10 bg-black"
            >
                <div className="absolute left-0 top-0 w-1/2 h-full" >
                    <Image
                        src="/bg4.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="bg4"
                    />
                </div>
                <div className="absolute flex flex-row-reverse w-1/2 z-10 text-white md:p-10 p-6 right-0 justify-end">
                    <div className="flex items-center justify-center md:gap-y-12 gap-y-8 md:mx-16 flex-col">
                        <Heading title="Activities & Events" />
                        <p className={`md:text-3xl text-xl font-sans font-normal text-left md:leading-10 ${isHovered ? 'block' : 'hidden'}`} >
                            Discover a diverse range of learning opportunities, networking sessions and hands-on experiences in AI/ML.
                        </p>
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
                <div className="absolute left-0 h-full w-full top-0 opacity-80" >
                    <Image
                        src="/bg4.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="bg4"
                    />
                </div>
                <div className="absolute bg-transparent right-0 w-1/2 z-10 text-white md:p-10 py-6 pt-20 pr-1">
                    <div className="mt-12 flex items-center ml-6 justify-center md:gap-y-12 gap-y-10 md:mx-16 flex-col">
                        <Heading center title="Activities & Events" />
                        <p className={`md:text-3xl text-center text-xl font-sans font-normal md:leading-10 ${isHovered ? 'block' : 'hidden'}`}>
                            Discover a diverse range of learning opportunities, networking sessions and hands-on experiences in AI/ML.
                        </p>
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

export default Activities;
