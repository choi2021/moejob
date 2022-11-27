import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDBService } from '../context/DBContext';
import { JobType } from '../types/jobtype';
import JobItem from './JobItem';
import { useQuery } from '@tanstack/react-query';
import { UserId } from '../variables/authVariable';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function JobList() {
  const dbService = useDBService();
  const { data: jobs } = useQuery(['jobs'], () => {
    const id = localStorage.getItem(UserId);
    return dbService.getJobs(id!);
  });
  return (
    <Wrapper>
      {jobs &&
        Object.values(jobs).map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
