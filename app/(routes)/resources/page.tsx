import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#030169] to-black flex flex-col px-20 py-10 gap-y-28'>
      <div className="flex gap-x-16">
        <Image
          src='/im1.png'
          alt='image'
          width={500}
          height={500}
        />
        <div className='flex flex-col justify-center'>
          <h1 className='text-6xl font-bold py-10'>
            From Sci-Fi to Reality
          </h1>
          <p className='text-3xl font-medium'>
            5 Ways AI-Powered Robots are AIready Shaping Our Lives.
          </p>
          <Button variant='primary' size='primary' className='mt-16'>
            Read More
          </Button>
        </div>
      </div>

      <div className="flex gap-x-16">
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
    </div>
  )
}

export default page