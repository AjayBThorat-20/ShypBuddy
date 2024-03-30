'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
type Item = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const items: Item[] = [
  {
    name: "Orders Dashboard",
    path: "/OrderDashboard",
    icon: <TiThMenu className='w-6 h-6 mx-auto mb-2'/>
  },
  {
    name: "Create Order",
    path: "/ShippingDetails",
    icon: <FaBook className='w-6 h-6 mx-auto mb-2'/>
  },
  {
    name: "Rate Calculator",
    path: "/OrderDetails",
    icon: <FaCalculator className='w-6 h-6 mx-auto mb-2'/>
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={() => {setShow(!show)}} className='fixed top-0 left-0 py-4 px-3 block md:hidden'>
    <GiHamburgerMenu />
    </button>
    <div className={`${show ? 'block' : 'hidden md:block'} fixed min-h-[calc(100vh-64px)] w-full max-w-[145px] md:max-w-[145px] bg-[#2B7AA6] shadow-lg z-10 pt-10`}>
        {items.map(item => (
          <Link
            key={item.path}
            href={item.path}
            className={` p-3 min-h-28 flex flex-col justify-center font-medium items-center cursor-pointer mb-4 text-center
            ${pathname === item.path ? 'bg-[#3BAAE8] text-white' : 'text-gray-300'} hover:text-white`}
          >
            {item.icon }
            {item.name}
          </Link>
        ))}
    </div>
    </>
  );
}

export default Sidebar;
