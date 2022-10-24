import React from 'react';

export default function Job({ platform, name }) {
  return (
    <div className='w-full text-center  p-2  '>
      <div className='flex items-center hover:scale-105 shadow-lg cursor-pointer transition-transform'>
        <img
          className='w-1/2'
          src='https://images.unsplash.com/file-1661973760703-91f50df21c28image?dpr=2&auto=format&fit=crop&w=416&q=60'
          alt='jobImg'
        />
        <div className='w-1/2 p-1'>
          <h3 className='text-xs mb-1'>{name}</h3>
          <h6 className='text-xs'>{platform}</h6>
        </div>
      </div>
    </div>
  );
}
