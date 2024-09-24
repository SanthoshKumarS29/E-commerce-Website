import React from 'react'
import storeData from '../groceryDatas/stores.json'
import storeImg from '/store-logo/store-graphics.svg'

const Store = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto p-4'>
            <div className='flex gap-4 text-[#0aad0a] font-medium text-base'>
                <p>Home</p>
                <p>/</p>
                <p>Stores</p>
                <p>/</p>
                <p className='text-[#8c8e8d]'>Store List</p>
            </div>
            <div>
                <div className='flex items-center justify-between py-8 bg-[#f0f3f2] rounded-2xl my-6'>
                    <p className='sm:text-xl md:text-2xl lg:text-4xl font-medium pl-6'>Stores</p>
                    <img src={storeImg} alt="" className='w-[200px] md:w-[350px] lg:w-[450px]'/>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-medium'>Whe have <span className='text-[#0aad0a] font-bold'>36</span> vendors now</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                        {storeData.list.map((name,index)=>(
                            <div key={index} className='flex flex-col md:flex-row lg:flex-col xl:flex-row border-2 p-8 gap-5 hover:border-[#0aad0a] duration-150 hover:shadow-md'>
                                <div>
                                    <img src={name['stimg']} alt="Svg" className='rounded-full sm:w-[60px] md:w-[80px] lg:w-[100px]'/>
                                </div>
                                <div>
                                    <h2 className='text-xl font-medium mb-1'>{name['st-title']}</h2>
                                    <ul className='flex gap-5 text-sm font-normal text-gray-400'>
                                        <li>{name['st-des1']}</li>
                                        <li>{name['st-des2']}</li>
                                        <li>{name['st-des3']}</li>
                                    </ul>
                                    <div className='my-5 flex gap-5'>
                                        <p className=' text-sm font-normal text-gray-600'>{name['st-delivery']}</p>
                                        <p className=' text-sm font-normal text-gray-600'>{name['st-available']}</p>
                                    </div>
                                    <div className='flex gap-2 text-[13px] text-black '>
                                        <p className='bg-gray-200 px-2 py-1 rounded-lg '>{name['st-distance']}</p>
                                        <p className='bg-gray-200 px-2 py-1 rounded-lg'>{name['st-price']}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-medium text-2xl mt-9'>Recently Viewed</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                        {storeData.list.slice(3,9).map((name,index)=>(
                            <div key={index} className='flex flex-col md:flex-row lg:flex-col xl:flex-row border-2 p-8 gap-5 hover:border-[#0aad0a] duration-150 hover:shadow-md'>
                                <div>
                                    <img src={name['stimg']} alt="Svg" className='rounded-full sm:w-[60px] md:w-[80px] lg:w-[100px]'/>
                                </div>
                                <div>
                                    <h2 className='text-xl font-medium mb-1'>{name['st-title']}</h2>
                                    <ul className='flex gap-5 text-sm font-normal text-gray-400'>
                                        <li>{name['st-des1']}</li>
                                        <li>{name['st-des2']}</li>
                                        <li>{name['st-des3']}</li>
                                    </ul>
                                    <div className='my-5'>
                                        <p className='flex gap-5 text-sm font-normal text-gray-600'>{name['st-delivery']}</p>
                                        <p className='flex gap-5 text-sm font-normal text-gray-600'>{name['st-available']}</p>
                                    </div>
                                    <div className='flex flex-row lg:flex-row gap-2 text-[13px] text-black '>
                                        <p className='bg-gray-200 px-2 py-1 rounded-lg '>{name['st-distance']}</p>
                                        <p className='bg-gray-200 px-2 py-1 rounded-lg'>{name['st-price']}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store