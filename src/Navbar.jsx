import React from 'react';
import JobForm from './JobForm';

export default function Navbar() {
  return (
    <header className='flex basis-1/6 justify-between items-center p-3 rounded border-4 border-indigo-200  '>
      <span className='text-4xl font-bold   text-indigo-500'>
        Moi<span>Job</span>
      </span>
      <JobForm></JobForm>
    </header>
  );
}
