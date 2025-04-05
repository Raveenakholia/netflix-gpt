/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import netflixLogo from '../media/Netflix_Logo_PMS.png';

const Login = () => {
  return (
    <div>
      <div className='absolute  z-10 mx-6 my-5'>
        <img
          src={netflixLogo}
          alt='logo'
          className='w-48'
        />
      </div>
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg'
          alt='Netflix Backround'
        />
      </div>
      <form className=' absolute bg-black w-3/12 p-12 my-36 left-0 right-0 mx-auto bg-opacity-80 text-white '>
        <h1 className='font-bold text-start pb-3 text-3xl'>Sign In</h1>
        <input
          type='text'
          placeholder='Email or Phone Number'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <button className='bg-red-500 p-4 my-4 w-full  rounded-md'>
          {' '}
          Sign In
        </button>

        <Link to={'/'}>
          <p className='text-md cursor-pointer'>New to Netflix? Sign Up Now</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
