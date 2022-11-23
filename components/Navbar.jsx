import React from 'react';
import JobForm from './JobForm';

export default function Navbar({ onSubmit, isLoading, error }) {
  return (
    <header className='h-1/6 flex justify-between items-center px-6  rounded border-4 border-indigo-200  '>
      <span className='text-4xl font-bold   text-indigo-500'>
        Moi<span>Job</span>
      </span>

      <JobForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        error={error}
      ></JobForm>
    </header>
  );
}
