import { useRouter } from 'next/router';
import React from 'react';
import uuid from 'react-uuid';
import AdminForm from '../../components/admin/AdminForm';
import { useJobs } from '../../hooks/useJobs';
import MainLayout from './../../components/job/MainLayout';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';

const newValue = {
  name: '',
  platform: '플랫폼',
  id: uuid(),
  mainWork: [],
  qualification: [],
  preferential: [],
  url: '',
  img: '',
  checkPercentage: 0,
};

export default function AdminDetail() {
  const { query } = useRouter();
  const isNew = query.id === 'new';
  const { getJobById } = useJobs();
  const { data, isLoading } = getJobById;
  const initialValue = data || newValue;

  return (
    <MainLayout>
      {isLoading && <div>로딩중입니다</div>}
      {!isLoading && <AdminForm isNew={isNew} initialValue={initialValue} />}
    </MainLayout>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};
