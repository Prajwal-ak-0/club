"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import JoinCard from './JoinCard';

const JoinCardContent = [{
  title: "Dive into project-based learning",
  description: "Build cool stuff through engaging projects that showcase the power of AI/ML in variuos enginerring disciplines."
},
{
  title: "Gain valuable skills",
  description: "Develop practical knowledge and hands-on experience with industry-relevant AI/ML tools and techniques. ️"
},
{
  title: "Be part of a passionate community",
  description: "Connect with like-minded individuals, share ideas, and collaborate on innovative projects"
},
{
  title: "Stay ahead of the curve",
  description: "Prepare for the future by learning about the latest trends and advancements in AI/ML."
}
]

const About = () => {

  return (
    <>
      <div
        className="relative mt-16 md:min-h-screen bg-black"
      >
        <div
          className="absolute left-0 top-0 h-full md:w-3/4  w-full  opacity-80  md:opacity-30"
        >
          <Image
            src="/bg7.gif"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 text-white md:p-10 p-6">
          <div className="mt-12 flex px-4 md:mx-16 flex-col">
            <Heading center title="About Us" />
            <h1 className='md:text-4xl text-xl font-bold md:pb-4 pb-2 md:mt-16 mt-6'>
              What is AI/ML?
            </h1>
            <p className="md:text-3xl text-lg font-sans font-normal text-left md:leading-10 leading-6 block">
              AI/ML is revolutionizing every field imaginable, from medicine and finance to robotics and transportation. But what exactly is it? In our club, you&apos;ll delve into the core concepts, understand its potential, and discover how it&apos;s transforming engineering.            </p>
            <h1 className='md:text-4xl text-xl font-bold md:pb-4 pb-2 md:mt-16 mt-6'>
              Is AI/ML the future?
            </h1>
            <p className="md:text-3xl text-lg  font-sans font-normal text-left md:leading-10 leading-6 block">
              Absolutely! The possibilities are endless, and we&apos;ll explore the exciting applications and ethical considerations surrounding AI/ML.
            </p>
            <h1 className='md:text-4xl text-xl  font-bold md:pb-4 pb-2 md:mt-16 mt-6'>
              Why the hype?
            </h1>
            <p className="md:text-3xl text-lg font-sans font-normal text-left md:leading-10 block">
              AI/ML is changing the game. It&apos;s opening doors to groundbreaking solutions, and the demand for skilled professionals is soaring. We&apos;ll equip you with the knowledge and hands-on experience to thrive in this dynamic field.
            </p>
          </div>
        </div>
      </div>


      <div
        className="relative mt-16 min-h-screen bg-black"
      >
        <div
          className="absolute right-0 top-0 h-full md:w-3/4 w-full flex justify-end bg-cover opacity-80  md:opacity-30 "  >
          <Image
            src="/bg8.gif"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10 text-white md:p-10 p-6">
          <h1 className='md:text-4xl text-2xl font-bold'>
            Join the <span className='text-[#00F6BC]'>CI Club</span>
          </h1>
          <div className="mt-12 flex items-center justify-center md:gap-y-16 gap-y-8  md:mx-16 flex-col">
            {
              JoinCardContent.map((card, index) => (
                <JoinCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))
            }
            <motion.div
              initial={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="mt-4" variant={'primary'} size={'primary'}>
                Register
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
