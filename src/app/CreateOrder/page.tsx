
import React from 'react'

function OrderList() {
  const orders = [
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
  ];

  return (
    <div className='w-full max-w-[1800px] mx-auto'>
      <h3 className='font-semibold text-xl mb-2 md:mb-4'>Order List</h3>
      <div className='bg-white rounded-lg shadow-md h-full p-3 md:p-8'>
        <div className='w-full border-2 md:flex border-gray-400 rounded-lg min-h-8 p-4 font-semibold text-gray-500 mb-4 md:mb-8'>
          <div className='w-full flex md:flex-col gap-2 justify-between md:justify-center items-center md:max-w-[25%] md:border-r md:border-gray-400 py-1 md:py-3 '>
            <p className='text-center'>New Order</p>
            <p className='text-center'>10</p>
          </div>
          <div className='w-full flex md:flex-col gap-2 justify-between md:justify-center items-center md:max-w-[25%] md:border-r md:border-gray-400 py-1 md:py-3 '>
            <p className='text-center'>Ready To Ship</p>
            <p className='text-center'>18</p>
          </div>
          <div className='w-full flex md:flex-col gap-2 justify-between md:justify-center items-center md:max-w-[25%] md:border-r md:border-gray-400 py-1 md:py-3 '>
            <p className='text-center'>Pickup</p>
            <p className='text-center'>18</p>
          </div>
          <div className='w-full flex md:flex-col gap-2 justify-between md:justify-center items-center md:max-w-[25%] py-1 md:py-3 '>
            <p className='text-center'>Delivered</p>
            <p className='text-center'>38</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-end mb-6'>
          {/* <Button buttonText="Filter" outlineButton={true} className='mb-3 md:mr-4'/>
          <Button buttonText="Filter"/> */}
        </div>
        <div className='overflow-x-auto'>
            <table className="min-w-[1000px] w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr className='border-t border-b border-gray-700'>
                      <th className="px-6 py-3">Order Details</th>
                      <th className="px-6 py-3">Customer Details</th>
                      <th className="px-6 py-3">Package Details</th>
                      <th className="px-6 py-3 text-center">Payment Details</th>
                      <th className="px-6 py-3 text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="bg-white border-b border-gray-300 hover:bg-slate-200 cursor-pointer">
                      
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <p>{order.orderId}</p>
                        <p>{order.date}</p>
                        <p>RTO Charges: {order.rtoCharges}</p>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{order.customerName}</td>
                      
                      <td className="px-6 py-4">
                        <p>{order.packageDetails}</p>
                      </td>
                      <td className="px-6 py-4 text-center">{order.paymentMethod}</td>

                      <td className="px-6 py-4 text-center">
                        <div className='flex mx-auto w-fit'>
                          {/* <Button buttonText='Ship Now'/> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default OrderList