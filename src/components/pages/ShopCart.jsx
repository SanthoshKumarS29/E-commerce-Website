import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/Context'
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ShopCart = () => {
  const {cart , removeToCart} = useContext(CartContext)
  const [total,setTotal] = useState(0)
  const [showPopUp, setShowPopUp] =useState(false)
  const navigate = useNavigate()

  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.popvalue2),0))
  },[cart])

  const handleFinishPurchase = () => {
    setShowPopUp(true)
  }
  const handleConfirmPurchase = () => {
    setShowPopUp(false)
    navigate('/E-commerce-Website/')
  }
  return (
    <div>
      <div className='max-w-7xl mx-auto p-4'>
        <div className='flex gap-4 text-[#0aad0a] font-medium text-base'>
          <p>Home</p>
          <p>/</p>
          <p>ShopCart</p>
          <p>/</p>
          <p className='text-[#8c8e8d]'>Your Products</p>
        </div>
        <div>
          {cart.length === 0 ? (
            <div className='flex justify-center p-10'>
              <h1>Your Cart Is empty! Purchase your favouraite Items</h1>
            </div>
          ) : (
            cart.map((item) => (
              <div>
                <div key={item.id} className='flex flex-col md:flex-row justify-between items-center gap-4 border-2 border-black hover:border-[#0aad0a] p-5 rounded-lg my-3'>
                  <div>
                    <img src={item.popimg} alt=""  className='w-40 h-40 object-cover rounded-lg'/>
                  </div>
                  <div className='space-y-4 '>
                    <div className=''>
                      <p className='text-sm font-bold text-gray-400'>{item.poptitle}</p>
                      <h2 className='text-xl font-medium'>{item.popname}</h2>
                    </div>
                    <div>
                      <button onClick={() => removeToCart(item.id)} className='w-full flex items-center justify-center border-2 border-[#0aad0a] hover:border-red-500 hover:text-red-500 px-3 py-2 rounded-md mt-2'><span><MdDeleteOutline /></span>Remove</button>
                    </div>
                  </div>
                  <div>
                  <p className='text-lg font-bold'>${item.popvalue2} <span className='line-through text-gray-500'>${item.popvalue1}</span></p>
                  </div>
                </div>
              </div>
            ))
          )}
          <button className='bg-[#0aad0a] text-white px-3 py-1 rounded-md mt-2'
            onClick={handleFinishPurchase}>Finish Your Purchase</button>
          {/* Popup */}
          {showPopUp && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                      <h2 className="text-lg font-bold">Confirm Your Purchase</h2>
                      <p>Total Product Value: ${total}</p>
                      <div className="mt-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" 
                          onClick={handleConfirmPurchase}>OK</button>
                      </div>
                    </div>
                  </div>
                )}
        </div>
      </div>

    </div>
  )
}

export default ShopCart
{/* <button onClick={() => removeToCart(item.id)}>Remove</button> */}