import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { MdRemove } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import { useJobs } from '../../hooks/useJobs';
import { useRouter } from 'next/router';
import { redirectPath } from '../../src/utils/redirectPath';
import { useSession } from 'next-auth/react';
import Modal from '../Modal';
import { Job } from '../../src/types/Jobtype';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  a {
    width: 100%;
  }
`;

const Badge = styled.div`
  left: -10px;
  top: -10px;
  padding: 0.25rem 0.5rem;
  background-color: lightblue;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  position: absolute;
  line-height: 25px;
  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
    padding: 0.1rem 0.25rem;
  }
`;

const Box = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 1rem;
  }
  h3 {
    font-size: 0.8rem;
  }
`;

const Img = styled(Image)`
  width: 100%;
`;

const Btn = styled.button`
  right: -10px;
  top: -5px;
  font-size: 1rem;
  position: absolute;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.theme.colors.black};
`;

//todo: 관리자 권한으로 삭제가 되야해

export default function JobItem({ job }: { job: Job }) {
  const { name, platform, img, checkPercentage } = job;
  const { pathname } = useRouter();
  const link = redirectPath(pathname, job.id);
  const isHome = pathname === '/';
  const [message, setMessage] = useState('');
  const { data: session } = useSession();
  const user = session?.user;
  const isLoggedin = !!session;
  const { addOrUpdateJob, deleteJob } = useJobs(user);
  const handleDelete = () => {
    deleteJob.mutate(job, {
      onSuccess: () => {
        setMessage('성공적으로 제거했습니다');
      },
      onSettled: () => {
        console.log('hi');
        setTimeout(() => setMessage(''), 4000);
      },
    });
  };
  const handleAdd = () => {
    addOrUpdateJob.mutate(job, {
      onSuccess: () => {
        setMessage('성공적으로 추가했습니다');
      },
      onSettled: () => {
        setTimeout(() => setMessage(''), 4000);
      },
    });
  };
  const over50Percent = checkPercentage >= 0.5;

  return (
    <>
      <Wrapper>
        {over50Percent && <Badge>50% 이상</Badge>}
        {!isHome && (
          <Btn onClick={handleDelete}>
            <MdRemove />
          </Btn>
        )}
        {isHome && isLoggedin && (
          <Btn onClick={handleAdd}>
            <AiOutlinePlus />
          </Btn>
        )}
        <Link href={link}>
          <Img src={img} alt="job" width="200" height="180" priority />
          <Box>
            <h1>{name}</h1>
            <h3>{platform}</h3>
          </Box>
        </Link>
      </Wrapper>
      {message && <Modal message={message} />}
    </>
  );
}
