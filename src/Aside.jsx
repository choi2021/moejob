import React from 'react';
import Job from './components/Job';
import TextButton from './components/TextButton';

export default function Aside({ jobs }) {
  return (
    <aside className='basis-1/4 rounded border-4 border-indigo-200 border-t-0 shadow-lg overflow-y-auto'>
      <div className='mt-1 flex justify-center'>
        <TextButton text='All'></TextButton>
        <TextButton text='원티드'></TextButton>
        <TextButton text='프로그래머스'></TextButton>
      </div>
      <ul>
        {jobs.map((job) => (
          <Job {...job} key={job.id}></Job>
        ))}
      </ul>
    </aside>
  );
}
