// export const validateForm = (formData) => {
//     let errors = {};
  
//     // Validation rules can be implemented here for each field
//     if (!formData.fullName.trim()) {
//       errors.fullName = "Full Name is required";
//     }
  
//     if (!formData.mobileNumber.trim()) {
//       errors.mobileNumber = "Mobile Number is required";
//     } else if (!/^\d{10}$/i.test(formData.mobileNumber.trim())) {
//       errors.mobileNumber = "Mobile Number is invalid";
//     }
  
//     if (!formData.pincode.trim()) {
//       errors.pincode = "Pin Code is required";
//     } else if (!/^\d{6}$/i.test(formData.pincode.trim())) {
//       errors.pincode = "Pin Code is invalid";
//     }
  
//     if (!formData.state.trim()) {
//       errors.state = "State is required";
//     }
  
//     if (!formData.address.trim()) {
//       errors.address = "Address is required";
//     }
  
//     if (!formData.date.trim()) {
//       errors.date = "Date of Shipment is required";
//     }
  
//     if (!formData.companyName.trim()) {
//       errors.companyName = "Company Name is required";
//     }
  
//     if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
//       errors.email = "Email is invalid";
//     }
  
//     if (formData.gstin.trim() && !/^\d{2}\w{10}$/i.test(formData.gstin.trim())) {
//       errors.gstin = "GSTIN is invalid";
//     }
  
//     return errors;
//   };

  
//   export default validateForm;