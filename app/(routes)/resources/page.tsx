import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#030169] to-black flex flex-col md:px-20 px-6 py-10 gap-y-28'>
      <div className="flex md:flex-row flex-col md:gap-x-16">
        <Image
          src='/im1.png'
          alt='image'
          width={500}
          height={500}
        />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-6xl text-2xl md:font-bold font-semibold md:py-10 pt-8 pb-4'>
            From Sci-Fi to Reality
          </h1>
          <p className='md:text-3xl text-lg font-medium'>
            5 Ways AI-Powered Robots are AIready Shaping Our Lives.
          </p>
          <Button variant='primary' size='primary' className='md:mt-16 mt-8'>
            Read More
          </Button>
        </div>
      </div>

      <div className="flex max-md:hidden md:flex-row flex-col gap-x-16">
        <div className='flex flex-col  justify-center'>
          <h1 className='text-6xl font-bold py-10'>
            Teaching Machines to Move
          </h1>
          <p className='text-3xl font-medium'>
            Advanced in AI Locomotion for improved  Robot Agility.
          </p>
          <Button variant='primary' size='primary' className='mt-16'>
            Read More
          </Button>
        </div>
        <Image
          src='/im2.png'
          alt='image'
          width={500}
          height={500}
        />
      </div>

      <div className="flex md:hidden md:flex-row flex-col md:gap-x-16">
        <Image
          src='/im2.png'
          alt='image'
          width={500}
          height={500}
        />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-6xl text-2xl md:font-bold font-semibold md:py-10 pt-8 pb-4'>
            Teaching Machines to Move
          </h1>
          <p className='md:text-3xl text-lg font-medium'>
            Advanced in AI Locomotion for improved  Robot Agility.
          </p>
          <Button variant='primary' size='primary' className='md:mt-16 mt-8'>
            Read More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default page