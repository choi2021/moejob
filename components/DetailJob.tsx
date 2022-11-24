import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Titles } from '../variables/jobVariable';
import DescriptionList from './DescriptionList';
import Tags from './Tags';

const obj = {
  name: '카닥',
  platform: 'wanted',
  id: 1666679310887,
  mainWork: [
    '공업사 사장님들이 수리/엔진오일/타이어 등 차량 관리 및 업체 운영의 방법을 혁신할 수 있는 웹(React)과 앱(React-Native) 제품을 주도적으로 설계하고 만듭니다.',
    '카닥 내부에서 여러 가지 운영 용도로 사용하는 어드민 툴을 만듭니다.',
  ],
  qualification: [
    '5년 이상의 React 또는 React-Native 개발 경험이 있으신 분',
    'HTML(5), CSS, Javascript(최소 ES5) 기본 지식을 보유한 분',
    'TypeScript, React, Redux, Redux-Saga등 상태 관리 라이브러리를 이용한 개발 경험이 있으신 분[저희가 사용하는 기술은,]',
    'React Native, React, Next.js, TypeScript',
    'AWS CloudFront, S3',
  ],
  preferential: [
    'GraphQL에 대한 경험이 있으신 분',
    '단위 테스트, 통합 테스트 자동화 및 배포 자동화 경험이 있으신 분',
    'Javascript 관련 오픈 소스 기여 경험이 있으신 분',
    '백엔드 서비스 개발 경험 및 Database에 대한 이해를 갖추신 분[참고해 주세요!]',
    '협업 도구로 JIRA, Confluence, Git, Slack, Gather-Town, Figma, (Zeplin)을 사용하고 있습니다.',
    '정규직 채용의 경우 3개월의 수습 기간이 있습니다.',
    '평가 결과에 따라, 수습 기간이 연장되거나 채용이 취소될 수 있습니다.',
  ],
  url: 'https://www.wanted.co.kr/wd/10335',
  img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F6%2Fnb8ckp9ekuffwjjx__1080_790.png&w=1000&q=75',
};

const Wrapper = styled.section`
  max-width: 1000px;
  margin-bottom: 2rem;
`;

const JobImg = styled(Image)`
  flex: 50%;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const MetaBox = styled.div`
  padding: 1rem;
  h1 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const PlatformBox = styled.div`
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

const PlatformAndTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export default function DetailJob() {
  return (
    <Wrapper>
      <TitleBox>
        <JobImg src={obj.img} alt='detail_image' height={350} width={400} />
        <MetaBox>
          <h1>{obj.name}</h1>
          <PlatformAndTagBox>
            <PlatformBox>
              <h3>플랫폼:</h3>
              <Image
                src='/wanted_logo.png'
                alt='logo'
                height={100}
                width={100}
              />
              <h3>태그:</h3>
              <div>1순위</div>
              <div>50%이상</div>
            </PlatformBox>
          </PlatformAndTagBox>

          <DescriptionList title={Titles.MainWork} list={obj.mainWork} />
        </MetaBox>
      </TitleBox>

      <DescriptionBox>
        <DescriptionList
          title={Titles.qualification}
          list={obj.qualification}
        />
        <DescriptionList title={Titles.preferential} list={obj.preferential} />
      </DescriptionBox>
    </Wrapper>
  );
}
