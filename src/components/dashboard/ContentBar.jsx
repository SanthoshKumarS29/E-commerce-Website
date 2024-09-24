import React, { useState } from 'react'
import { CiBellOn } from "react-icons/ci";
import { CgDollar } from "react-icons/cg";
import { IoBagOutline,IoPeopleCircleOutline,IoBulbOutline } from "react-icons/io5";
import LineChart from './chart/LineCHart';
import PieChart from './chart/PieChart'
import TopNabar from './chart/TopNabar';



const ContentBar = () => {
  return (
    <div>
      <div>
        <TopNabar />
      </div>

      <div className='p-5 mt-3 xl:max-w-7xl xl:mx-auto'>
        <div className='relative -z-40'>
          <img src="src/assets/dashboard/slider-image-1.jpg" alt="nothing" className='h-[240px] w-full object-cover rounded-3xl'/>
          <div className='absolute top-0 px-5 py-10 lg:p-16 space-y-2'>
            <h1 className='text-xl lg:text-5xl font-bold lg:font-normal'>Welcome Back! FreshCart</h1>
            <p>FreshCart is SImple & Clean for Developer and designer</p>
            <button className='bg-[#0aad0a] text-sm lg:text-base px-4 py-2 text-white rounded-lg'>Create Product</button>
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3 p-5 xl:max-w-7xl xl:mx-auto'>
        <div className='p-4 bg-white shadow-lg rounded-lg space-y-5'>
          <div className='flex items-center justify-between'>
            <b className='text-xl font-bold'>Earnings</b>
            <CgDollar size={40} className='rounded-full bg-[#f8d6d6] text-[#581313] p-2'/>
          </div>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>$93,436.78</h1>
            <p className='text-gray-400 text-sm'>Monthly Revenue</p>
          </div>
        </div>
        <div className='p-4 bg-white shadow-lg rounded-lg space-y-5'>
          <div className='flex items-center justify-between'>
            <b className='text-xl font-bold'>Orders</b>
            <IoBagOutline size={40} className='rounded-full bg-[#fff3cd] text-[#846e2b] p-2'/>
          </div>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>$42,338</h1>
            <p className='text-gray-400 text-sm'>35+ New Sales</p>
          </div>
        </div>
        <div className='p-4 bg-white shadow-lg rounded-lg space-y-5'>
          <div className='flex items-center justify-between'>
            <b className='text-xl font-bold'>Customer</b>
            <IoPeopleCircleOutline size={40} className='rounded-full bg-[#cce1fe] text-[#2b5284] p-2'/>
          </div>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>$39,354</h1>
            <p className='text-gray-400 text-sm'>30+  New in 2 Days</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-3 items-center p-5 xl:max-w-7xl xl:mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-5 lg:w-[70%] hidden lg:block'>
          <h1 className='font-bold text-xl'>Renvue</h1>
          <LineChart />
        </div>
        <div className='bg-white shadow-lg rounded-lg p-2 lg:p-5'>
          <h1 className='font-bold text-xl'>Total Sales</h1>
          <PieChart />
        </div>
      </div>

      <div className='p-5 xl:max-w-7xl xl:mx-auto'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className="bg-white shadow-lg rounded-lg p-5 lg:w-[55%] ">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>

            {/* Total Profit */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Total Profit</span>
                <span>$1,619 (8.6%)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '8.6%' }}></div>
              </div>
            </div>

            {/* Total Income */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Total Income</span>
                <span>$3,571 (86.4%)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '86.4%' }}></div>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Total Expenses</span>
                <span>$3,430 (74.5%)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '74.5%' }}></div>
              </div>
            </div>
          </div>

          <div className='space-y-5'>
            <div className='flex items-center gap-4 bg-white rounded-lg shadow-lg p-8'>
              <CiBellOn size={35} className='text-yellow-400 font-extrabold'/>
              <h1 className='lg:text-xl font-bold'>Start your day with New Notification <br /><p className='text-sm text-gray-400'>You have <span className='text-blue-500 cursor-pointer'>2 new Notification</span></p> </h1>
            </div>
            <div className='flex items-center gap-4 bg-white rounded-lg shadow-lg p-8'>
              <IoBulbOutline size={35} className='text-green-400 font-extrabold'/>
              <h1 className='lg:text-xl font-bold'>Monitor Your Sales and Profitaability <br /> <span className='text-sm text-blue-500 cursor-pointer'>View Performance</span></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 xl:max-w-7xl xl:mx-auto">
        <div className="bg-white rounded-lg shadow-lg py-5">
          <h1 className="font-bold text-xl py-3 px-3">Recent Order</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-3 text-sm font-semibold text-gray-700">Order Number</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-700">Product Name</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-700">Order Date</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-700">Price</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-200">
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0005</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">Haldiram's Sev Bhujia</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">28 March 2024</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">$18.00</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                    <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0004</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">NutriChoice Digestive</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">24 March 2024</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">$24.00</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                    <span className="bg-orange-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0003</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">Onion Flavour Potato</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">8 Feb 2024</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">$9.00</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                    <span className="bg-red-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Cancel</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0002</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">Blueberry Greek Yogurt</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">20 Jan 2023</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">$12.00</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                    <span className="bg-orange-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0001</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">Slurrp Millet Chocolate</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">8 Jan 2023</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">$18.00</td>
                  <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                    <span className="bg-blue-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Processing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
    
  )
}

export default ContentBar