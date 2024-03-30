import Image from 'next/image'
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
    return (
  
        <div className=' flex justify-between py-4 pr-4 pl-14 md:pl-4 h-64px bg-white'>
        <Image 
          src="/logo.png" 
          height="40" 
          width="150" 
          alt="logo" 
        />
        <div >
            {/* <p className='w-8 h-8 rounded-full bg-blue-500'/> */}
            <Image src="/user1.jpg" alt="#" width="50" height="50" className="float-right ml-5" />
         <IoIosNotifications className="size-10 bg-transparent ml-5" />
        </div>
    </div>
    )
}





