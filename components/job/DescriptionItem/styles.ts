import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 0rem;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  svg,
  input {
    width: 0.25rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  input {
    width: 0.8rem;
  }
`;

const S = {
  Wrapper,
};

export default S;
