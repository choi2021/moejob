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

const Img = styled(Image)`
  width: 100%;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Img src="/banner.jpg" width="1000" height="600" alt=""></Img>
    </Wrapper>
  );
}
