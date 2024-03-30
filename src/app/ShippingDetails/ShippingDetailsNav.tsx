import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiNumberCircleTwoFill } from "react-icons/pi";;

function ShippingDetailsNav() {


  
  return (
    <div className=" pl-[10px] text-center flex flex-col sm:flex-row space-x-4 md:flex-row lg:flex-row mx-auto overflow-auto  mt-5 ml-[10px] mr-5 ">

      <a href="#" className="inline-flex items-center text-black hover:text-rose-600 hover:underline ml-4 md:ml-0 lg:ml-0 ">
        <div className="flex items-center ">
          <AiFillCheckCircle className="mr-2  text-rose-600 " />
          <span >Pick up Address</span>
        </div>
        <MdOutlineHorizontalRule className="ml-4 w-10 md:visible lg:visible invisible" />
      </a>
      <a href="#" className="inline-flex items-center hover:underline ml-4">
        <div className="flex items-center">
          <PiNumberCircleTwoFill className="mr-2 text-rose-600 " />
          <span className=' text-black'>Buyer Address</span>
          </div></a>
    </div>
  );
}

export default ShippingDetailsNav;