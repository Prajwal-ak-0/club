import Image from 'next/image'
import React from 'react'

interface JoinCardProps {
    title: string
    description: string
}

const JoinCard: React.FC<JoinCardProps> = ({ title, description }) => {
    return (
        <div className="flex">
            <Image
                className='md:pb-40 max-md:h-6 mr-4 max-md:w-6 pt-2 md:mr-10'
                src='/bullet.png'
                alt="Bullet"
                width={30}
                height={30}
            />
            <div className="flex flex-1 flex-col shadow-lg rounded-lg">
            <h1 className='md:text-4xl text-xl font-bold md:pb-4 pb-2'>
                {title}
            </h1>
            <p className="md:text-3xl text-lg md:pb-10  font-sans font-normal text-left md:leading-10 block">
                {description}
            </p>
        </div>
        </div>
    )
}

export default JoinCard