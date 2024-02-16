"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col md:px-24 items-center md:gap-y-4 md:py-24 px-10 pt-16 bg-gradient-to-b from-[#030169] to-black'>
      <h1 className='md:text-5xl pb-4 text-xl max-md:text-justify  md:font-bold font-medium text-white'>
        Whoops, there aren&apos;t any activities or Events yet!
      </h1>
      <motion.div
        animate={{ y: ["-10px", "10px", "-10px"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Image src='/im3.png' alt='image' width={300} height={300} />
      </motion.div>
    </div>
  );
};

export default page;