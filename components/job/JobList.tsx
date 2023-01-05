import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import { Job } from '../../src/types/Jobtype';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 701px) and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GuideBox = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  text-align: center;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

type JobListProps = {
  jobs: Job[] | undefined;
};

export default function JobList({ jobs }: JobListProps) {
  const vacantJobs = jobs?.length === 0 || !jobs;
  if (vacantJobs) {
    return <GuideBox>채용공고가 비어있습니다😉</GuideBox>;
  }

  return (
    <Wrapper>
      {!vacantJobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </Wrapper>
  );
}
