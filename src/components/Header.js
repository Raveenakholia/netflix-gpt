/** @format */

import React from 'react';
import netflixLogo from '../media/Netflix_Logo_PMS.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='grid grid-cols-2 grid-flow-col grid-gap-4'>
      <img
        src={netflixLogo}
        alt='Netflix Logo'
        className='w-48'
      />
      <div className='flex justify-end items-center gap-x-10 m-2.5'>
        <button className='bg-white text-black rounded-md  px-5 py-2.5'>
          {' '}
          Languages
        </button>
        <Link to='/login'>
          <button className='bg-white text-black rounded-md  px-5 py-2.5 hover:bg-white/80'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
