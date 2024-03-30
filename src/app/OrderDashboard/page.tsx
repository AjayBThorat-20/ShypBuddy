
import React from 'react'
import NewOrederList from './NewOrederList';
import OrderListDetails from './OrderListDetails';

function OrderList() {

  return (


<>
<div className="px-6  mb-[98px]">
<div className='mt-3 '>
   <h1>
    Order List
    </h1>
   </div>

    <div className=" bg-white mt-4 rounded-md">

    <div className="p-4">
    <OrderListDetails/>
    </div>

    <div className="main-componet4">
      <NewOrederList/>
    </div>
    </div>
    </div>
    </>
  )
}

export default OrderList