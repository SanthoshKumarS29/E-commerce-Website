import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    company: '',
    title: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();  // For redirecting to the homepage

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    if (!formData.fname) tempErrors.fname = 'First Name is required';
    if (!formData.lname) tempErrors.lname = 'Last Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!formData.phone) tempErrors.phone = 'Phone is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);  // Log form data to the console
      setShowPopup(true);  // Show popup after successful validation
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/');  // Redirect to home page
  };

  return (
    <div>
      <div className='max-w-4xl mx-auto p-6'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Retailers Inquiries</h1>
          <p className='text-xl font-medium text-gray-500'>
            This form is for retailer inquiries only. For all other customer or shopper support requests, please visit the links below this form.
          </p>
        </div>
        <div>
          <form className='space-y-4 py-4 my-4' onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row gap-4 justify-between'>
              <div className='flex flex-col gap-4'>
                <label htmlFor="fname">First Name</label>
                <input 
                  type="text" 
                  name="fname" 
                  className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && <p className='text-red-500'>{errors.fname}</p>}
              </div>
              <div className='flex flex-col gap-4'>
                <label htmlFor="lname">Last Name</label>
                <input 
                  type="text" 
                  name="lname" 
                  className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'
                  value={formData.lname}
                  onChange={handleChange}
                />
                {errors.lname && <p className='text-red-500'>{errors.lname}</p>}
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="Company">Company</label>
              <input 
                type="text" 
                name="company"
                className='w-full border-2 px-3 py-2 rounded-lg'
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="Title">Title</label>
              <input 
                type="text" 
                name="title"
                className='w-full border-2 px-3 py-2 rounded-lg'
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="Email">Email</label>
                <input 
                  type="text" 
                  name="email"
                  className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="Phone">Phone</label>
                <input 
                  type="text" 
                  name="phone"
                  className='w-full lg:w-[400px] border-2 px-3 py-2 rounded-lg'
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
              </div>
            </div>
            <div className='flex flex-start gap-4 my-6'>
              <button className='px-4 py-2 border-2 border-green-400 rounded-md text-base font-medium text-white bg-green-400'>
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-lg font-bold">Form Submitted Successfully!</h2>
              <p>Your data has been submitted. Thank you!</p>
              <button 
                className="bg-green-500 text-white px-4 py-2 mt-4"
                onClick={handleClosePopup}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
