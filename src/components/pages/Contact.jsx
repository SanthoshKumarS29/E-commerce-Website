import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='max-w-4xl mx-auto p-6'>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold'>Retailers Inquiries</h1>
                <p className='text-xl font-medium text-gray-500'>This form is for retailer inquiries only. For all other customer or shopper support requests, please visit the links below this form.</p>
            </div>
            <div>
                <form className='space-y-4 py-4 my-4'>
                    <div className='flex flex-col lg:flex-row gap-4 justify-between'>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="Company">Company</label>
                        <input type="text" className='w-full border-2 px-3 py-2 rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="Title">Title</label>
                        <input type="text" className='w-full border-2 px-3 py-2 rounded-lg'/>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="Email">Email</label>
                            <input type="text" className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'/>
                        </div>
                    </div>
                    <div className='flex flex-start gap-4 my-6'>
                        <button className='px-4 py-2 border-2 border-green-400 rounded-md text-base font-medium text-white bg-green-400'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact