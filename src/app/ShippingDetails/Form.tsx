'use client'
import React, { useState } from "react";
import { Label, Textarea, Checkbox } from "flowbite-react";
import type { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';
import axios from "axios";




const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string;
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string;


const base = new Airtable({ apiKey: apiKey }).base(baseId);
function Form(req: NextApiRequest, res: NextApiResponse) {



  interface formData {
    fullName: string;
    email: string;
    mobileNumber: string;
    pincode: string;
    state: string;
    address: string;
    date: string;
    country: string;
    cityName: string;
    landmark: string;
    others: string;
    gstin: string;
   }


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    pincode: "",
    state: "",
    address: "",
    date: "",
    country: "",
    cityName: "",
    landmark: "",
    others: "",
    gstin: "",
    companyName:""
  });

  const handleInputChange = (e:any) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // console.log(formData); // You can replace this with your desired action (e.g., sending data to a server)
    // // Convert formData to JSON
    // const jsonData = JSON.stringify(formData, null, 2);
    // console.log(jsonData);
try {
    const record = await axios.post (`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_SHIPPLING_TABLE}`,
      {
        fields: {
          // FullName: formData.fullName,
          // Email: formData.email,
          // MobileNumber: formData.mobileNumber,
          // PinCode: formData.pincode,
          // State: formData.state,
          // Address: formData.address,
          // Date: formData.date,
          // Country: formData.country,
          // CityName: formData.cityName,
          // Landmark: formData.landmark,
          // Others: formData.others,
          // GSTIN: formData.gstin

          CityName: formData.cityName,
          Date: formData.date,
          State: formData.state,
          PinCode: formData.pincode,
          FullName: formData.fullName,
          Email: formData.email,
          Address: formData.address,
          Country: formData.country,
          Landmark: formData.landmark,
          GstIN : formData.gstin,
          MobileNumber : formData.mobileNumber,
          CompanyName : formData.companyName
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
        },
      }
    );

    // return res.status(200).json({ message: 'Form submitted successfully', record });
    console.log('Form submitted successfully',  record );
    console.log('Status code:', res.status);
 } catch (error : any) {
    // console.error(error);
    // return res.status(500).json({ message: 'Failed to submit form' });
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Error response:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up request:', error.message);
    }
 }
    


  };

  return (

<>

<form onSubmit={handleSubmit}>
      <div className="bg-white p-2 rounded-lg px-4">
      <div className="border-2 py-2 border-black rounded-md px-4">
          <div className="">
            <p className="py-2 font-bold text-gray-700">Buyer Details</p>
            <div className="grid grid-cols-1  py-2 gap-4 md:grid-cols-3">
              <div>
                <label
                  htmlFor="full-name"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName" // Add name attribute
                  value={formData.fullName}
                  onChange={handleInputChange}
                  id="fullName"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Email (Optional)
                </label>
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Mobile number
                </label>
                <input
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  type="number"
                  id="mobileNumber"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>

          <p className="py-2 font-bold text-gray-700">Buyer Address Details</p>
          {/* below details div  */}
          <div>
  <div className="flex flex-col md:flex-row w-full gap-4">
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="pincode"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Pin Code
      </label>
      <input
        type="number"
        id="pincode"
        value={formData.pincode}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your Pin Code"
      />
    </div>
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="city"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        City Name
      </label>
      <input
        type="text"
        id="cityName"
        value={formData.cityName}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your City Name"
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="state"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        State
      </label>
      <input
        type="text"
        id="state"
        value={formData.state}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your State"
      />
    </div>
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="country"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Country
      </label>
      <input
        type="text"
        id="country"
        value={formData.country}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your Country"
      />
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-4">
  <div className=" lg:w-1/2 md:w-full">
    <Label htmlFor="address" value="Complete address" />
    <Textarea
      id="address"
      placeholder="Leave a comment..."
      value={formData.address}
      onChange={handleInputChange}
      required
      rows={4}
    />
  </div>
  <div className="lg:w-1/2 md:w-full">
    <Label htmlFor="landmark" value="LandMark (optional)" />
    <Textarea
      id="landmark"
      placeholder="Enter the landmark..."
      required
      rows={4}
      value={formData.landmark}
      onChange={handleInputChange}
    />
  </div>
    </div>

</div>
<div>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="date"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Date of Shipment
      </label>
      <input
        type="text"
        id="date"
        value={formData.date}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your Date of shipment"
      />
    </div>
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="others"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Others
      </label>
      <input
        type="text"
        id="others"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder=" Others"
        value={formData.others}
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="Buyer"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Buyer's Company name
      </label>
      <input
        type="text"
        id="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your Buyer"
      />
    </div>
    <div className="w-full lg:w-1/2 md:w-full">
      <label
        htmlFor="gstin"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Buyer's GSTIN
      </label>
      <input
        type="text"
        id="gstin"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder=" Buyer's GSTIN"
        value={formData.gstin}
        onChange={handleInputChange}
      />
    </div>
  </div>
</div>

        </div>
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="shipping-address" />
          <Label htmlFor="shipping-address">
            Add different Shipping address
          </Label>
        </div>
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="billing-address" />
          <Label htmlFor="billing-address">Add different Billing address</Label>
        </div>
        <div className=" flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button
            type="reset"
            onClick={() => {
              setFormData({
                fullName: "",
                email: "",
                mobileNumber: "",
                pincode: "",
                state: "",
                address: "",
                date: "",
                country: "",
                cityName: "",
                landmark: "",
                others: "",
                gstin: "",
                companyName: "",
              });
            }}
            className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto"
          >
            Reset Changes
          </button>

          <button type="submit" className="w-[150px]  bg-red-400 py-2">
            Continue
          </button>
        </div>
      </div>
     </form>
    </>
  );
}

export default Form;