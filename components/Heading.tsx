import React from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
    right?: boolean
    left?: boolean
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center,
    right,
    left
}) => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className={cn('md:text-4xl text-3xl md:font-bold font-medium', center && 'text-center', right && 'text-right', left && 'text-left')}>
                {title}
            </h1>
            {subtitle && 
                <p className={cn('text-xl font-sans font-normal', center && 'text-center', right && 'text-right', left && 'text-left')}>
                    {subtitle}
                </p>
            }    
        </div>
    )
}

export default Heading