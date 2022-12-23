import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useJobs } from '../../hooks/useJobs';
import { Job } from '../../src/types/Jobtype';
import Modal from '../Modal';

const Wrapper = styled.div`
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  padding: 1rem;
  top: 4rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: 1rem;
  flex: 30%;
  border-radius: 1rem;
  height: 8rem;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  h3 {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 60%;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.mainColor};
`;

export default function SideBox({ job }: { job: Job }) {
  const {
    platform,
    // mainWork,
    // img,
    name,
    // url,
    checkPercentage,
    // qualification,
    // preferential,
  } = job;
  const [message, setMessage] = useState('');
  const { data: session } = useSession();
  const { addOrUpdateJob } = useJobs(session?.user);
  const handleClick = () => {
    addOrUpdateJob.mutate(job, {
      onSuccess: () => {
        setMessage('성공적으로 추가했습니다');
      },
      onSettled: () => {
        setTimeout(() => setMessage(''), 4000);
      },
    });
  };
  return (
    <Wrapper>
      <h1>{name}</h1>
      {/* <h3>3D/2D 지도 프론트엔드 개발자</h3> */}
      <h3>플랫폼: {platform}</h3>
      <h3>태그:</h3>
      {checkPercentage >= 0.5 && <div>50%이상</div>}
      <Btn onClick={handleClick}>추가하기</Btn>
      {message && <Modal message={message} />}
    </Wrapper>
  );
}
