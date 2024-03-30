import Image from 'next/image'
import Link from 'next/link';



export default function SubNav() {
    const items = [
        {
            link : "/ShippingDetails",
            name: "Shipping Details"
        },
        {
            link : "/OrderDetails",
            name: "Order Details"
        },
        {
            link : "/SelectCourier",
            name: "Select Courier"
        },
    ];

    return (

            <div className=" pl-[10px] text-center flex flex-col sm:flex-row space-x-4 border-solid border-b-2 md:flex-row lg:flex-row mx-auto overflow-auto  mt-5 ml-[10px] mr-5 border-white ">

                {items.map(item => (
                    // <a href="#" className="hover:underline">{item.name}</a>
                    <Link className="hover:underline" href={item.link}>
            {item.name}
          </Link>
                ))}

                
            </div>


        
    )
}





