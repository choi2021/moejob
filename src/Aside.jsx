import React from 'react';
import Job from './components/Job';

export default function Aside({ jobs }) {
  return (
    <aside className='basis-1/4 rounded border-4 border-indigo-200 border-t-0 shadow-md overflow-y-auto'>
      <ul>
        {jobs.map((job) => (
          <Job {...job} key={job.id}></Job>
        ))}
      </ul>
    </aside>
  );
}
