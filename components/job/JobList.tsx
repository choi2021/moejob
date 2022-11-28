import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ModifiedJobsType } from '../../types/Jobtype';
import { useDBService } from '../../context/DBContext';

const Wrapper = styled.ul`
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 20px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function JobList() {
  const { query } = useRouter();
  const { id } = query;
  const dbService = useDBService();
  const { data: jobs, isLoading } = useQuery(
    ['jobs'],
    () => dbService.getJobs(),
    {
      select: (data: ModifiedJobsType) => {
        return Object.values(data).filter((item) => item.id !== id);
      },
    }
  );

  if (isLoading) {
    return <div>채용공고를 불러오는 중입니다...</div>;
  }
  return (
    <Wrapper>
      {jobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
