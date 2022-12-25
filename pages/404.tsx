import { NextSeo } from 'next-seo';
import React from 'react';
import { TbError404 } from 'react-icons/tb';
import styled from 'styled-components';
import MainLayout from '../components/job/MainLayout';

const NotfoundIcon = styled(TbError404)`
  width: 200px;
  height: 150px;
`;

export default function Error() {
  return (
    <>
      <NextSeo title="Not found" />
      <MainLayout>
        <NotfoundIcon />
        <span>Notfound</span>
      </MainLayout>
    </>
  );
}
