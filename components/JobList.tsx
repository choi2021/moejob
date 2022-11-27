import React from 'react';
import styled from 'styled-components';
import { useDBService } from '../context/DBContext';
import JobItem from './JobItem';
import { useQuery } from '@tanstack/react-query';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function JobList() {
  const dbService = useDBService();
  const { data: jobs, isLoading } = useQuery(['jobs'], () => {
    return dbService.getJobs();
  });
  return (
    <Wrapper>
      {isLoading && <p>불러오는 중입니다...</p>}
      {jobs &&
        Object.values(jobs).map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
