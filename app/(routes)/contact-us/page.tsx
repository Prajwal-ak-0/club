"use client"

import React from 'react'
import Image from 'next/image'
import ContactForm from '../_components/ContactForm'

const page = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg6.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex items-center justify-center space-y-4 py-4">
        <ContactForm/>
      </div>
    </div>
  )
}

export default page