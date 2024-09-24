import React from 'react'
import blog from "../groceryDatas/blog.json"
import {FaCaretRight,FaCaretLeft } from 'react-icons/fa'
import blogImg from '/blog/blog-large.jpg'


const Blog = () => {


  return (
    <div>
        <div className='max-w-7xl mx-auto p-4'>
            <div className='flex gap-4 text-[#0aad0a] font-medium text-base'>
                <p>Home</p>
                <p>/</p>
                <p>Blog</p>
                <p>/</p>
              <p className='text-[#8c8e8d]'>FreshCart Blog</p>
            </div>

            <h1 className='text-4xl font-bold my-8'>FreshCart Blog</h1>

            <div>
                <div className='flex flex-col lg:flex-row items-center gap-10'>
                    <div className='overflow-hidden'>
                        <img src={blogImg} alt="Nothing" className='transition duration-300 ease-in-out rounded-lg hover:scale-110 '/>
                    </div>
                    <div className='w-full lg:w-[600px] space-y-5'>
                        <h1 className='text-3xl font-bold hover:text-[#0aad0a]'>Garlic Cream Bucatini with Peas and Asparagus</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque bibendum egestas sed quis justo. Integer non rhoncus diam. Nullam eget dapibus lectus, vitae condimentum sem.</p>
                        <div className='flex justify-between text-sm text-gray-400'>
                            <p>25 April 2023</p>
                            <p>Read time: <span className='text-black'>6min</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 items-center'>
                {blog.recipe.map((blg,index)=>(
                <div key={index} className='w-full lg:max-w-sm'>
                    <div className='w-full lg:max-w-sm overflow-hidden'>
                        <img src={blg['bl-img']} alt="nothing" className='w-full lg:max-w-sm transition duration-300 ease-in-out rounded-lg hover:scale-110 '/>
                    </div>
                    <div className='space-y-4 my-3'>
                        <p className='text-[#0aad0a]'>{blg['bl-const-name']}</p>
                        <h1 className='text-base font-bold hover:text-[#0aad0a]'>{blg['bl-title']}</h1>
                        <p className='text-[15px] text-gray-400'>{blg['bl-des']}</p>
                        <div className='flex justify-between text-sm text-gray-400'>
                            <p>{blg['bl-date']}</p>
                            <p>{blg['bl-name']} <span className='text-black'>{blg['bl-time']}</span></p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className='flex items-center gap-2 mt-6'>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'><FaCaretLeft /></p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'>1</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'>2</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'>...</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'>12</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a] duration-200'><FaCaretRight/></p>
            </div>
        </div>
    </div>
  )
}

export default Blog