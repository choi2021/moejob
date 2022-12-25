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
  mainWork: [
    { text: '', checked: false, id: uuid() },
    { text: '', checked: false, id: uuid() },
  ],
  qualification: [
    { text: '', checked: false, id: uuid() },
    { text: '', checked: false, id: uuid() },
  ],
  preferential: [
    { text: '', checked: false, id: uuid() },
    { text: '', checked: false, id: uuid() },
  ],
  url: '',
  img: '',
  checkPercentage: 0,
};

export default function AdminDetail() {
  const { query } = useRouter();
  const isNew = query.id === 'new';
  const { getJobById } = useJobs();
  const { data } = getJobById;
  const initialValue = data || newValue;
  return (
    <MainLayout>
      <AdminForm isNew={isNew} initialValue={initialValue} />
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
