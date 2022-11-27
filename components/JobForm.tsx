import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

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

export default function JobForm() {
  const [url, setUrl] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
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
        <p>취준생 여러분 모두 화이팅입니다!</p>
      </TextBox>
      <Form>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder={'원하는 채용공고의 url을 알려주세요😁'}
        />
        <button>Send</button>
      </Form>
    </Wrapper>
  );
}
