import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  position: relative;
`;

const DetailBox = styled.div`
  flex: 60%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;

const S = {
  Wrapper,
  DescriptionBox,
  DetailBox,
};

export default S;
