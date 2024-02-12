import Home from '@/components/Home'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="">
        <Navbar/>
      </div>
      <Home/>
    </div>
  )
}

export default page