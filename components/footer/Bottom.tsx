import Image from 'next/image'
import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Bottom = () => {
  return (
    <div className='h-[40vh] w-full bg-black items-center justify-center px-auto mx-auto gap-x-6  py-20 flex'>
        <a href="https://msrit.edu/" target="_blank" rel="noopener noreferrer">
            <Image
                src='/clg_logo.png'
                alt='bottom'
                width={100}
                height={100}
            />            
        </a>

        <div className="flex flex-col">
            <h1 className='text-4xl font-semibold text-white'>
                Join our Community
            </h1>
            <div className="flex justify-around text-white">
            <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer">
                <AiOutlineYoutube className='w-10 h-16' />
            </a>
            <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE/" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className='w-10 h-16'/>
            </a>
            <a href="https://twitter.com/YOUR_TWITTER_HANDLE" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter className='w-10 h-16'/>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Bottom