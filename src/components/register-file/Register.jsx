import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Regex patterns for validation
  const patterns = {
    name: /^[A-Za-z]{2,}$/, // Only letters, at least 2 characters
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, // At least 6 characters, including a number
  };

  // Validate form using regex
  const validate = () => {
    let tempErrors = {};

    if (!patterns.name.test(formData.firstName)) {
      tempErrors.firstName = 'Please enter First Name';
    }

    if (!patterns.name.test(formData.lastName)) {
      tempErrors.lastName = 'Please enter Last Name';
    }

    if (!patterns.email.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!patterns.password.test(formData.password)) {
      tempErrors.password = 'Password must be at least 6 characters long and contain a number';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      // Proceed with form submission (e.g., API call)
    }setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })
  };

  return (
    <div>
      <div className='max-w-7xl mx-auto p-4 lg:p-0'>
        <div className='flex justify-center p-5 md:p-10 gap-52'>
          <div className='hidden lg:block'>
            <img src="src/assets//reg-page/signup-g.svg" alt="Imgs" />
          </div>
          <div>
            <div className='pb-10'>
              <h1 className='text-2xl md:text-3xl font-bold mb-2'>Get Start Shopping</h1>
              <p className='text-sm text-gray-500'>Welcome to FreshCart! Enter Your email to get started</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='space-y-3 mb-2'>
                <div className='flex flex-col md:flex-rows gap-4'>
                  <div className='flex flex-col'>
                    <input type="text" placeholder='FirstName' name='firstName' value={formData.firstName} onChange={handleChange} className={`border-2 px-6 py-2 rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className='flex flex-col'>
                    <input type="text" placeholder='LastName' name='lastName' value={formData.lastName} onChange={handleChange} className={`border-2 px-6 py-2 rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}/>
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} className={`border-2 px-4 py-2 rounded-lg w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input type="password" placeholder='****' name='password' value={formData.password} onChange={handleChange} className={`border-2 px-4 py-2 rounded-lg w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <button type='submit' className='bg-[#0aad0a] px=4 py-2 text-center w-full text-white rounded-lg font-medium'>Register</button>
                </div>
              </div>
            </form>
            <div className='text-sm mt-4 space-y-1'>
              <p>Already have an account? <Link to='/E-commerce-Website/login' className='cursor-pointer text-[#0aad0a]'>Sign In</Link></p>
              <p>By Conitnouing.You agree to our <a href='#' className='cursor-pointer text-[#0aad0a]'>Terms of Service</a> of <a href="#" className='cursor-pointer text-[#0aad0a]'>Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register