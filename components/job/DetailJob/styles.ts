import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 2rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const S = {
  Wrapper,
  DescriptionBox,
};

export default S;
