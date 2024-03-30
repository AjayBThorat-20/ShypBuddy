import Image from "next/image";

export default function NewOrederList() {
  const orders = [
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetail: "Dead Weigh",
      pkgsize: "10.00 x 10.00 x 10.00",
      pkgwt: "Volumetric wt. 0.200kg",
      cost: "100",
      paymentMethod: "COD",
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetail: "Dead Weigh",
      pkgsize: "10.00 x 10.00 x 10.00",
      pkgwt: "Volumetric wt. 0.200kg",
      cost: "100",
      paymentMethod: "COD",
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetail: "Dead Weigh",
      pkgsize: "10.00 x 10.00 x 10.00",
      pkgwt: "Volumetric wt. 0.200kg",
      cost: "100",
      paymentMethod: "COD",
    },
  ];

  return (
    <div className="mt-3">
      <div className="dropdownitem">
        <div className="float-right mr-5 ">
          <div className="div mb-5 mr-15">
            <div className="projectbtn float-right mb-3">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2"
              >
                Filter
              </button>
            </div>

            <div className="my-dropdown float-right mr-5">
              <select>
                <option value="volvo">Last 30 Days</option>
                <option value="saab">Last week</option>
                <option value="mercedes">Last 6 Moths</option>
                <option value="audi">One Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <OrderListDetails/> */}

      <div className="relative overflow-x-auto bg-white mt-15 w-full ">
        <div className="m-4">
          <table className="w-full text-sm text-left bg-white">
            <thead className="text-xs  border-solid border-t-2 border-b-2 border-black text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 w-[20%] text-center hover:text-[#86198f] ">
                  Order Details
                </th>
                <th scope="col" className="px-6 py-3 w-[20%] text-center hover:text-[#86198f]">
                  Customer Details
                </th>
                <th scope="col" className="px-6 py-3 w-[20%] text-center hover:text-[#86198f]">
                  Package Details
                </th>
                <th scope="col" className="px-6 py-3 w-[20%] text-center hover:text-[#86198f]">
                  Payment Details
                </th>
                <th scope="col" className="px-6 py-3 text-center hover:text-[#86198f]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-slate-200 mx-auto"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 w-[20%] ">
                    <p className="text-md font-medium text-gray-700 ">
                      {order.orderId}
                    </p>
                    <p className="text-md text-gray-400">{order.date}</p>
                    <p className="text-md text-gray-400">
                      RTO Charges: {order.rtoCharges}
                    </p>
                  </td>
                  <td className="text-md text-gray-400 w-[20%] text-center">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 w-[20%] ">
                    <p className="text-md text-gray-400">
                      {order.packageDetail}
                    </p>
                    <p className="text-md text-gray-400">{order.pkgsize}</p>
                    <p className="text-md text-gray-400">{order.pkgwt}</p>
                  </td>
                  <td className=" mx-auto px-6 py-4 text-center text-md text-gray-400 w-[20%]">
                    <p className="text-md text-gray-400">₹ {order.cost}</p>
                    <p className="text-md text-gray-400">{order.paymentMethod}</p>
                  </td>
                  <td className="px-6 py-4 w-[20%]">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-2 py-2.5 me-2 mb-2"
                      >
                        Ship Now
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}