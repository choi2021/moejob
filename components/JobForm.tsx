import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDBService } from '../context/DBContext';
import { addCheckToJob } from '../utils/addCheckToJob';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const Wrapper = styled.section`
  width: 100%;
  height: 20rem;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.5rem;
    font-weight: bold;
    color: white;
  }
`;

const Form = styled.form`
  background-color: white;
  padding: 1rem 2rem;
  width: 60%;
  text-align: center;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    flex: 80%;
    outline: none;
    text-align: center;
  }
`;

const Img = styled(Image)`
  width: 10rem;
  height: 10rem;
`;

const initailMessage = '원하는 채용공고의 url을 알려주세요😁';

export default function JobForm() {
  const [url, setUrl] = useState('');
  const dbService = useDBService();
  const [message, setMessage] = useState(initailMessage);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async (url: string) => {
      const { data } = await axios.post('http://localhost:3000/api/job', {
        url,
      });
      const job = addCheckToJob(data);
      dbService.addJob(job);
      resetForm();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['jobs']);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            setMessage(response?.statusText);
          }
        }
      },
    }
  );
  const resetForm = () => {
    setUrl('');
    setMessage(initailMessage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      return;
    }
    mutate(url);
  };

  return (
    <Wrapper>
      <TextBox>
        <Img
          src={'/이모티콘.gif'}
          width="300"
          height="300"
          alt="imoticon"
          priority
        />
        {!isLoading && <p>취준생 여러분 모두 화이팅입니다!</p>}
        {isLoading && <p>공고를 불러오는 중입니다...</p>}
      </TextBox>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder={message}
        />
        <button>Send</button>
      </Form>
    </Wrapper>
  );
}
