import Image from 'next/image'
import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Bottom = () => {
  return (
    <div className='h-[40vh] w-full bg-black items-center justify-center px-auto mx-auto gap-x-6  py-20 flex'>
        <Image
            src='/clg_logo.png'
            alt='bottom'
            width={100}
            height={100}
        />
        <div className="flex flex-col">
            <h1 className='text-4xl font-semibold text-white'>
                Join our Community
            </h1>
            <div className="flex justify-around text-white">
                <AiOutlineYoutube className='w-10 h-16' />
                <AiOutlineInstagram className='w-10 h-16'/>
                <AiOutlineTwitter className='w-10 h-16'/>
            </div>
        </div>
    </div>
  )
}

export default Bottom