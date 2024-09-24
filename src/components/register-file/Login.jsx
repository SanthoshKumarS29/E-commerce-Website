import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [loginData,setLoginData] = useState({
    email:'',
    password:''
  })

  const [error,setErrors] = useState([])

  // Handle input change
  const handleChangeLogin = (e) => {
    const {name,value} = e.target
    setLoginData({...loginData,[name]:value})
  }

  const validate = () => {
    const errors = {};

    if (!loginData.email) {
      errors.email = 'Email is required';
    }

    if (!loginData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', loginData);
      // Proceed with form submission (e.g., API call)
    } setLoginData({
      email:'',
      password:''
    })
  };

  return (
    <div className='max-w-7xl mx-auto p-4 lg:p-0'>
      <div className='flex justify-center items-center p-5 md:p-10 gap-52'>
        <div className='hidden lg:block'>
          <img src="/reg-page/signin-g.svg" alt="Imgs" />
        </div>
        <div>
          <div className='pb-10'>
            <h1 className='text-xl md:text-3xl font-bold mb-2'>Sign in to FreshCart</h1>
            <p className='text-sm text-gray-500'>Welcome back to FreshCart! Enter your email to get started.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='space-y-3 mb-2'>
              <div>
                <input type="email" placeholder='Email' name='email' value={loginData.email} onChange={handleChangeLogin} className={`border-2 px-4 py-2 rounded-lg w-full ${error.email ? 'border-red-500' : 'border-gray-300'}`} />
                {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
              </div>
              <div>
                <input type="password" placeholder='****' name='password' value={loginData.password} onChange={handleChangeLogin} className={`border-2 px-4 py-2 rounded-lg w-full ${error.email ? 'border-red-500' : 'border-gray-300'}`}/>
                {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
              </div>
              <div>
                <button type='submit' className='bg-[#0aad0a] px=4 py-2 text-center w-full text-white rounded-lg font-medium'>Sign In</button>
              </div>
            </div>
          </form>
          <div className='text-sm mt-4 space-y-1'>
            <p>Don't have an account? <Link to='/register' className='cursor-pointer text-[#0aad0a]'>Sign Up</Link></p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Login