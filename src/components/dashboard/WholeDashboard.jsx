import React, { useState } from 'react'
import SideBar from './SideBar'
import ContentBar from './ContentBar'
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";


const WholeDashboard = () => {
  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
        <div className='flex'>
          <div className= 'border-2 w-[25%] lg:w-[30%] h-screen overflow-y-scroll scrollbar-hide hidden lg:block'>
            <SideBar />
          </div>
          <div className='w-[100%] h-screen overflow-y-scroll'>
            <ContentBar />
          </div>
        </div>
    </div>
  )
}

export default WholeDashboard