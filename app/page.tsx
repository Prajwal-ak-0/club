import Home from '@/components/Home'
import { DesktopNavbar } from '@/components/navbar/DesktopNavbar'
import NewsTicker from '@/components/NewsTicker'
import Logo from '@/components/navbar/Logo'
import React from 'react'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import About from '@/components/About'

const page = () => {
  return (
    <>
      <div className='max-md:hidden'>
        <div className="h-36 w-full bg-[#151515] flex items-center">
          <div className='h-fit my-auto  w-fit lg:mx-20 md:mx-6'>
            <Logo />
          </div>
          <div className="w-1/2 ml-28">
            <DesktopNavbar />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="bg-black">
        <NewsTicker />
        <Home />
        <About />
      </div>
    </>
  )
}

export default page