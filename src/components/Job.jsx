import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import TextButton from './TextButton';

export default function Job({ platform, name, img }) {
  return (
    <div className='w-full text-center px-3 py-2  '>
      <div className='flex items-center hover:scale-105 cursor-pointer transition-transform rounded-lg border-2 border-indigo-300'>
        <div className='w-1/2 h-full'>
          <img
            className='h-full rounded-tl-lg rounded-bl-lg '
            src={img}
            alt='jobImg'
          />
        </div>

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
