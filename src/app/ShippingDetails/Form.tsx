// Import necessary libraries and modules
"use client"
import React, { useState } from "react";
import { Label, Textarea, Checkbox } from "flowbite-react";
import { useForm } from 'react-hook-form';
import * as z  from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import axios from "axios";
// import { json } from "stream/consumers";
// import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";

// Define schema using Zod for form validation
// const formdataSchema = z.object({
//   fullName: z.string({required_error:"Full Name must be required", invalid_type_error:"Full Name must be string"}).min(1,"full is required"),
//   email: z.string({required_error:"Email must be required", invalid_type_error:"Invalid email address"}).email().or(z.literal("")),
//   mobileNumber: z.string().length(10).regex(/^\d{10}$/),
//   pincode: z.string({required_error: "Pin Code is required", invalid_type_error: "Pin Code must be a number"}).length(6).regex(/^[1-9][0-9]{5}$/),
//   state: z.string({required_error: "State is required", invalid_type_error: "State must be a number"}).min(2).max(30),
//   address: z.string({required_error: "Address is required", invalid_type_error: "Address must be a number"}).max(100),
//   date: z.string({required_error: "Date is required", invalid_type_error: "Date must be a number"}).regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
//   country: z.string({required_error: "Country is required", invalid_type_error: "Country must be a number"}).min(2).max(30),
//   cityName: z.string({required_error: "City Name is required", invalid_type_error: "City Name must be a number"}).min(2).max(30),
//   landmark: z.string({required_error: "Land Mark is required", invalid_type_error: "Land Mark must be a number"}).or(z.literal("")),
//   others: z.string({required_error: "Others is required", invalid_type_error: "Others must be a number"}).max(15),
//   gstin: z.string({required_error: "GST IN is required", invalid_type_error: "GST IN  must be a number"}).max(15),
//   companyName: z.string({required_error: "Company Name is required", invalid_type_error: "Company Name must be a number"}).min(1).max(80)
// });


const formdataSchema = z.object({
  fullName: z.string().min(1,"full is required"),
  email: z.string().email().or(z.literal("")),
  mobileNumber: z.string().length(10).regex(/^\d{10}$/),
  pincode: z.string().length(6).regex(/^[1-9][0-9]{5}$/),
  state: z.string().min(2).max(30),
  address: z.string().max(100),
  date: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
  country: z.string().min(2).max(30),
  cityName: z.string().min(2).max(30),
  landmark: z.string().or(z.literal("")),
  others: z.string().max(15),
  gstin: z.string().max(15),
  companyName: z.string().min(1).max(80)
});






// Define component
function Form() {
  // Use react-hook-form

  const { register, handleSubmit, formState: { errors }} = useForm({resolver:zodResolver(formdataSchema)});

  const [submitting, setSubmitting] = useState(false);

  //  console.log(formdataSchema);
  // Handle form submission
  const onSubmit = async (formData:any) => {
    try {
      console.log("Form Data:", formData);
      const record = await axios.post(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_SHIPPLING_TABLE}`, {
        fields: {
          CityName: formData.cityName,
          Date: formData.date,
          State: formData.state,
          PinCode: formData.pincode,
          FullName: formData.fullName,
          Email: formData.email,
          Address: formData.address,
          Others: formData.others,
          Country: formData.country,
          Landmark: formData.landmark,
          GstIN: formData.gstin,
          MobileNumber: formData.mobileNumber,
          CompanyName: formData.companyName
        }
      }, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
        },
      });
      console.log('Form submitted successfully', record);
      setSubmitting(true);
      console.log(z.record);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitting(false);
    }};

  // const { setError } = useForm();
  // const handleBlur = (fieldName: string) => {
  //   setError(fieldName, {
  //     type: 'manual',
  //     message: errors[fieldName]?.message as string
  //   });
    
  // };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-2 rounded-lg px-4">
        <div className="border-2 py-2 border-black rounded-md px-4">
          <div className="">
            <p className="py-2 font-bold text-gray-700">Buyer Details</p>
            <div className="grid grid-cols-1  py-2 gap-4 md:grid-cols-3">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-500">Full Name</label>
                 <input type="text" id="fullName" {...register("fullName")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your full name" />
                {errors.fullName && <span className="text-red-500">Full Name is required</span>}
                 {/* <input type="text" id="fullName" {...register("fullName")} onBlur={() => handleBlur("fullName")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your full name" />
                {errors.fullName && <span className="text-red-500">Full Name is required</span>} */}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Email (Optional)</label>
                <input type="text" id="email" {...register("email")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" />
                {errors.email && <span className="text-red-500">Invalid Email</span>}
              </div>
              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-500">Mobile number</label>
                <input type="text" id="mobileNumber" {...register("mobileNumber")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your mobile number" />
                {errors.mobileNumber && <span className="text-red-500">minimum 10 number</span>}
              </div>
            </div>
          </div>

          {/* Buyer Address Details */}
          <p className="py-2 font-bold text-gray-700">Buyer Address Details</p>
          <div>
            {/* Pin Code and City Name */}
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-500">Pin Code</label>
                <input type="text" id="pincode" {...register("pincode")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Pin Code" />
                {errors.pincode && <span className="text-red-500">Invalid Pin Code</span>}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="cityName" className="block mb-2 text-sm font-medium text-gray-500">City Name</label>
                <input type="text" id="cityName" {...register("cityName")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your City Name" />
                {errors.cityName && <span className="text-red-500">City Name is required</span>}
              </div>
            </div>
            {/* State and Country */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-500">State</label>
                <input type="text" id="state" {...register("state")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your State" />
                {errors.state && <span className="text-red-500">State is required</span>}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-500">Country</label>
                <input type="text" id="country" {...register("country")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Country" />
                {errors.country && <span className="text-red-500">Country is required</span>}
              </div>
            </div>

            {/* Address and Landmark */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="lg:w-1/2 md:w-full">
                <Label htmlFor="address" value="Complete address" />
                <Textarea id="address" placeholder="Leave a comment..." {...register("address")} rows={4} />
                {errors.address && <span className="text-red-500">Address is required</span>}
              </div>
              <div className="lg:w-1/2 md:w-full">
                <Label htmlFor="landmark" value="LandMark (optional)" />
                <Textarea id="landmark" placeholder="Enter the landmark..." {...register("landmark")} rows={4} />
              </div>
            </div>

            {/* Date of Shipment and Others */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-500">Date of Shipment</label>
                {/* <input type="text" id="date" {...register("date")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Date of shipment" /> */}
                
                {errors.date && <span className="text-red-500">Date of Shipment is required</span>}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="others" className="block mb-2 text-sm font-medium text-gray-500">Others</label>
                <input type="text" id="others" {...register("others")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" Others" />
              </div>
            </div>

            {/* Buyer's Company name and GSTIN */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-500">Buyer's Company name</label>
                <input type="text" id="companyName" {...register("companyName")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Buyer" />
                {errors.companyName && <span className="text-red-500">Company Name is required</span>}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label htmlFor="gstin" className="block mb-2 text-sm font-medium text-gray-500">Buyer's GSTIN</label>
                <input type="text" id="gstin" {...register("gstin")} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" Buyer's GSTIN" />
              </div>
            </div>
          </div>

        </div>
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="shipping-address" />
          <Label htmlFor="shipping-address">Add different Shipping address</Label>
        </div>
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="billing-address" />
          <Label htmlFor="billing-address">Add different Billing address</Label>
        </div>
        <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button type="reset" className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
          <button type="submit" className="w-[150px]  bg-red-400 py-2">Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
