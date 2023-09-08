import React from 'react'
import Navbar from './navbar'
import HeroPage from './HeroPage'
import Subscription from '../Subscription/Subscription'
import ProfileCard from "../UserIntractpage/ProfileCard"


const LandingPage = () => {
  return (
    <div>
       <Navbar/>
       <HeroPage/>
      <Subscription/>
      <ProfileCard/>
    </div>
  )
}

export default LandingPage