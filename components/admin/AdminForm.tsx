import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import AdminDescriptionList from './AdminDescriptionList';
import AdminFormItem from './AdminFormItem';
import Link from 'next/link';
import {
  DescriptionNameType,
  DescriptionTitle,
  DescriptionType,
  Job,
} from '../../src/types/Jobtype';
import { useJobs } from '../../hooks/useJobs';
import Modal from './../Modal';
import { JOB_SCHEMA } from '../../src/variables/jobVariable';
import Select from './select';
import { useForm } from './../../hooks/useForm';
import { normalizeDescriptions } from './../../src/utils/normalizeDescriptions';

const Wrapper = styled.section`
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
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

  form {
    position: relative;
    width: 100%;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 3rem;
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Btn = styled.button`
  position: absolute;
  bottom: -3rem;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1rem;
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
`;

type AdminFormProps = {
  initialValue: Job;
  isNew: boolean;
};

type DescriptionListType = {
  name: DescriptionNameType;
  title: DescriptionTitle;
  value: DescriptionType[];
};

export default function AdminForm({ isNew, initialValue }: AdminFormProps) {
  const { job, onAdd, onChange, onDelete, onUpdateDescription } =
    useForm(initialValue);
  const [message, setMessage] = useState('');
  const [descriptions, setDescriptions] = useState({
    mainWork: '',
    qualification: '',
    preferential: '',
  });

  const DescriptionList: DescriptionListType[] = [
    {
      name: JOB_SCHEMA.MAIN_WORK,
      title: '주요 업무',
      value: job.mainWork,
    },
    {
      name: JOB_SCHEMA.QUALIFICATION,
      title: '자격 요건',
      value: job.qualification,
    },

    {
      name: JOB_SCHEMA.PREFERENTIAL,
      title: '우대 사항',
      value: job.preferential,
    },
  ];

  const title = isNew ? '새로운 공고 추가하기' : '공고 수정하기';
  const BtnText = isNew ? '추가하기' : '수정하기';

  const { addOrUpdateJob } = useJobs();
  const { mutate } = addOrUpdateJob;
  const handleNewDescriptionChange = (
    name: DescriptionNameType,
    value: string
  ) => {
    setDescriptions((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { dataset } = e.currentTarget;
    if (dataset.tag !== 'form') {
      return;
    }
    let targetJob = job;

    if (isNew) {
      const normalizedDescriptions = normalizeDescriptions(descriptions);
      targetJob = { ...job, ...normalizedDescriptions };
    }
    mutate(targetJob, {
      onSuccess: () => {
        setMessage(
          isNew ? '성공적으로 추가되었습니다' : '성공적으로 수정되었습니다'
        );
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            setMessage(`${response.statusText} 에러가 발생했습니다`);
          }
        }
      },
      onSettled: () => {
        setTimeout(() => {
          setMessage('');
        }, 4000);
      },
    });
  };

  return (
    <Wrapper>
      <header>
        <h1>{title}</h1>
        <Link href="/admin">
          <AiOutlineLeftCircle />
        </Link>
      </header>
      <form data-tag="form" onSubmit={handleSubmit}>
        <AdminFormItem
          name={JOB_SCHEMA.NAME}
          title="회사 명"
          type="text"
          value={job.name}
          onChange={onChange}
        />

        <AdminFormItem
          name={JOB_SCHEMA.URL}
          title="URL"
          type="text"
          value={job.url}
          onChange={onChange}
        />
        <AdminFormItem
          name={JOB_SCHEMA.IMG}
          title="이미지"
          type="text"
          value={job.img}
          onChange={onChange}
        />
        <Select onChange={onChange} platform={job.platform} />
        {DescriptionList.map((item) => (
          <AdminDescriptionList
            key={item.name}
            name={item.name}
            title={item.title}
            value={isNew ? descriptions[item.name] : item.value}
            onAdd={onAdd}
            onDelete={onDelete}
            onNewDescriptionChange={handleNewDescriptionChange}
            onChange={onUpdateDescription}
          />
        ))}
        <Btn>{BtnText}</Btn>
      </form>
      {message && <Modal message={message} />}
    </Wrapper>
  );
}
