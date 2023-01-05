import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import Link from 'next/link';
import { Job } from '../../src/types/Jobtype';
import Modal from '../Modal';
import AdminForm from './AdminForm';

const Wrapper = styled.section`
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  min-width: 350px;
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin-right: 1rem;
      font-size: 1.5rem;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
  }
`;

type AdminFormProps = {
  initialValue: Job;
  isNew: boolean;
};

export default function AdminSection({ isNew, initialValue }: AdminFormProps) {
  const [message, setMessage] = useState('');
  const title = isNew ? '새로운 공고 추가하기' : '공고 수정하기';

  return (
    <Wrapper>
      <header>
        <h1>{title}</h1>
        <Link href="/admin">
          <AiOutlineLeftCircle />
        </Link>
      </header>
      <AdminForm
        initialValue={initialValue}
        isNew={isNew}
        setMessage={setMessage}
      />
      {message && <Modal message={message} />}
    </Wrapper>
  );
}
