import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { JobType } from '../types/jobtype';
import JobItem from './JobItem';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function JobList() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  return (
    <Wrapper>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </Wrapper>
  );
}
