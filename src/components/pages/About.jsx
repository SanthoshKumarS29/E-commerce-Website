import React from 'react';
import officers from '../groceryDatas/leaders.json';

const About = () => {


  return (
    <div>
      <div className='max-w-7xl mx-auto p-4 lg:p-0'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-20 p-5 md:p-12 lg:p-16'>
          <div className='w-full lg:w-[350px] space-y-6'>
            <h1 className='text-4xl font-bold'>The Future of Grocery Delivery:</h1>
            <p className='text-xl font-medium text-gray-500'>
              By powering the future of grocery with our retail partners, we give everyone access to the food they love and more time to enjoy it together.
            </p>
          </div>
          <div>
            <img src="src/assets/about/about-img.jpg" alt="About" className='rounded-lg' />
          </div>
        </div>

        <div>
          <h1 className='text-3xl font-bold my-4'>Ready to get started?</h1>
          <div className='flex flex-col lg:flex-row gap-10 items-center'>
            <div className="bg-[#f0f3f2] p-10 space-y-5 w-full lg:w-[500px]">
              <img src="src/assets/about/about-icons-1.svg" alt="Grow my business" />
              <h1 className='text-xl font-bold'>Grow my business with Fresh Cart</h1>
              <p className='text-base font-normal'>
                Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
              </p>
              <button className='bg-[#001e2b] px-4 py-2 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-700'>
                FreshCart Platform
              </button>
            </div>

            <div className="bg-[#f0f3f2] p-10 space-y-5 w-full lg:w-[500px]">
              <img src="src/assets/about/about-icons-2.svg" alt="Advertise" />
              <h1 className='text-xl font-bold'>Advertise my brand on Freshcart</h1>
              <p className='text-base font-normal'>
                Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.
              </p>
              <button className='bg-[#001e2b] px-4 py-2 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-700'>
                FreshCart ads
              </button>
            </div>

            <div className="bg-[#f0f3f2] p-10 space-y-5 w-full lg:w-[500px]">
              <img src="src/assets/about/about-icons-3.svg" alt="Learn More" />
              <h1 className='text-xl font-bold'>Learn more about Freshcart</h1>
              <p className='text-base font-normal'>
                Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.
              </p>
              <button className='bg-[#001e2b] px-4 py-2 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-700'>
                Learn More
              </button>
            </div>
          </div>

          <p className='my-4 text-sm text-gray-400'>
            For assistance using FreshCart services, please visit our{' '}
            <span className='text-[#0aad0a] cursor-pointer'>Help Center</span>
          </p>
        </div>
      </div>

      <div className='w-full bg-[#198754] my-5'>
        <div className='max-w-7xl mx-auto text-white font-bold p-5 lg:p-0 lg:py-28 space-y-10'>
          <div className='text-4xl flex flex-col lg:flex-row gap-5'>
            <p>Trusted by retailers.</p>
            <p>Loved by customers.</p>
          </div>
          <div className='py-2'>
            <p>We give everyone access to the food they love and more time to enjoy it together.</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4'>
            <p className='flex flex-col text-5xl'>
              500K <span className='text-sm'>Shoppers</span>
            </p>
            <p className='flex flex-col text-5xl'>
              4,500K <span className='text-sm'>Cities</span>
            </p>
            <p className='flex flex-col text-5xl'>
              40K <span className='text-sm'>Stores</span>
            </p>
            <p className='flex flex-col text-5xl'>
              650K <span className='text-sm'>Retail Brands</span>
            </p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='max-w-7xl mx-auto flex justify-center items-center py-6 mb-5'>
          <h1 className='text-3xl font-bold'>Our Leadership</h1>
        </div>

        <div className='flex flex-col md:flex-row transition-transform duration-1000 ease-in-out gap-2 lg:gap-5 overflow-x-hidden'>
          {officers.members.map((member, index) => (
            <div key={index}>
              <div className='relative bg-[#f0f3f2] my-9'>
                <img src={member.people} alt="Leader" className='pt-20' />
                <div className='absolute top-0 p-5 text-sm space-y-2'>
                  <h4 className='font-bold'>{member.name}</h4>
                  <p className='text-sm font-bold text-gray-500'>{member.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
