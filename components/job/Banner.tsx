import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colors.mainColor};
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
    color: ${(props) => props.theme.colors.white};
    @media screen and (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
`;

const Img = styled(Image)`
  width: 4rem;
  height: 4rem;
  grid-template-columns: repeat(2, 1fr);
`;

export default function Banner() {
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
    </Wrapper>
  );
}
