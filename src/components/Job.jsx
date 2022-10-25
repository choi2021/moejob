import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import TextButton from './TextButton';
import Button from './TextButton';

export default function Job({ platform, name }) {
  return (
    <div className='w-full text-center px-3 py-2  '>
      <div className='flex items-center hover:scale-105 cursor-pointer transition-transform rounded-lg border-2 border-indigo-300'>
        <img
          className='w-1/2 rounded-tl-lg rounded-bl-lg'
          src='https://images.unsplash.com/file-1661973760703-91f50df21c28image?dpr=2&auto=format&fit=crop&w=416&q=60'
          alt='jobImg'
        />
        <div className='w-1/2 p-1 flex flex-col items-center justify-between'>
          <h3 className='text-md font-semibold text-indigo-500 '>{name}</h3>
          <img
            className='w-1/3 my-2'
            src={`/img/${platform}_logo.png`}
            alt='platform'
          />
          <div className='flex items-center'>
            <TextButton text='자세히'></TextButton>
            <button className='text-indigo-400 text-lg'>
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
