import React from 'react'

interface HeadingProps {
    title: string
    subtitle?: string
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle
}) => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className="md:text-6xl text-4xl font-sans w-fit font-semibold">
                {title}
            </h1>
            {subtitle &&
                <h2 className="text-2xl font-sans font-medium">
                    {subtitle}
                </h2>}
        </div>
    )
}

export default Heading