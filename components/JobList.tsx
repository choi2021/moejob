import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { JobType } from '../types/Jobtype';
import JobItem from './JobItem';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function JobList() {
  const [jobs, setJobs] = useState<JobType[]>(initialState);
  return (
    <Wrapper>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </Wrapper>
  );
}

const initialState = [
  {
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
  },
  {
    name: '무신사',
    platform: 'wanted',
    id: 1666679409806,
    mainWork: [],
    qualification: [
      '[채용 개요]프론트엔드 개발자는 고객과 입점 파트너가 직접 마주하는 UI/UX를 끊임없이 탐구하고 빠르게 개선하여 플랫폼의 성장을 이끌어 냅니다.[직무내용]',
      '신규 플랫폼 대고객향 웹서비스 개발',
      '신규 플랫폼 백오피스 개발',
      '신규 플랫폼 파트너 센터 개발',
    ],
    preferential: [
      '경력 3년 이상의 서비스 개발/운영 경력이 있으신 분',
      'HTML/CSS/Javascript 생태계에 익숙하신 분',
      '다양한 UX/UI 개발 경험이 있으신 분',
      'Vue/React 등을 이용한 서비스 개발/운영 경험',
      'REST API를 연동한 서비스 개발이 익숙하신 분',
      'Git의 사용 방법과 브랜치를 이용한 협업이 익숙하신 분',
    ],
    url: 'https://www.wanted.co.kr/wd/70238',
    img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4248%2Fg2c7y5q9xilzijcy__1080_790.jpg&w=1000&q=75',
  },
  {
    name: '무신사',
    platform: 'wanted',
    id: 1666679409806,
    mainWork: [],
    qualification: [
      '[채용 개요]프론트엔드 개발자는 고객과 입점 파트너가 직접 마주하는 UI/UX를 끊임없이 탐구하고 빠르게 개선하여 플랫폼의 성장을 이끌어 냅니다.[직무내용]',
      '신규 플랫폼 대고객향 웹서비스 개발',
      '신규 플랫폼 백오피스 개발',
      '신규 플랫폼 파트너 센터 개발',
    ],
    preferential: [
      '경력 3년 이상의 서비스 개발/운영 경력이 있으신 분',
      'HTML/CSS/Javascript 생태계에 익숙하신 분',
      '다양한 UX/UI 개발 경험이 있으신 분',
      'Vue/React 등을 이용한 서비스 개발/운영 경험',
      'REST API를 연동한 서비스 개발이 익숙하신 분',
      'Git의 사용 방법과 브랜치를 이용한 협업이 익숙하신 분',
    ],
    url: 'https://www.wanted.co.kr/wd/70238',
    img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4248%2Fg2c7y5q9xilzijcy__1080_790.jpg&w=1000&q=75',
  },
  {
    name: '무신사',
    platform: 'wanted',
    id: 1666679409806,
    mainWork: [],
    qualification: [
      '[채용 개요]프론트엔드 개발자는 고객과 입점 파트너가 직접 마주하는 UI/UX를 끊임없이 탐구하고 빠르게 개선하여 플랫폼의 성장을 이끌어 냅니다.[직무내용]',
      '신규 플랫폼 대고객향 웹서비스 개발',
      '신규 플랫폼 백오피스 개발',
      '신규 플랫폼 파트너 센터 개발',
    ],
    preferential: [
      '경력 3년 이상의 서비스 개발/운영 경력이 있으신 분',
      'HTML/CSS/Javascript 생태계에 익숙하신 분',
      '다양한 UX/UI 개발 경험이 있으신 분',
      'Vue/React 등을 이용한 서비스 개발/운영 경험',
      'REST API를 연동한 서비스 개발이 익숙하신 분',
      'Git의 사용 방법과 브랜치를 이용한 협업이 익숙하신 분',
    ],
    url: 'https://www.wanted.co.kr/wd/70238',
    img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4248%2Fg2c7y5q9xilzijcy__1080_790.jpg&w=1000&q=75',
  },
  {
    name: '무신사',
    platform: 'wanted',
    id: 1666679409806,
    mainWork: [],
    qualification: [
      '[채용 개요]프론트엔드 개발자는 고객과 입점 파트너가 직접 마주하는 UI/UX를 끊임없이 탐구하고 빠르게 개선하여 플랫폼의 성장을 이끌어 냅니다.[직무내용]',
      '신규 플랫폼 대고객향 웹서비스 개발',
      '신규 플랫폼 백오피스 개발',
      '신규 플랫폼 파트너 센터 개발',
    ],
    preferential: [
      '경력 3년 이상의 서비스 개발/운영 경력이 있으신 분',
      'HTML/CSS/Javascript 생태계에 익숙하신 분',
      '다양한 UX/UI 개발 경험이 있으신 분',
      'Vue/React 등을 이용한 서비스 개발/운영 경험',
      'REST API를 연동한 서비스 개발이 익숙하신 분',
      'Git의 사용 방법과 브랜치를 이용한 협업이 익숙하신 분',
    ],
    url: 'https://www.wanted.co.kr/wd/70238',
    img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4248%2Fg2c7y5q9xilzijcy__1080_790.jpg&w=1000&q=75',
  },
  {
    name: '무신사',
    platform: 'wanted',
    id: 1666679409806,
    mainWork: [],
    qualification: [
      '[채용 개요]프론트엔드 개발자는 고객과 입점 파트너가 직접 마주하는 UI/UX를 끊임없이 탐구하고 빠르게 개선하여 플랫폼의 성장을 이끌어 냅니다.[직무내용]',
      '신규 플랫폼 대고객향 웹서비스 개발',
      '신규 플랫폼 백오피스 개발',
      '신규 플랫폼 파트너 센터 개발',
    ],
    preferential: [
      '경력 3년 이상의 서비스 개발/운영 경력이 있으신 분',
      'HTML/CSS/Javascript 생태계에 익숙하신 분',
      '다양한 UX/UI 개발 경험이 있으신 분',
      'Vue/React 등을 이용한 서비스 개발/운영 경험',
      'REST API를 연동한 서비스 개발이 익숙하신 분',
      'Git의 사용 방법과 브랜치를 이용한 협업이 익숙하신 분',
    ],
    url: 'https://www.wanted.co.kr/wd/70238',
    img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4248%2Fg2c7y5q9xilzijcy__1080_790.jpg&w=1000&q=75',
  },
];
