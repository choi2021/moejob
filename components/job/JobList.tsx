import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ModifiedJobsType } from '../../types/Jobtype';
import { useDBService } from '../../context/DBContext';

const Wrapper = styled.ul`
  padding-bottom: 3rem;
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

const GuideBox = styled.div`
  font-size: 1.1rem;
  text-align: center;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
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
  const vacantJobs = jobs?.length === 0;
  if (isLoading) {
    return <GuideBox>채용공고를 불러오는 중입니다...</GuideBox>;
  }
  if (vacantJobs) {
    return <GuideBox>입력창에 url을 입력해 채용공고를 추가해보세요😉</GuideBox>;
  }

  return (
    <Wrapper>
      {jobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
