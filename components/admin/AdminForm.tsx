import { AxiosError } from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';
import { useJobs } from '../../hooks/useJobs';
import {
  DescriptionNameType,
  DescriptionTitle,
  DescriptionType,
  Job,
} from '../../src/types/Jobtype';
import { normalizeDescriptions } from '../../src/utils/normalizeDescriptions';
import { JOB_SCHEMA } from '../../src/variables/jobVariable';
import AdminDescriptionList from './AdminDescriptionList';
import AdminFormItem from './AdminFormItem';
import Select from './Select';

type DescriptionListType = {
  name: DescriptionNameType;
  title: DescriptionTitle;
  value: DescriptionType[];
};

type AdminFormProps = {
  initialValue: Job;
  isNew: boolean;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Wrapper = styled.form`
  margin-top: 1rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 3rem;
`;

const Btn = styled.button`
  grid-column: span 2;
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1rem;
  height: 2rem;
  width: 50%;
  border-radius: 1rem;
  text-align: center;
`;

export default function AdminForm({
  initialValue,
  setMessage,
  isNew,
}: AdminFormProps) {
  const [descriptions, setDescriptions] = useState({
    mainWork: '',
    qualification: '',
    preferential: '',
  });
  const { job, onAdd, onChange, onDelete, onUpdateDescription } =
    useForm(initialValue);
  const { addOrUpdateJob } = useJobs();
  const { mutate } = addOrUpdateJob;
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

  const BtnText = isNew ? '추가하기' : '수정하기';

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
    <Wrapper onSubmit={handleSubmit}>
      <Box>
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
      </Box>
      <Btn type="submit">{BtnText}</Btn>
    </Wrapper>
  );
}
