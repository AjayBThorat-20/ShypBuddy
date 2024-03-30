
import React from 'react'
import { CiSearch } from "react-icons/ci";        
import { IoIosAdd } from "react-icons/io";
import AddressComp from './AddressComp';


function DisplayAddress() {
  let data = [
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    }
  ]
  return (
    <div className='p-4 max-h-screen overflow-y-auto md:p-4 lg:p-4 '>
        {/* <div className=' overflow-hidden'> */}
      <div className='relative'>
        <CiSearch className='absolute text-xl top-[3px] left-[5px]'/>
        <input className='pl-8 p-[2px]  md:max-w-[200px] rounded-md text-sm border-2 border-slate-300' type='text' placeholder='Search Address' />
      </div>
        {data.map((items,index) => (
          <AddressComp 
          key={index}
          {...items}
          />
        ))}
        {/* </div> */}
    </div>
  )
}

export default DisplayAddress;