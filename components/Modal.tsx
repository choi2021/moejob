import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  position: fixed;
  min-width: 10rem;
  padding: 0.5rem 1rem;
  right: 0;
  bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

export default function Modal({ message }: { message: string }) {
  return <Message>{message}</Message>;
}
