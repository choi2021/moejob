import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineLeftCircle } from 'react-icons/ai';
import uuid from 'react-uuid';
import AdminDescriptionList from './AdminDescriptionList';
import AdminFormItem from './AdminFormItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  DescriptionKindType,
  DescriptionType,
  Job,
} from '../../src/types/Jobtype';
import { useJobs } from '../../hooks/useJobs';

const Wrapper = styled.section`
  padding-top: 2rem;
  max-width: 1000px;
  text-align: center;
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 3rem;
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SelectBox = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  label {
    text-align: center;
    margin-right: 0.2rem;
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
  }
  select {
    flex: 1;
    outline: none;
    padding: 0.1rem 0.2rem;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Btn = styled.button`
  position: absolute;
  bottom: -1rem;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1rem;
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
`;

const Message = styled.p`
  position: fixed;
  min-width: 10rem;
  padding: 0.5rem 1rem;
  right: 0;
  bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

const ITEM_Name = {
  NAME: 'name',
  PLATFORM: 'platform',
  URL: 'url',
  IMG: 'img',
  MAIN_WORK: 'mainWork',
  PREFERENTIAL: 'preferential',
  QUALIFICATION: 'qualification',
} as const;

type AdminFormProps = {
  initialValue: Job;
  isNew: boolean;
};

export default function AdminForm({ isNew, initialValue }: AdminFormProps) {
  const [job, setJob] = useState<Job>(initialValue);
  const [message, setMessage] = useState('');
  const { addJob } = useJobs();
  const { mutate } = addJob;
  const handleAdd = (name: DescriptionKindType) => {
    setJob((prev) => {
      const list = prev[name];
      const newItem: DescriptionType = { text: '', checked: false, id: uuid() };
      return { ...prev, [name]: [...list, newItem] };
    });
  };
  const handleDelete = (name: DescriptionKindType, id: string) => {
    setJob((prev) => {
      const list = prev[name].filter((item) => item.id !== id);
      return { ...prev, [name]: list };
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescription = (
    name: DescriptionKindType,
    value: string,
    id: string
  ) => {
    setJob((prev) => {
      const updated = prev[name].map((item) => {
        if (item.id === id) {
          return { ...item, text: value };
        }
        return item;
      });
      return { ...prev, [name]: updated };
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { dataset } = e.currentTarget;
    if (dataset.tag !== 'form') {
      return;
    }
    mutate(job, {
      onSuccess: () => {
        setJob(initialValue);
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

  const title = isNew ? '새로운 공고 추가하기' : '공고 수정하기';
  const BtnText = isNew ? '추가하기' : '수정하기';
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
          name={ITEM_Name.NAME}
          title="회사 명"
          value={job.name}
          onChange={handleChange}
        />

        <AdminFormItem
          name={ITEM_Name.URL}
          title="URL"
          value={job.url}
          onChange={handleChange}
        />
        <AdminFormItem
          name={ITEM_Name.IMG}
          title="이미지"
          value={job.img}
          onChange={handleChange}
        />
        <SelectBox>
          <label htmlFor={ITEM_Name.PLATFORM}>플랫폼:</label>
          <select
            name={ITEM_Name.PLATFORM}
            id={ITEM_Name.PLATFORM}
            onChange={handleSelect}
            value={job.platform}
          >
            <option value="원티드">원티드</option>
            <option value="프로그래머스">프로그래머스</option>
            <option value="점핏">점핏</option>
            <option value="사람인">사람인</option>
            <option value="노션">노션</option>
          </select>
        </SelectBox>
        <AdminDescriptionList
          name={ITEM_Name.MAIN_WORK}
          title={'주요 업무'}
          value={job.mainWork}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onChange={handleDescription}
        />
        <AdminDescriptionList
          name={ITEM_Name.QUALIFICATION}
          title={'자격 요건'}
          value={job.qualification}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onChange={handleDescription}
        />
        <AdminDescriptionList
          title={'우대 사항'}
          name={ITEM_Name.PREFERENTIAL}
          value={job.preferential}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onChange={handleDescription}
        />
        <Btn>{BtnText}</Btn>
      </form>

      {message && <Message>{message}</Message>}
    </Wrapper>
  );
}
