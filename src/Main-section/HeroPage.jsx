import React from 'react'
import Imagebox from './Imagebox'

const HeroPage = () => {
  return (
    <>
<div className="Hero-section w-full px-4 flex justify-center " >
  <div className="wapper w-8/12 ">
  <div className="hero-section-wapper   pt-[10rem]">
  <h1 className=' mt-5 text-center pt-5 text-8xl'>Make your Parsonality <br /><span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-indigo-600'>wonderfull</span></h1>
  <p className=' text-center text-2xl text-gray-500 py-10  px-20 tracking-tight'> Unlock Your Potential and Shape Your Destiny: Master Your Personality.</p>
  </div>
  </div>
</div>
<Imagebox/>
    </>

  )
}

export default HeroPage