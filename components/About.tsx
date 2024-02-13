"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import { Button } from './ui/button';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mt-16 min-h-screen bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute left-0 top-0 h-full md:w-3/4 w-full bg-cover opacity-40"
        style={{ backgroundImage: 'url(bg2.gif)' }}
      ></div>
      <div className="relative z-10 text-white md:p-10 p-6">
        <div className="mt-12 flex items-center justify-center md:gap-y-16 gap-y-8 md:mx-16 flex-col">
          <Heading title="About Us" />
          <p className={`md:text-3xl text-2xl font-sans font-normal text-center md:leading-10 ${isHovered ? 'block' : 'hidden'}`}>
            Dive into the exciting world of AI/ML and its impact on engineering with the CI Clun! Build &quot;cool stuff&quot; through hands-on projects and explore its potential across various fields. Join us and be part of the future!
          </p>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? 60 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: isHovered ? 'all' : 'none' }}
          >
            <Button className="mt-4" variant={'primary'} size={'primary'}>
              Know More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
