import React from 'react'
import NavBar from '../Components/Core/DashBoardHome/NavBar'
import HeroSection from '../Components/Core/DashBoardHome/HeroSection'

function DashBoardsHome() {
  return (
    <div className='bg-richblack-600 h-screen text-white'>
      <nav>
        <NavBar/>
        <HeroSection/>
      </nav>
    </div>
  )
}

export default DashBoardsHome