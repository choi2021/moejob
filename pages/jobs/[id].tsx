import React from 'react';
import styled from 'styled-components';

import NotFound from '../../components/NotFound';
import JobList from '../../components/job/JobList';
import MainLayout from '../../components/job/MainLayout';
import SEO from '../../components/SEO';
import DetailJob from '../../components/job/DetailJob';
import { useSpecificJobs } from '../../hooks/useJobs';

const JobListBox = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export default function Index() {
  const { getJobById } = useSpecificJobs();
  const { isLoading, data } = getJobById;
  return (
    <MainLayout>
      <SEO title={data ? `상세페이지 | ${data.name}` : '상세 페이지'} />
      {isLoading && <p>로딩중입니다...</p>}
      {!isLoading && !data && <NotFound />}
      {data && (
        <>
          <DetailJob data={data} />
          <JobListBox>
            <JobList />
          </JobListBox>
        </>
      )}
    </MainLayout>
  );
}
