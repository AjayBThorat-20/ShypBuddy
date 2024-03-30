import React from 'react'
import { CiSearch } from "react-icons/ci";        
import { IoIosAdd } from "react-icons/io";


function AddressComp({name,city,address} : any) {
  return (
    <div className='grid grid-cols-4 p-4  border-b-2 border-dotted '>
          <div className='col-span-3'>
            <span className='text-sm font-bold mr-2'>{name}</span>
            <span className='text-sm font-bold'>{city}</span>
            <p className='text-sm'>{address}</p>
          </div>
          <div className='col-span-1 '>
            <button className='flex items-center text-red-500 text-sm font-medium '>
              <IoIosAdd className='text-red-500' />
                <p className='text-sm'>Add</p>
            </button>
          </div>
        </div>
  )
}

export default AddressComp