import React, { useState, useEffect, useContext } from 'react';
import { FaArrowRight, FaArrowLeft,FaRegHeart } from 'react-icons/fa';
import slidesData from '../groceryDatas/datas.json';
import { CiClock2,CiGift } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";
import { CartContext } from '../hooks/Context';
import banner1 from '/images/grocery-banner.png'
import banner2 from '/images/grocery-banner-2.jpg'

const Home = () => {
  const { addToCart } = useContext(CartContext)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prdtSlide, setPrdtSlide] = useState(0);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.banner.length);
    }, 5000); // Change slide every 5 seconds
    
    const featureSlide = setInterval(() => {
      setPrdtSlide((prevSlide) => (prevSlide + 1) % slidesData.featured.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(featureSlide);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextFeaturedSlide = () => {
    setPrdtSlide((prevSlide) => (prevSlide + 1) % slidesData.featured.length);
  };

  const prevFeaturedSlide = () => {
    setPrdtSlide((prevSlide) => (prevSlide - 1 + slidesData.featured.length) % slidesData.featured.length);
  };

  return (
    <div>
      {/* Banner Slider */}
      <div className='max-w-7xl mx-auto lg:mt-8 overflow-hidden'>
        <div
          className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slidesData.banner.map((slide, index) => (
            <div key={index} className='w-full flex-shrink-0 relative p-4 xl:p-0'>
              <img src={slide.img} alt={slide.title} className='object-cover h-[500px] w-full' />
              <div className='absolute top-32 left-5 p-4 md:p-7 lg:p-10 text-white w-[200px] md:w-[350px] lg:w-[600px]'>
                <p className='bg-yellow-500 font-bold p-1 rounded-lg text-xs lg:text-sm w-[200px] text-center mb-2'>{slide.label}</p>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold mb-3 text-[#001e2b] lg:mb-5'>{slide.title}</h1>
                <h5 className=' text-xs lg:text-base font-bold text-gray-400 mb-4 lg:mb-6'>{slide.description}</h5>
                <button className='bg-[#001e2b] text-white px-4 py-2 rounded-lg flex items-center gap-1'>
                  {slide.buttonText} <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3'>
          {slidesData.banner.map((_, index) => (
            <span
              key={index}
              className={`p-1 rounded-full bg-black cursor-pointer transition-all ${
                index === currentSlide ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className='max-w-7xl mx-auto mt-8 p-4 xl:p-0'>
        <div className='flex justify-between items-center mb-5'>
          <h1 className='text-3xl font-bold'>Featured Categories</h1>
          <div className='flex gap-2'>
            <button onClick={prevFeaturedSlide} className='border-2 rounded-full p-2 text-black hover:bg-[#0aad0a] hover:text-white duration-200'>
              <FaArrowLeft />
            </button>
            <button onClick={nextFeaturedSlide} className='border-2 rounded-full p-2 text-black hover:bg-[#0aad0a] hover:text-white duration-200'>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className='overflow-x-hidden'>
          <div
            className='flex gap-5 transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${prdtSlide * (45 / slidesData.featured.length)}%)` }}>
            {slidesData.featured.map((prdt, index) => (
              <div key={index} className='flex-shrink-0 border-2 p-4 hover:border-[#0aad0a] hover:shadow-lg duration-200'>
                <img src={prdt['Prdt-img']} alt={prdt['prd-name']} className='object-cover mb-2' />
                <p className='text-center'>{prdt['prd-name']}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className='max-w-7xl mx-auto my-8 p-4 xl:p-0'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* First Banner */}
          <div className='relative flex-1'>
            <img src={banner1} alt="Fruits & Vegetables" className='w-full h-[220px] md:h-[200px] lg:h-auto rounded-md object-cover' />
            <div className='absolute top-5 md:top-2 left-0 p-5 md:p-10 text-[#001e2b]'>
              <h1 className='text-2xl md:text-2xl lg:text-4xl font-bold mb-2'>Fruits & Vegetables</h1>
              <p className='md:text-lg mb-4'>Get Up to 30% Off</p>
              <button className='bg-[#001e2b] text-white px-4 py-2 rounded-md hover:bg-green-600'>
                Shop Now
              </button>
            </div>
          </div>

          {/* Second Banner */}
          <div className='relative flex-1'>
            <img src={banner2} alt="Freshly Baked Buns" className='w-full h-[220px] md:h-[200px] lg:h-auto rounded-md object-cover' />
            <div className='absolute top-5 md:top-2 left-0 p-5 md:p-10 text-[#001e2b]'>
              <h1 className='text-2xl md:text-2xl lg:text-4xl  font-bold mb-2'>Freshly Baked Buns</h1>
              <p className='md:text-lg mb-4'>Get Up to 25% Off</p>
              <button className='bg-[#001e2b] text-white px-4 py-2 rounded-md hover:bg-green-600'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className='max-w-7xl mx-auto my-8 p-4 xl:p-0'>
        <h1 className='text-3xl font-bold mb-5'>Popular Products</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {slidesData['pop-prdts'].slice(0,10).map((poprds) => (
            <div key={poprds.id} className='space-y-2 border-2 p-2 md:p-4 hover:border-[#0aad0a] hover:shadow-lg duration-200'>
              <FaRegHeart />
              <img src={poprds['pop-img']} alt={poprds['pop-name']} className='object-cover mb-2' />
              <p className='text-sm text-gray-500'>{poprds['pop-title']}</p>
              <h3 className='font-semibold text-[13px] md:text-base'>{poprds['pop-name']}</h3>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-bold'>{poprds['pop-value2']} <span className='line-through text-gray-500'>{poprds['pop-value1']}</span></p>
                <button className='bg-[#0aad0a] text-white px-3 py-1 rounded-md mt-2' onClick={()=> addToCart(poprds)}
                >{poprds['pop-button']}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Best Sale */}
      <div className='max-w-7xl mx-auto my-8 p-4 xl:p-0'>
        <div>
          <h1 className='text-3xl font-medium mb-5'>Daily Best Sales</h1>
        </div>
        <div className="w-full flex overflow-x-auto xl:overflow-visible gap-5 py-6">
          <div className="relative flex-shrink-0 w-[250px] md:w-[300px] lg:w-[300px] h-[400px]">
            <img src="src/assets/images/banner-deal.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 text-white px-4 py-8">
              <h1 className="text-lg md:text-2xl font-bold mb-2">100% Organic Coffee Beans</h1>
              <p className="text-sm md:text-base font-medium mb-5">Get The best deals before close</p>
              <button className="bg-[#0aad0a] px-3 py-2 flex items-center gap-1 rounded-lg text-sm font-medium hover:bg-[#42a442]">Shop Now <FaArrowRight size={15} /></button>
            </div>
          </div>
  
          <div className="relative flex-shrink-0 w-[250px] md:w-[300px] lg:w-[300px] h-[400px]">
            <img src="src/assets/images/assortment-citrus-fruits.png" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 px-4 py-8 text-black">
              <h1 className="text-lg md:text-2xl font-bold mb-2 ">100% Organic Coffee Beans</h1>
              <p className="text-sm md:text-base font-medium mb-5">Get The best deals before close</p>
              <button className="bg-[#0aad0a] px-3 py-2 flex items-center gap-1 rounded-lg text-sm font-medium hover:bg-[#42a442]">Shop Now <FaArrowRight size={15} /></button>
            </div>
          </div>
  
          <div className="relative flex-shrink-0 w-[250px] md:w-[300px] lg:w-[300px] h-[400px]">
            <img src="src/assets/images/banner-deal.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 text-white px-4 py-8">
              <h1 className="text-lg md:text-2xl font-bold mb-2">100% Organic Coffee Beans</h1>
              <p className="text-sm md:text-base font-medium mb-5">Get The best deals before close</p>
              <button className="bg-[#0aad0a] px-3 py-2 flex items-center gap-1 rounded-lg text-sm font-medium hover:bg-[#42a442]">Shop Now <FaArrowRight size={15} /></button>
            </div>
          </div>
          
          <div className="relative flex-shrink-0 w-[250px] md:w-[300px] lg:w-[300px] h-[400px]">
            <img src="src/assets/images/assortment-citrus-fruits.png" alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 text-black px-4 py-8">
              <h1 className="text-lg md:text-2xl font-bold mb-2">100% Organic Coffee Beans</h1>
              <p className="text-sm md:text-base font-medium mb-5">Get The best deals before close</p>
              <button className="bg-[#0aad0a] px-3 py-2 flex items-center gap-1 rounded-lg text-sm font-medium hover:bg-[#42a442]">Shop Now <FaArrowRight size={15} /></button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer above content */}
      <div className='max-w-7xl mx-auto my-8 p-4 xl:p-0'>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 py-6'>
          <div className='space-y-4'>
            <i className='text-[#0aad0a]'><CiClock2 size={45}/></i>
            <h1 className='font-medium text-xl'>10 minute grocery now</h1>
            <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div>
          <div className='space-y-4'>
            <i className='text-[#0aad0a]'><CiGift size={45}/></i>
            <h1 className='font-medium text-xl'>Best Prices & Offers</h1>
            <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
          </div>
          <div className='space-y-4'>
            <i className='text-[#0aad0a]'><BsBoxSeam size={45}/></i>
            <h1 className='font-medium text-xl'>Wide Assortment</h1>
            <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
          </div>
          <div className='space-y-4'>
            <i className='text-[#0aad0a]'><IoReloadOutline size={45}/></i>
            <h1 className='font-medium text-xl'>Easy Returns</h1>
            <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
