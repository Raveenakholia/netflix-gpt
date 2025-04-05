/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className=' absolute  bg-Netflix_Background_img w-full h-full  bg-cover bg-center'>
      <form className='absolute bg-black w-3/12 p-12 my-36 left-0 right-0 mx-auto text-white '>
        <h1 className='font-bold text-start pb-3 text-3xl'>Sign In</h1>
        <input
          type='text'
          placeholder='Email or Phone Number'
          className='p-4 my-4 w-full rounded-md bg-gray-700'
        />
        <input
          type='text'
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
