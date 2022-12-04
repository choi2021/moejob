import React, { useState } from 'react';
import { useGetJobs, useCreateJob } from '../../../hooks/useQuery';
import { checkDuplicated } from '../../../utils/checkDuplicated';
import S from './styles';

const initailMessage = '채용공고의 url을 알려주세요😁';

export default function JobForm() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const { jobs } = useGetJobs();
  const { mutate, isLoading } = useCreateJob(setMessage, setUrl);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !isLoading && setUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      return;
    }
    if (jobs && !checkDuplicated(url, jobs)) {
      setUrl('');
      setMessage('이미 존재하는 공고입니다.');
      return;
    }
    mutate(url);
  };

  return (
    <S.Wrapper>
      <S.TextBox>
        <S.Img
          src={'/이모티콘.gif'}
          width="300"
          height="300"
          alt="imoticon"
          priority
        />
        {!isLoading && <p>취준생 여러분 모두 화이팅입니다!</p>}
        {isLoading && <p>공고를 불러오는 중입니다...</p>}
      </S.TextBox>
      <S.Form onSubmit={handleSubmit} message={!!message}>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder={message ? message : initailMessage}
        />
        <button>Send</button>
      </S.Form>
    </S.Wrapper>
  );
}
