import React from 'react';
import { TbError404 } from 'react-icons/tb';
import styled from 'styled-components';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';

const NotfoundIcon = styled(TbError404)`
  width: 200px;
  height: 150px;
`;

export default function Error() {
  return (
    <MainLayout>
      <SEO title="Not Found"></SEO>
      <NotfoundIcon />
      <span>Notfound</span>
    </MainLayout>
  );
}
