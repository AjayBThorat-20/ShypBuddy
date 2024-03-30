const OrderListDetails = () => {
  return (
    <>
      <div className="mx-auto mt-5 rounded-sm border-1 border-gray-400 bg-slate-50 w-4/5 md:w-full lg:w-full ">
        <div className="  rounded-md md:border-2  border-zinc-400 flex flex-col md:flex-row font-semibold text-gray-500">
          <div className="text-center border-b-2 rounded-md hover:border-2 md:py-5  hover:border-red-500 md:max-w-[25%] w-full  ">
            <div className="w-[100%] flex md:flex-col md:border-r-2 md:hover:border-none md:border-zinc-300 gap-2 justify-between py-1 md:py-3 ">
              <p className="text-center ">New Order</p>
              <p className="text-center">10</p>
            </div>
          </div>
          <div className="text-center border-b-2 rounded-md hover:border-2 md:py-5  hover:border-red-500 md:max-w-[25%] w-full ">
            <div className="w-[100%] flex md:flex-col md:border-r-2 md:hover:border-none md:border-zinc-300 gap-2 justify-between py-1 md:py-3">
              <p className="text-center">Ready To Ship</p>
              <p className="text-center">18</p>
            </div>
          </div>
          <div className="text-center border-b-2 rounded-md hover:border-2 md:py-5  hover:border-red-500 md:max-w-[25%] w-full ">
            <div className="w-[100%] flex md:flex-col md:border-r-2 md:hover:border-none md:border-zinc-300 gap-2 justify-between py-1 md:py-3">
              <p className="text-center">Pickup</p>
              <p className="text-center">18</p>
            </div>
          </div>
          <div className="text-center border-b-2 rounded-md hover:border-2 md:py-5  hover:border-red-500 md:max-w-[25%] w-full ">
            <div className="w-[100%] flex md:flex-col md:hover:border-none md:border-zinc-300 gap-2 justify-between py-1 md:py-3">
              <p className="text-center">Delivery</p>
              <p className="text-center">38</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default OrderListDetails;