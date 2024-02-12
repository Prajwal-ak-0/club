import Home from '@/components/Home'
import { NavigationMenuDemo } from '@/components/Nav'
import NewsTicker from '@/components/NewsTicker'
import Logo from '@/components/navbar/Logo'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="h-36 w-full bg-[#151515] flex items-center justify-start">
            <div className='h-fit my-auto  w-fit mx-20'>
                <Logo />
            </div>
            <div className="w-1/2 ml-64">
                <NavigationMenuDemo />
            </div>
        </div>
      <NewsTicker />
      <Home />
    </div>
  )
}

export default page