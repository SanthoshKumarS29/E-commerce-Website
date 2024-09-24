import React,{useState} from 'react'
import { IoCartOutline,IoBagOutline,IoPeopleOutline,IoNewspaperOutline } from "react-icons/io5";
import { PiBuilding,PiInfinityThin,PiAppleLogo } from "react-icons/pi";
import { IoIosRefresh,IoIosStarOutline } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { CiSettings,CiHeadphones,CiCircleQuestion } from "react-icons/ci";
import { FaGooglePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const SideBar = () => {

  return (
    <div>
      <div className='p-4'>

        <div className=''>
          <Link to='/E-commerce-Website/' className='flex bg-white p-2'>
            <IoCartOutline size={35} className='text-[#0aad0a]' />
            <button className='text-2xl font-bold'>FreshCart</button>
          </Link>
        </div>
        <div>
          <div className='py-4'>
            <div className='flex bg-[#ceefce] px-5 py-3 rounded-lg items-center gap-5 mb-5'>
              <IoIosRefresh size={20}/>
              <button>Dashboard</button>
            </div>
            <p className='text-sm text-gray-400 font-medium mb-3'>Store Managements</p>
            <div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoCartOutline size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Products</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <TbCategory size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Categories</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoBagOutline size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Orders</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoBagOutline size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Orders</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <PiBuilding size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Sellers / Vendors</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoPeopleOutline size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Customers</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoIosStarOutline size={20} />
                <p className='text-[15px] font-medium text-gray-500'>Reviews</p>
              </div>
            </div>
          </div>

          <div>
            <p className='text-sm text-gray-400 font-medium mb-3'>Site Settings <span className='ml-7 text-[11px] bg-blue-200 px-2 py-1 rounded-lg text-black'>Coming Soon</span></p>
            <div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg hover:bg-gray-200 duration-200'>
                <IoNewspaperOutline />
                <p className='text-[15px] font-medium text-gray-500'>Blogs</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg text-gray-400'>
                <GrGallery />
                <p className='text-[15px] font-medium'>Media</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg text-gray-400'>
                <CiSettings size={23}/>
                <p className='text-[15px] font-medium'>Store Settings</p>
              </div>
            </div>
          </div>

          <div>
            <p className='text-sm text-gray-400 font-medium mb-3'>Support <span className='ml-7 text-[11px] bg-blue-200 px-2 py-1 rounded-lg text-black'>Coming Soon</span></p>
            <div>
              <div className='flex items-center gap-5 px-2 py-3 text-gray-400'>
                <CiHeadphones />
                <p className='text-[15px] font-medium text-gray-400'>Support Task</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg text-gray-400'>
                <CiCircleQuestion />
                <p className='text-[15px] font-medium'>Help Center</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg text-gray-400'>
                <PiInfinityThin size={23}/>
                <p className='text-[15px] font-medium'>How FreshCart Works</p>
              </div>
            </div>
          </div>

          <div>
            <p className='text-sm text-gray-400 font-medium mb-3'>Our Apps</p>
            <div>
              <div className='flex items-center gap-5 px-2 py-3 text-gray-400'>
                <PiAppleLogo />
                <p className='text-[15px] font-medium '>Apple Store</p>
              </div>
              <div className='flex items-center gap-5 px-2 py-3 rounded-lg text-gray-400'>
                <FaGooglePlay />
                <p className='text-[15px] font-medium'>Google Playstore</p>
              </div>
            </div>
          </div>        
        </div>

      </div>
    </div>
  )
}

export default SideBar