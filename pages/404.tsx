import React from 'react';
import MainLayout from '../components/MainLayout';
import { TbError404 } from 'react-icons/tb';
import styled from 'styled-components';

const NotfoundIcon = styled(TbError404)`
  width: 200px;
  height: 150px;
`;

export default function Error() {
  return (
    <MainLayout>
      <NotfoundIcon />
      <span>Notfound</span>
    </MainLayout>
  );
}
