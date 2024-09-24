import React from 'react'

const WhishList = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto p-4'>
            <div className='flex gap-4 text-[#0aad0a] font-medium text-base'>
                <p>Home</p>
                <p>/</p>
                <p>Shop</p>
                <p>/</p>
              <p className='text-[#8c8e8d]'>My WishList</p>
            </div>

            <div className='py-8 space-y-3'>
                <h1 className='text-4xl font-bold'>My WishList</h1>
                <p className='font-normal text-base text-gray-400'>There are 5 Products in this Wallet</p>
            </div>

            <div>
                <div className="bg-white rounded-lg shadow-lg py-5">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                    <thead>
                        <tr className="bg-gray-200">
                        <th className="py-3 px-3 text-sm font-semibold text-gray-700">Product</th>
                        <th className="py-3 px-3 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="py-3 px-3 text-sm font-semibold text-gray-700">State</th>
                        <th className="py-3 px-3 text-sm font-semibold text-gray-700">Action</th>
                        <th className="py-3 px-3 text-sm font-semibold text-gray-700">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-200">
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">Organic Banana</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">$35.00</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
                        </tr>
                        <tr className="hover:bg-gray-200">
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0004</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">NutriChoice Digestive</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-orange-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Pending</span>
                        </td>
                        </tr>
                        <tr className="hover:bg-gray-200">
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0003</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">Onion Flavour Potato</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-red-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Cancel</span>
                        </td>
                        </tr>
                        <tr className="hover:bg-gray-200">
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0002</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">Blueberry Greek Yogurt</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-orange-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Pending</span>
                        </td>
                        </tr>
                        <tr className="hover:bg-gray-200">
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">#FC0001</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">Slurrp Millet Chocolate</td>
                        <td className="py-3 px-3 text-sm font-semibold text-gray-700">
                            <span className="bg-green-200 px-2 py-1 rounded-lg font-medium text-black text-[12px]">Shipped</span>
                        </td>
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
    </div>
  )
}

export default WhishList