import React, { useState } from 'react';
import { FaAngleDown, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [open, setClose] = useState(null)
    const [nav,setNav]=useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }


    const dropDowns = (index) => {
        setClose(open === index ? null : index);
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className='w-full bg-[#f0f3f2]'>
                {/* Whole Div */}
                <div className="max-w-7xl mx-auto flex justify-between py-1 px-3">
                    <h1 className="text-sm font-semibold">Super Value Deals - Save more with coupons</h1>
                    <div className="relative">
                        <div className="flex items-center cursor-pointer">
                            <p className="mr-2" onClick={toggleDropdown}>English</p>
                            <FaAngleDown />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</p>
                                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deutsch</p>
                            </div>
                        )}
                    </div>
                </div>
                {/* whole Div End  */}
            </div>
            <div className='max-w-7xl mx-auto bg-white hidden lg:block'>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center p-4'>
                    <div className='flex items-center'>
                        <IoCartOutline size={40} className='text-[#0aad0a]' />
                        <h2 className='text-2xl font-bold'>FreshCart</h2>
                    </div>
                    <div className='md:flex items-center gap-3 col-span-2 hidden'>
                        <input type="text" placeholder='Search for Products' className='w-[400px] border-2 p-2 rounded-lg focus:outline-none focus-visible:ring-green-400' />
                        <button className='flex items-center px-6 py-2 border-2 rounded-lg font-medium text-gray-400 hover:bg-gray-200 duration-300'><IoLocationOutline />Location</button>
                    </div>
                    <div className="flex justify-end gap-3 text-base relative">
                        <div className="relative flex items-center">
                            <FaRegHeart />
                            <span className="absolute -top-2 -right-2 text-xs bg-[#0aad0a] text-white rounded-full w-4 h-4 flex items-center justify-center">5</span>
                        </div>
                        <div>
                            <Link to='/register'><FaRegUser /></Link>
                        </div>
                        <div className="relative flex items-center">
                            <FiShoppingBag />
                            <span className="absolute -top-2 -right-2 text-xs bg-[#0aad0a] text-white rounded-full w-4 h-4 flex items-center justify-center">6</span>
                        </div>
                        <div className='block lg:hidden' onClick={handleNav}>
                        {!nav ? <RxHamburgerMenu size={20}/>: <RxCross1 size={20}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='max-w-7xl mx-auto bg-white flex md:flex-row items-center gap-4 p-5'>
                    <div className='md:relative flex gap-2 items-center bg-[#0aad0a] rounded-lg px-6 py-2 text-white group'>
                        <p className='font-bold'><CiBoxList size={20} /></p>
                        <button>All Departments</button>
                            <div className="md:absolute left-0 top-8 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg z-50">
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Dairy, Bread & Eggs</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Snacks & Munchies</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Fruites & Vegtables</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Cool Drinks & Jucies</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Breakfast & Instant Food</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Bakery & Biscuits</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Chicken, Meat & Fish</p>
                            </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Home</p>
                        <FaAngleDown />
                        <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                            <Link to='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home1</Link>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home2</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home3</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home4</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home5</p>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Shop</p>
                        <FaAngleDown />
                        <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'><Link to='/shop'>Shop1</Link></p>
                            <Link to='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop2</Link>
                            <Link t0='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop3</Link>
                            <Link t0='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop4</Link>
                            <Link t0='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop5</Link>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Store</p>
                        <FaAngleDown />
                        <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                            <Link to='/store' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store1</Link>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Stores2</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Stores3</p>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Mega Menu</p>
                        <FaAngleDown />
                        <div className='absolute -left-[400px] hidden top-5 mt-2 group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-[1200px] z-50'>
                            <div className='grid grid-cols-4 w-full p-3'>
                                <div>
                                    <h2 className="font-bold text-[#0aad0a] mb-2">Dairy,Bread & Eggs</h2>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Butter</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Milk Drinks</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Curd</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Eggs</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Buns & Bakery</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Cheese</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Dairy Products</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-bold text-[#0aad0a] mb-2">BreakFast & Instant Food</h2>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Breakfast Creal</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Noodle, Pasta & Soup</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Frozen Veg snacks</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Frozen Nov-veg Snacks</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Instant Mixes</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Batter</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Fruits and Juice</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-bold text-[#0aad0a] mb-2">Cold Drinks & Juice</h2>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Soft Drinks</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Fruit Jucie</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Cold press</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Water & ice Cubes</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Soda & Mixtures</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Health Drinks</p>
                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Herbal Drinks</p>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img src="/images/menu-banner.jpg" alt="Nothing" />
                                    <div className='absolute top-2 w-40 p-6'>
                                        <p className='font-bold text-base'>Dont miss this Offer Today</p>
                                        <button className='border-2 p-2 mt-3 text-sm font-bold text-white rounded-lg bg-[#0aad0a]'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Page</p>
                        <FaAngleDown />
                        <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                            <Link to='/blog' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Blog</Link>
                            <Link to='/about' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>About Us</Link>
                            <Link to='/contact' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Contact</Link>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <p>Account</p>
                        <FaAngleDown />
                        <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Accounts1</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Accounts2</p>
                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Accounts3</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                        <Link to = '/dashboard'>Dashboard</Link>
                    </div>
                    <div>
                        <div className='relative flex items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                            <p>Docs</p>
                            <FaAngleDown />
                            <div className='absolute left-0 top-5 mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-60 z-50'>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docss1</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docss2</p>
                                <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docss3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}

            <div>
                <div className='block lg:hidden'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 justify-between items-center p-4'>
                        <div className='flex items-center'>
                            <IoCartOutline size={40} className='text-[#0aad0a]' />
                            <h2 className='text-2xl font-bold'>FreshCart</h2>
                        </div>
                        <div className="flex justify-end gap-3 text-base relative">
                            <div className="relative flex items-center">
                                <FaRegHeart />
                                <span className="absolute -top-2 -right-2 text-xs bg-[#0aad0a] text-white rounded-full w-4 h-4 flex items-center justify-center">5</span>
                            </div>
                            <FaRegUser />
                            <div className="relative flex items-center">
                                <FiShoppingBag />
                                <span className="absolute -top-2 -right-2 text-xs bg-[#0aad0a] text-white rounded-full w-4 h-4 flex items-center justify-center">6</span>
                            </div>
                            <div className='block lg:hidden' onClick={handleNav}>
                            {!nav ? <RxHamburgerMenu size={20}/>: <RxCross1 size={20}/>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={nav ? 'fixed w-full h-full top-0 z-40 overflow-y-auto':'fixed -left-[100%]'}>
                    <div className='bg-white block lg:hidden'>
                        <div className='flex flex-col px-2 pt-5'>
                            <div className='flex justify-between items-center mb-2'>
                                <div className='flex items-center mb-2'>
                                    <IoCartOutline size={40} className='text-[#0aad0a]' />
                                    <h2 className='text-2xl font-bold'>FreshCart</h2>
                                </div>
                                <div className="flex justify-end gap-3 text-base" onClick={handleNav}>
                                {!nav ? <RxHamburgerMenu size={20}/>: <RxCross1 size={20}/>}
                                </div>
                            </div>
                        </div>
            
                        <div className='block lg:hidden w-full'>
                            <div className='w-full bg-white flex flex-col items-center gap-4 px-2 py-5'>
                                <div className='w-full flex flex-col gap-2 items-center'>
                                    <div className='flex flex-col items-center gap-3 col-span-2 '>
                                        <input type="text" placeholder='Search for Products' className='w-full border-2 p-2 rounded-lg focus:outline-none focus-visible:ring-green-400' />
                                        <button className='w-full flex items-center px-6 py-2 border-2 rounded-lg font-medium text-gray-400 hover:bg-gray-200 duration-300'><IoLocationOutline />Location</button>
                                    </div>
                                    <div className='w-full flex justify-center gap-1 items-center bg-[#0aad0a] p-2 rounded-lg text-white'>
                                        <p className='font-bold'><CiBoxList size={20} /></p>
                                        <button onClick={() => dropDowns(0)} className=''>All Departments</button>
                                    </div>
                                    {open === 0 && (
                                        <div className="w-full mt-2 flex bg-white p-2 flex-col text-center gap-3 text-black shadow-lg rounded-lg">
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Dairy, Bread & Eggs</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Snacks & Munchies</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Fruites & Vegtables</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Cool Drinks & Jucies</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Breakfast & Instant Food</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Bakery & Biscuits</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Chicken, Meat & Fish</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center justify-between gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(1)}>
                                        <p>Home</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 1 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <Link to='/' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home1</Link>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home3</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home4</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Home5</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(2)}>
                                        <p>Shop</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 2 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <Link to='/shop' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop1</Link>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop3</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop4</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Shop5</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(3)}>
                                        <p>Store</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 3 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <Link to='/store' className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store1</Link>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store3</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store4</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Store5</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(4)}>
                                        <p>Mega Menu</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 4 && (
                                        <div className='hidden mt-2 group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <div className='flex flex-col w-full gap-3 p-3'>
                                                <div>
                                                    <h2 className="font-bold text-[#0aad0a] mb-2">Dairy,Bread & Eggs</h2>
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Butter</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Milk Drinks</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Curd</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Eggs</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Buns & Bakery</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Cheese</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Dairy Products</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-[#0aad0a] mb-2">BreakFast & Instant Food</h2>
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Breakfast Creal</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Noodle, Pasta & Soup</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Frozen Veg snacks</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Frozen Nov-veg Snacks</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Instant Mixes</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Batter</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Fruits and Juice</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-[#0aad0a] mb-2">Cold Drinks & Juice</h2>
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Soft Drinks</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Fruit Jucie</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Cold press</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Water & ice Cubes</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Soda & Mixtures</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Health Drinks</p>
                                                        <p className="text-sm font-medium hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Herbal Drinks</p>
                                                    </div>
                                                </div>
                                                <div className='relative'>
                                                    <img src="/images/menu-banner.jpg" alt="Nothing" />
                                                    <div className='absolute top-2 w-40 p-6'>
                                                        <p className='font-bold text-base'>Dont miss this Offer Today</p>
                                                        <button className='border-2 p-2 mt-3 text-sm font-bold text-white rounded-lg bg-[#0aad0a]'>Shop Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(5)}>
                                        <p>Page</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 5 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Page1</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Page2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Page3</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Page4</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Page5</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(3)}>
                                        <p>Account</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 3 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Account1</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Account2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Account3</p>
                                        </div>
                                    )}
                                </div>
                                <div className='w-full flex items-start p-2 gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <p>Dashboard</p>
                                </div>
                                <div className='w-full flex flex-col items-center gap-2 group cursor-pointer hover:text-[#0aad0a] duration-200'>
                                    <div className='w-full flex items-center justify-between p-2 border-b-2' onClick={() => dropDowns(3)}>
                                        <p>Docs</p>
                                        <FaAngleDown />
                                    </div>
                                    {open === 3 && (
                                        <div className='mt-2 hidden group-hover:flex bg-white p-2 flex-col gap-3 text-black shadow-lg rounded-lg w-full z-50'>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docs1</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docs2</p>
                                            <p className='text-sm font-medium hover:bg-gray-300 p-1 rounded-lg'>Docs3</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Header;
