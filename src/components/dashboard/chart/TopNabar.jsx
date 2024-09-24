import React,{useState} from 'react'
import SideBar from '../SideBar'
import { BiCheckDouble } from "react-icons/bi";
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { CiBellOn,CiClock2 } from "react-icons/ci";

const TopNabar = () => {
    const [open,setClose] = useState(false)

    const handleNotify = () => {
      setClose(!open)
    }
    const [nav,setNav]=useState(false)
  
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div>
        {/* navBar */}
      <div className={`fixed bg-white z-50 top-0 left-0 w-[85%] h-full overflow-x-scroll transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <SideBar />
      </div>
      <div className='border-b-2 flex justify-between items-center gap-3 lg:gap-5 px-4 py-2 backdrop-blur-xl'>

        <div className='flex items-center md:gap-4 gap-2'>
          <div>
            <input type="text" placeholder='search' className='w-[150px] md:w-[300px] border-2 p-2 rounded-lg focus:outline-none focus-visible:ring-green-400'/>
          </div>
        </div>
        <div className='flex items-center lg:gap-8 gap-3'>
          <div className="relative flex items-center border-2 bg-gray-300 rounded-full px-2 py-2 hover:bg-white">
            <CiBellOn size={25} onClick={handleNotify}/>
            <span className="absolute -top-2 -right-3 text-xs bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
            {/* Notification bar */}
            {open && (
            <div className='bg-white z-20 top-12 lg:top-6 absolute -right-[90px] lg:right-10 w-[300px] lg:w-[350px] h-[400px] overflow-y-scroll border-2'>
              <div className='flex justify-between items-center px-3 py-6'>
                <div className='space-y-2'>
                  <h2 className='font-bold'>Notificaton</h2>
                  <p className='text-sm'>You have 2 Unread Messages</p>
                </div>
                <div>
                  <BiCheckDouble size={20}/>
                </div>
              </div>
              <div className='flex gap-4 px-3 py-6 bg-gray-200 cursor-pointer'>
                <div>
                  <img src="/dashboard/avatar-1.jpg" alt="" className='h-12 w-12 rounded-full object-cover'/>
                </div>
                <div className='space-y-1 text-sm'>
                  <p className='font-bold'>Your Order is placed <span className='font-normal'>Waiting for Shipping</span></p>
                  <p className='flex items-center gap-2 text-sm'><CiClock2 size={15}/>1 minute ago</p>
                </div>
              </div>
              <div className='flex gap-4 px-3 py-6 hover:bg-gray-200 cursor-pointer'>
                <div>
                  <img src="/dashboard/avatar-5.jpg" alt="" className='h-12 w-12 rounded-full object-cover'/>
                </div>
                <div className='space-y-1 text-sm'>
                  <p className='font-bold'>Santhosh SK <span className='font-normal'>answered to your ordered pending list</span></p>
                  <p className='flex items-center gap-2 text-sm'><CiClock2 size={15}/>2 days ago</p>
                </div>
              </div>
              <div className='flex gap-4 px-3 py-6 hover:bg-gray-200 cursor-pointer'>
                <div>
                  <img src="/dashboard/avatar-2.jpg" alt="" className='h-12 w-12 rounded-full object-cover'/>
                </div>
                <div className='space-y-1 text-sm'>
                  <p className='font-bold'>You have new Messages <span className='font-normal'>2 unread message</span></p>
                </div>
              </div>
              <div className='flex justify-center py-2'>
                <button className='text-green-400'>View All</button>
              </div>
            </div>
            )}
          </div>
          <div>
            <img src="/dashboard/avatar-5.jpg" alt="" className='lg:h-12 h-10 lg:w-12 w-10 rounded-full object-cover'/>
          </div>
          <div className='block lg:hidden' onClick={handleNav}>
              {!nav ? <RxHamburgerMenu size={20}/>: <RxCross1 size={20}/>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default TopNabar