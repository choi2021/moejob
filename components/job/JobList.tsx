import React from 'react';
import styled from 'styled-components';
import { useSpecificJobs } from '../../hooks/useJobs';
import JobItem from './JobItem';
import { User } from '../../src/types/Authtypes';

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
type JobListProps = {
  user?: User;
};

export default function JobList({ user }: JobListProps) {
  const { getFilteredJobs } = useSpecificJobs(user);
  const { isLoading, data: jobs } = getFilteredJobs;
  const vacantJobs = jobs?.length === 0;
  if (isLoading) {
    return <GuideBox>채용공고를 불러오는 중입니다...</GuideBox>;
  }
  if (vacantJobs) {
    return <GuideBox>채용공고가 비어있습니다😉</GuideBox>;
  }

  return (
    <Wrapper>
      {jobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
