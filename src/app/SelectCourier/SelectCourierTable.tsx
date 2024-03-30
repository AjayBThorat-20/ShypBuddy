import Image from 'next/image'

import { IoIosCall } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Dropdownbtn from '../components/Dropdownbtn';

// import data from "../data/data"
// import Dropdownbtn from './Dropdownbtn';


export default function SelectCourierTable() {




    const data = [
        {
            imagepath: "/DelhiveryAir.png",
            maintxt: "Delhivery Air",
            childtxt: "Air | Min-weight: 0.5 kg RTO Charges : ₹ 464.72",
            rating: "4.7/5",
            exppickup: "Tomorrow",
            estdelivery: "Mar 21, 2024",
            charweight: "1.6 kg",
            charges: "₹503.61"
        },

        {
            imagepath: "/DelhiveryAir.png",
            maintxt: "Ecom Premium and ROS Surface",
            childtxt: "Air | Min-weight: 0.5 kg RTO Charges : ₹ 464.72",
            rating: "4.7/5",
            exppickup: "Tomorrow",
            estdelivery: "Mar 21, 2024",
            charweight: "1.6 kg",
            charges: "₹503.61"
        },

        {
            imagepath: "/DelhiveryAir.png",
            maintxt: "Ekart Logistics surface",
            childtxt: "Air | Min-weight: 0.5 kg RTO Charges : ₹ 464.72",
            rating: "4.7/5",
            exppickup: "Tomorrow",
            estdelivery: "Mar 21, 2024",
            charweight: "1.6 kg",
            charges: "₹503.61"
        },

        {
            imagepath: "/DelhiveryAir.png",
            maintxt: "DTDC Air 500gm",
            childtxt: "Air | Min-weight: 0.5 kg RTO Charges : ₹ 464.72",
            rating: "4.7/5",
            exppickup: "Tomorrow",
            estdelivery: "Mar 21, 2024",
            charweight: "1.6 kg",
            charges: "₹503.61"
        },




    ];


    const botitems = [
        {
            name: "Available Services:",
            icon: <IoIosCall />,
            childname: "call before delivery"
        },
        {
            name: "",
            icon: <FaBoltLightning />,
            childname: "Instant POD"
        },
        {
            name: "Shipping Details",
            icon: <FaLocationDot />,
            childname: ""
        },
    ];

    const headeritems = [
        {
            name: " COURIER PARTNER"
        },
        {
            name: "RATING"
        },
        {
            name: "EXPECTED PICKUP"
        },
        {
            name: "ESTIMEDTED DELIVERY"
        },
        {
            name: "CHAREABLE WEIGHT"
        },
        {
            name: "CHAREGES"
        },
        {
            name: "ACTION"
        },
    ];

    return (

        <div className='relative pt-0 mt-5 w-full text-sm  '>
            <div className='sec-components sm-w-10 sm-h-30 bg-white p-2  flex-col mx-auto overflow-auto rounded-md border-2'>
                <div className=' float-left overflow-auto '>
                    <h4 className='text-md md:text-md ml-2 mt-2'> Product Information</h4></div>
                <div className="dropdownitem">
                    <div className='float-right overflow-auto ' >
                        <div className='flex flex-row'>
                            <div className="my-2 mr-15 mx-2">
                                <div className="projectbtn float-right mb-3">
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-1 me-2 mb-2 ">Filter</button>
                                </div>
                                <Dropdownbtn />
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <Tablecomp/> */}
                <div className=" overflow-auto mt-15 w-full max-h-full snap-none overflow-y-auto">
                    <table className=" text-sm text-left w-full md:text-md ">
                        {/* <Tableheader /> */}
                        <thead className="text-sm ">
                            <tr className="border-solid border-y-2 border-black">
                                {headeritems.map(item => (
                                    <th scope="col" className="sm:px-6 sm:py-3 text-center ">
                                        {item.name}
                                    </th>

                                ))}
                            </tr>
                        </thead>

                        {/* <Tablebody/> */}
                        {data.map(function (dt) {
                            return (
                                <tbody className='overflow-y-auto '>
                                    <tr className="border-solid border-y-2 border-black-500">
                                        <th scope='row' className='flex items-center space-x-3'>
                                            <th scope="col" className="px-1 py-1 ">
                                                <td colSpan={2}>
                                                    <th className='h-32 w-32 md:h-48 md:w-48 lg:h-[2rem] lg:w-[4rem] sm:h-20 sm:w-20'>
                                                        <Image src="/DelhiveryAir.png" alt="#" width={60} height={60} className='rounded-full' />
                                                    </th>
                                                    <th scope="row">
                                                        <h1 className='font-bold'> {dt.maintxt}</h1>
                                                        <th className='font-light sm-w-3/5'>
                                                            {dt.childtxt}

                                                        </th>
                                                    </th>
                                                </td>
                                            </th>
                                        </th>
                                        <td className="px-6 py-4">
                                            {dt.rating}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dt.exppickup}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dt.estdelivery}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dt.charweight}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dt.charges}
                                        </td>
                                        <td className="px-3 py-4">
                                            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-1 py-1 me-2 mb-2">Ship Now</button>
                                        </td>
                                    </tr>
                                    <tr className=' border-solid border-y-2 border-black '>


                                        <td colSpan={7}>

                                            <section className='float-right mr-5'>
                                                <section className="flex space-x-2 pl-[20px] font-xs ">


                                                    {botitems.map(item => (
                                                        <><h6>{item.name} </h6>
                                                            <section className='w-5 h-5 ml-2'>
                                                                {item.icon}
                                                            </section>
                                                            <h4>{item.childname}</h4>
                                                        </>
                                                    ))}



                                                </section>

                                            </section>

                                        </td>

                                    </tr>





                                </tbody>
                            )
                        })}

                    </table>
                </div>
            </div>
        </div>
    )
}





