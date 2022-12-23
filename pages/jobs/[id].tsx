import React from 'react';
import NotFound from '../../components/NotFound';
import MainLayout from '../../components/job/MainLayout';
import SEO from '../../components/SEO';
import DetailJob from '../../components/job/DetailJob';
import { useSpecificJobs } from '../../hooks/useJobs';
import JobSection from '../../components/job/JobSection';

function Index() {
  const { getJobById } = useSpecificJobs();
  const { isLoading, data } = getJobById;
  return (
    <MainLayout>
      <SEO title={data ? `상세페이지 | ${data.name}` : '상세 페이지'} />
      {isLoading && <p>로딩중입니다...</p>}
      {!isLoading && !data && <NotFound />}
      {data && (
        <>
          <DetailJob job={data} />
          <JobSection session={undefined} />
        </>
      )}
    </MainLayout>
  );
}

export default Index;
