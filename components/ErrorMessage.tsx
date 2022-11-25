import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.mainColor};
`;

export default function ErrorMessage({ message }: { message: string }) {
  return <Wrapper>{message}</Wrapper>;
}
