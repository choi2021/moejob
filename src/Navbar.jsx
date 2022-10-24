import React from 'react';
import JobForm from './JobForm';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center p-3 rounded border-4 border-indigo-200 '>
      <span className='font-mono text-4xl font-bold underline decoration-sky-500'>
        Moi<span className='underline selection:decoration-rose-500'>Job</span>
      </span>
      <JobForm></JobForm>
    </header>
  );
}
