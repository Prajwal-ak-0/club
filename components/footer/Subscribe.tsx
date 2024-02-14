"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import EmailForm from './EmailForm'

const Subscribe = () => {
  const [index, setIndex] = useState(0)
  const words = ["Activities", "Events", "Magazines", "Newsletter"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [ words.length])

  return (
    <div className='relative md:w-screen h-[50vh]  md:h-screen w-full'>
        <Image
            src="/bg.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="bg5"
            className="absolute z-0"
        />
        <div className="absolute z-10 flex flex-col md:mx-40 mx-8 md:mt-44 mt-16 gap-y-4">
            <h1 className='md:text-7xl text-4xl text-white font-bold'>
                Subscribe to our
            </h1>
            <motion.div >
                    <motion.h2
                        className='md:text-7xl text-4xl text-[#00F6BC] font-bold'
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {words[index]}
                    </motion.h2>
            </motion.div>
            <EmailForm/>
        </div>
    </div>
  )
}

export default Subscribe