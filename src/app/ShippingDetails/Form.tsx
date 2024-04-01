"use client"
import React, { useState } from "react";
import { Label, Textarea, Checkbox } from "flowbite-react";
import type { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';
import axios from "axios";




// const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY as string;
// const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string;


// const base = new Airtable({ apiKey: apiKey }).base(baseId);
function Form(req: NextApiRequest, res: NextApiResponse) {



  interface FormData {
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
    companyName:string;
  }

 
  const validateForm = (formData: FormData) => {
    let errors = {};

    // Validation rules for each field
    if (!formData.fullName.trim()) {
      errors = { ...errors, fullName: "Full Name is required" };
    }

    if (!formData.mobileNumber.trim()) {
      errors = { ...errors, mobileNumber: "Mobile Number is required" };
    } else if (!/^\d{10}$/i.test(formData.mobileNumber.trim())) {
      errors = { ...errors, mobileNumber: "Mobile Number is invalid" };
    }

    if (!formData.pincode.trim()) {
      errors = { ...errors, pincode: "Pin Code is required" };
    } else if (!/^\d{6}$/i.test(formData.pincode.trim())) {
      errors = { ...errors, pincode: "Pin Code is invalid" };
    }

    if (!formData.state.trim()) {
      errors = { ...errors, state: "State is required" };
    }

    if (!formData.address.trim()) {
      errors = { ...errors, address: "Address is required" };
    }

    if (!formData.date.trim()) {
      errors = { ...errors, date: "Date of Shipment is required" };
    }

    if (!formData.companyName.trim()) {
      errors = { ...errors, companyName: "Company Name is required" };
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errors = { ...errors, email: "Email is invalid" };
    }

    // if (formData.gstin.trim() && !/^\d{2}\w{10}$/i.test(formData.gstin.trim())) {
    //   errors = { ...errors, gstin: "GSTIN is invalid" };
    // }

    return errors;
  };

  const [formData, setFormData] = useState<FormData>({
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
    companyName: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {


      try {
        const record = await axios.post(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_SHIPPLING_TABLE}`,
          {
            fields: {

              CityName: formData.cityName,
              Date: formData.date,
              State: formData.state,
              PinCode: formData.pincode,
              FullName: formData.fullName,
              Email: formData.email,
              Address: formData.address,
              Country: formData.country,
              Landmark: formData.landmark,
              GstIN: formData.gstin,
              MobileNumber: formData.mobileNumber,
              CompanyName: formData.companyName
            }
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            },
          }
        );

        // return res.status(200).json({ message: 'Form submitted successfully', record });
        console.log('Form submitted successfully', record);
        console.log('Status code:', res.status);
      } catch (error: any) {
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
    } else {
      setErrors(validationErrors);

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
                     {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
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
                     {errors.email && <span className="text-red-500">{errors.email}</span>}
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
                     {errors.mobileNumber && <span className="text-red-500">{errors.mobileNumber}</span>}
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
                     {errors.pincode && <span className="text-red-500">{errors.pincode}</span>}
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
                     {errors.cityName && <span className="text-red-500">{errors.cityName}</span>}
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
                     {errors.state && <span className="text-red-500">{errors.state}</span>}
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
                    {errors.country && <span className="text-red-500">{errors.country}</span>}
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
                      rows={4}
                    />
                    {errors.address && <span className="text-red-500">{errors.address}</span>}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <Label htmlFor="landmark" value="LandMark (optional)" />
                    <Textarea
                      id="landmark"
                      placeholder="Enter the landmark..."
                      rows={4}
                      value={formData.landmark}
                      onChange={handleInputChange}
                    />
                     {errors.landmark && <span className="text-red-500">{errors.landmark}</span>}
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
                     {errors.date && <span className="text-red-500">{errors.date}</span>}
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
                     {errors.others && <span className="text-red-500">{errors.others}</span>}
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
                     {errors.companyName && <span className="text-red-500">{errors.companyName}</span>}
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
                     {/* {errors.gstin && <span className="text-red-500">{errors.email}</span>} */}
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