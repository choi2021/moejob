import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
  width: 100%;
  height: 20rem;
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

const Form = styled.form<{ message: boolean }>`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem 2rem;
  width: 60%;
  text-align: center;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: 400px) and (max-width: 700px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }

  input {
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    flex: 80%;
    outline: none;
    text-align: center;
    &::placeholder {
      font-size: 0.9rem;
      color: ${(props) =>
        props.message ? props.theme.colors.mainColor : 'inherit'};
    }
  }
  button {
    flex: 20%;
    font-size: 0.8rem;
  }
`;

const Img = styled(Image)`
  width: 10rem;
  height: 10rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 700px) {
    width: 7rem;
    height: 7rem;
  }
`;

const S = { Wrapper, Img, TextBox, Form };
export default S;
