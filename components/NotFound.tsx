import React from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

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

export default function NotFound() {
  return (
    <NotfoundBox>
      <h1>해당 채용공고를 찾을 수 없습니다.</h1>
      <Link href={'/'}>
        <AiOutlineHome />
        메인페이지로 돌아가기
      </Link>
    </NotfoundBox>
  );
}
