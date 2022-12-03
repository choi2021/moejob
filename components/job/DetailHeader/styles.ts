import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Layout = styled.header`
  display: flex;
  justify-content: center;
  flex: 50%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const JobImg = styled(Image)`
  flex: 50%;
  height: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const MetaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 60%;
  padding: 1rem;
  h1 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    margin: 1rem;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

const LinkBox = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const InfoBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  img {
    width: 50px;
    height: 35px;
    margin-right: 1rem;
  }

  div {
    padding: 0.25rem 0.5rem;
    background-color: lightblue;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    border-radius: 1rem;
  }
`;

const S = {
  Layout,
  JobImg,
  MetaBox,
  LinkBox,
  InfoBox,
};

export { S };
