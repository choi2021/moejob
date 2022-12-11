import React from 'react';
import styled from 'styled-components';
import { useSpecificJobs } from '../../hooks/useJobs';
import JobItem from './JobItem';

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
  const { getFilteredJobs } = useSpecificJobs();
  const { isLoading, data: jobs } = getFilteredJobs;
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
