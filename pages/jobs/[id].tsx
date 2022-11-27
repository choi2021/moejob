import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import DetailJob from '../../components/DetailJob';
import JobList from '../../components/JobList';
import Layout from '../../components/MainLayout';
import { useDBService } from '../../context/DBContext';
import { useQuery } from '@tanstack/react-query';
import { ModifiedJobsType } from '../../types/jobtype';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

const JobListBox = styled.section`
  max-width: 1000px;
`;
const NotfoundBox = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.mainColor};
  text-align: center;
  a {
    color: ${(props) => props.theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Index() {
  const { query } = useRouter();
  const dbService = useDBService();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data, isLoading } = useQuery(
    ['jobs'],
    () => {
      return dbService.getJobs();
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
    }
  );
  if (isLoading) <p>로딩중입니다...</p>;
  return (
    <Layout>
      {!data && (
        <NotfoundBox>
          <h1>해당 채용공고를 찾을 수 없습니다.</h1>
          <Link href={'/'}>
            <AiOutlineHome />
            메인페이지로 돌아가기
          </Link>
        </NotfoundBox>
      )}
      {data && (
        <>
          <DetailJob />
          <JobListBox>
            <JobList />
          </JobListBox>
        </>
      )}
    </Layout>
  );
}
