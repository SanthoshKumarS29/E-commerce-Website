import React ,{useState}from 'react'
import {FaAngleRight,FaArrowRight,FaCaretRight,FaCaretLeft } from 'react-icons/fa'
import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import slidesData from '../groceryDatas/datas.json';
import sideImg from '/images/assortment-citrus-fruits.png'

const Shop = () => {
  const [open, setClose] = useState(null)

  const prdtDropDowns = (index) => {
    setClose(open === index ? null : index);
  };

  const [content,setContent]=useState(false)

  const leftContent =()=>{
     setContent(!content)
  }


  return (
    <div>
      <div className='max-w-7xl mx-auto p-4'>
        <div className='flex gap-4 text-[#0aad0a] font-medium text-base'>
          <p>Home</p>
          <p>/</p>
          <p>Shop</p>
          <p>/</p>
          <p className='text-[#8c8e8d]'>Snacks & Munchies</p>
        </div>
      </div>
      {/* whole Div Start */}
      <div className='max-w-7xl mx-auto p-4'>
        <div className='flex gap-6'>
          {/* lap view */}
          <div className='hidden lg:block'>

            {/* Categoris */}

            <div className='space-y-4'>
              <h1 className='mb-3 text-2xl font-medium'>Categories</h1>
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(0)}>
                <p className='font-normal'>Dairy,Breads & Eggs</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 0 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Milk</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Milk Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Curd & Yogiri</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Eggs</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Breads</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Bun & Bakery</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Butter & More</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cheese</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Panner</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Condensed Milk</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Vegan Drinks</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(1)}>
                <p className='font-normal'>Snacks & Munchies</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 1 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Chips & Crips</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Nachos</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Popcorn</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Mixtures</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Namkeen Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Healthy Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cakes & Roles</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Energy Bars</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Papad & Fryums</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Rusks & Water</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(2)}>
                <p className='font-normal'>Fruits & Vegetables</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 2 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Fresh Vegetables</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Herbs & seasonings</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Fresh Fruits</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Organic Fruits & Vegetables</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cuts & Sprouts</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Exotic Fruits & Veggies</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Flower Bouqouts & Bunches</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(3)}>
                <p className='font-normal'>Cool Drinks & Juices</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 3 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Soft Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Fruit Juice</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Coldpress</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Energy Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Water & ice Cubes</p>
                  <p className='hover:text-[#0aad0a] duration-200'>SOda & Mixers</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Concentrates & Syrups</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Detox & Energy Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Juice Collection</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(4)}>
                <p className='font-normal'>Breakfast & Instant Foods</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 4 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Butter</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Breakfast Cersal</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Noodles, Pasta & Soup</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen,Non-Veg Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen Veg</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Vermicelli</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Instant Mixes</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(5)}>
                <p className='font-normal'>Bakery & Biscuits</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 5 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Cookies</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Glucose & Marie</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Sweet & Salty</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Healthy & Digestive</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cream Biscuits</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Rusks & Wafers</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cakes & Rolls</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Buns & Bakery</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(6)}>
                <p className='font-normal'>Chicken,Meats & Fish</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 6 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Chicken</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Sausage & Ham</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Exotic Meat</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Eggs</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen Non Veg Snacks</p>
                </div>
              )}
            </div>

            {/* search */}

            <div className='space-y-4 mt-5'>
              <h1 className='mb-3 text-2xl font-medium'>Stores</h1>
              <div className='space-y-2'>
                <input type="text" placeholder='Search by Store' className='border-2 px-2 py-1 w-full rounded-lg mb-3'/>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery">E-Grocercy</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="DealShare">DealShare</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="D-Mart">D-Mart</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Blinkit">Blinkit</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="BigBasket">BigBasket</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="StoreFront">StoreFront</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Sequncers">Sequncers</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="OnlineGrocery">OnlineGrocery</label>
                </div>
              </div>
            </div>
            
            {/* Ratings */}

            <div className='space-y-4 mt-5'>
              <h1 className='mb-3 text-2xl font-medium '>Ratings</h1>
              <div className='space-y-2'>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoStar/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
              </div>
            </div>

            {/* Image section */}

            <div className='mt-5'>
              <div className='relative w-full'>
                <img src={sideImg} alt="Nothing" className='object-cover rounded-lg' />
                <div className='absolute top-2 px-5 py-5 space-y-3 w-full'>
                  <h3 className='text-3xl font-medium text-[#001e2b]'>Fresh Fruits</h3>
                  <p className='text-base mb-2'>Get Upto 25% Off</p>
                  <button className='bg-[#001e2b] text-white px-4 py-2 rounded-md flex items-center gap-1'>
                    ShopNow <FaArrowRight size={12}/>
                  </button>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          
          <div className={`fixed bg-white z-50 p-5 top-0 left-0 w-full h-full overflow-x-scroll transition-transform duration-300 ${content ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-between items-center pb-5'>
              <p className='font-medium text-xl'>Filter</p>
              <RxCross1 size={20} onClick={leftContent}/>
            </div>
            {/* Categoris */}

            <div className='space-y-4'>
              <h1 className='mb-3 text-2xl font-medium flex items-center justify-between'>Categories</h1>
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(0)}>
                <p className='font-normal'>Dairy,Breads & Eggs</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 0 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Milk</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Milk Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Curd & Yogiri</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Eggs</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Breads</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Bun & Bakery</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Butter & More</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cheese</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Panner</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Condensed Milk</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Vegan Drinks</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(1)}>
                <p className='font-normal'>Snacks & Munchies</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 1 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Chips & Crips</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Nachos</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Popcorn</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Mixtures</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Namkeen Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Healthy Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cakes & Roles</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Energy Bars</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Papad & Fryums</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Rusks & Water</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(2)}>
                <p className='font-normal'>Fruits & Vegetables</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 2 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Fresh Vegetables</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Herbs & seasonings</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Fresh Fruits</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Organic Fruits & Vegetables</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cuts & Sprouts</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Exotic Fruits & Veggies</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Flower Bouqouts & Bunches</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(3)}>
                <p className='font-normal'>Cool Drinks & Juices</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 3 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Soft Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Fruit Juice</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Coldpress</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Energy Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Water & ice Cubes</p>
                  <p className='hover:text-[#0aad0a] duration-200'>SOda & Mixers</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Concentrates & Syrups</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Detox & Energy Drinks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Juice Collection</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(4)}>
                <p className='font-normal'>Breakfast & Instant Foods</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 4 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Butter</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Breakfast Cersal</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Noodles, Pasta & Soup</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen,Non-Veg Snacks</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen Veg</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Vermicelli</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Instant Mixes</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(5)}>
                <p className='font-normal'>Bakery & Biscuits</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 5 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Cookies</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Glucose & Marie</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Sweet & Salty</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Healthy & Digestive</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cream Biscuits</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Rusks & Wafers</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Cakes & Rolls</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Buns & Bakery</p>
                </div>
              )}
              <div className='flex items-center justify-between cursor-pointer hover:text-[#0aad0a] duration-200' onClick={() => prdtDropDowns(6)}>
                <p className='font-normal'>Chicken,Meats & Fish</p>
                <FaAngleRight className='font-extralight'/>
              </div>
              {open === 6 && (
                <div className='px-4 py-3 space-y-3 font-normal text-base'>
                  <p className='hover:text-[#0aad0a] duration-200'>Chicken</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Sausage & Ham</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Exotic Meat</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Eggs</p>
                  <p className='hover:text-[#0aad0a] duration-200'>Frozen Non Veg Snacks</p>
                </div>
              )}
            </div>

            {/* search */}

            <div className='space-y-4 mt-5'>
              <h1 className='mb-3 text-2xl font-medium'>Stores</h1>
              <div className='space-y-2'>
                <input type="text" placeholder='Search by Store' className='border-2 px-2 py-1 w-full rounded-lg mb-3'/>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id=""/>
                  <label htmlFor="Grocery">E-Grocercy</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="DealShare">DealShare</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="D-Mart">D-Mart</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Blinkit">Blinkit</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="BigBasket">BigBasket</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="StoreFront">StoreFront</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Sequncers">Sequncers</label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="OnlineGrocery">OnlineGrocery</label>
                </div>
              </div>
            </div>

            {/* Ratings */}

            <div className='space-y-4 mt-5'>
              <h1 className='mb-3 text-2xl font-medium '>Ratings</h1>
              <div className='space-y-2'>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoStar/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoStar/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoStar/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Grocery" className='flex text-yellow-300'><IoStar/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/><IoMdStarOutline/></label>
                </div>
              </div>
            </div>

            {/* Image section */}

            <div className='mt-5'>
              <div className='relative w-full'>
                <img src={sideImg} alt="Nothing" className='object-cover rounded-lg' />
                <div className='absolute top-2 px-5 py-5 space-y-3 w-full'>
                  <h3 className='text-3xl font-medium text-[#001e2b]'>Fresh Fruits</h3>
                  <p className='text-base mb-2'>Get Upto 25% Off</p>
                  <button className='bg-[#001e2b] text-white px-4 py-2 rounded-md flex items-center gap-1'>
                    ShopNow <FaArrowRight size={12}/>
                  </button>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          


          <div className='sm:p-0 md:p-1 lg:p-3 w-full'>
            <div className='p-10 bg-[#f0f3f2] rounded-lg'>
              <p className='sm:text-xl md:text-2xl lg:text-5xl font-medium'>Snacks & Munchies</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-between pt-8 pb-4'>
              <p className='text-gray-500'>24 Product Found</p>
              
              <div className='flex flex-col sm:flex-row gap-3'>
                {/* Filter Button */}
                <div className='block lg:hiiden'>
                  <button className='w-full flex items-center px-6 py-2 border-2 rounded-lg font-medium text-gray-400 hover:bg-gray-200 duration-300' onClick={leftContent}>Filters</button>
                </div>
                <select className='border-2 p-2 rounded-lg'>
                  <option value="show:50">Show:50</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <select className='border-2 p-2 rounded-lg'>
                  <option value="Sort by:Featured">Sort by:Featured</option>
                  <option value="Price:Low to High">Price:low to High</option>
                  <option value="Price:High to Low">Price:Hight to Low</option>
                  <option value="Release Date">Release Date</option>
                  <option value="Avg.Rating">Avg Rateing</option>
                </select>
              </div>
            </div>

            {/* Food Products */}
            <div className='py-4 lg:p-0'>
              <h1 className='text-3xl font-bold mb-5'>Popular Products</h1>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {slidesData['pop-prdts'].slice(0,10).map((poprds) => (
                  <div key={poprds.id} className='border-2 p-2 md:p-4 hover:border-[#0aad0a] hover:shadow-lg duration-200'>
                    <img src={poprds['pop-img']} alt={poprds['pop-name']} className='object-cover mb-2' />
                    <p className='text-sm text-gray-500 hover:text-[#0aad0a]'>{poprds['pop-title']}</p>
                    <h3 className='font-semibold text-sm md:text-xl'>{poprds['pop-name']}</h3>
                    <div className='flex justify-between items-center'>
                      <p className='text-lg font-bold'>{poprds['pop-value2']} <span className='line-through text-gray-500'>{poprds['pop-value1']}</span></p>
                      <button className='bg-[#0aad0a] text-white px-3 py-1 rounded-md mt-2' onClick={() => addToCart({id: poprds.id,name: poprds['pop-name'],img: poprds['pop-img']})}
                      >{poprds['pop-button']}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end */}
            <div className='flex items-center gap-2 mt-6'>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'><FaCaretLeft /></p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'>1</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'>2</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'>...</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'>12</p>
              <p className='px-3 py-2 text-sm border-2 rounded-lg hover:bg-[#0aad0a]'><FaCaretRight/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop