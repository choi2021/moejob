import { useState } from 'react';
import Aside from './Aside';
import MainJob from './MainJob';
import Navbar from './Navbar';

function App() {
  const [jobs, setJobs] = useState(initialState);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  return (
    <div className='w-full h-screen box-border flex flex-col'>
      <Navbar></Navbar>
      <div className='flex h-full w-full '>
        <Aside jobs={jobs}></Aside>
        <MainJob selectedJob={selectedJob}></MainJob>
      </div>
    </div>
  );
}

export default App;

const initialState = [
  {
    name: '강남언니(힐링페이퍼)',
    platform: 'wanted',
    id: 1666622663407,
    mainWork: [
      '강남언니는 웹 프론트엔드 개발자는 다음의 도구를 주로 사용합니다. 그 밖에도 주어진 문제에 따라 가장 적합한 여러가지 도구를 도입합니다.',
      '프로그래밍 언어- JavaScript/TypeScript',
      '프레임워크- React/Next.js- Vue/Nuxt.js- Node.js- Nestjs',
      '인프라- AWS- Kubernetes',
    ],
    qualification: [
      '3년 이상의 모던 웹 개발(React, Vue 등) 경험이나 그에 준하는 역량을 갖춘 분',
      'Semantic Markup 및 Sass, Stylus 등 CSS 전처리기를 활용한 개발에 능숙하신 분',
      '문제의 본질을 이해하고 답을 찾기 위해 동료의 의견에 집중하는 분',
      '자신의 생각을 말, 글, 그림을 통해 합리적으로 표현할 수 있는 분',
      '문제 해결에 필요하다면 자신의 지식과 경험을 내려놓을 수 있는 분',
      '지금보다 더 나은 엔지니어로 성장하고 싶은 분',
    ],
    preferential: [
      '모바일 앱 내 웹뷰 개발 경험을 가진 분',
      '좋은 아키텍처의 생산성 기여를 깊이 이해하시는 분',
      '디자인 시스템 도입 등 팀 개발 효율을 높인 경험을 가진 분',
      'GraphQL 사용 경험을 가진 분',
      '모듈화에 대한 설계 원칙들의 개념과 장단점을 이해하는 분',
      '테스트 주도 개발 이해와 경험을 가진 분',
      '1년 이상의 Continuous Integration과 Continuous Deployment 운영 경험을 가진 분',
      '자동화에 미친자',
    ],
    url: 'https://www.wanted.co.kr/wd/77694',
  },
  {
    name: '한국신용데이터(KCD)',
    platform: 'wanted',
    id: 1666623243280,
    mainWork: [
      '프로덕 매니저/디자이너와 긴밀히 협업하며 서비스 요구사항에 대한 이해를 바탕으로 문제를 잘 정의하고, 기능 추가와 변경에 유연하게 대응할 수 있는 견고한 데이터 모델과 API 를 설계 및 구현',
      'PM 이 무엇을 만들지 고민하는 역할이라면, FE 는 어떻게 만들지 고민하고 실행하는 역할    - 기획 의도를 구현하기 위한 최적의 설계에 대한 책임    - 직접 할 수 있는 일, 동료/팀과 함께 해야 하는 일, 외부 리소스를 활용해야 하는 일을 구분하고 조율    - 프로덕 퀄리티에 대한 책임 (실행 및 운영)',
      '주요 업무    - 사장님들이 필요한 물품들을 구입할 수 있도록 마켓플레이스 커머스 프론트 개발    - 마켓플레이스 조회/관리/신청 등 주요 기능 및 내부 어드민 개발    - 화면 자동화 테스트, 퍼포먼스 측정 및 개선',
    ],
    qualification: [
      '기술 및 경험    - 프로덕션 환경에서 React + TypeScript 로 웹 프론트엔드 프로덕을 3년 이상 개발/운영한 경험    - 프론트엔드의 각 레이어에서 사용 가능한 기술 스택의 장단점을 이해하고, 프로덕의 상황에 맞춰 적절한 기술을 선택할 수 있는 능력복잡한 비즈니스 로직을 정확하고 빠르게 이해하며 기술 적자를 쌓지 않는 문제 해결 능력빠르고 신중한 의사결정으로 업무 진행 중 병목을 효과적으로 해소하는 능력',
      '태도    - 프론트엔드 팀이 더 만족스럽게 일하기 위해 강조하고 있는 네가지 마음가짐에 공감하시는 분    - 누구든 갑자기 휴가를 떠나도 괜찮다: 모두가 모두의 작업을 이해하고 커버할 수 있게 노력하고, 코드리뷰와 페어 작업을 적극 권장합니다.    - 모든 것은 기록하고 공유되어야 한다: 과할 정도로 기록하고, 문서화합니다. 이는 a를 위한 것이기도 합니다.    - UX만큼이나 DX도 중요하다: 팀 크기가 커지면, 팀 생산성을 늘리기 위해 많은 의도적 노력이 필요합니다. 반복 작업을 줄이고, 커뮤니케이션 비용 줄이기 위해 끊임없이 고민하고 실행합니다.    - 프로젝트 안에서는 내가 CTO다: 프로젝트 안에서 프론트엔드 전문가로서, 동료들이 더 나은 의사결정을 할 수 있도록 나서야 합니다. 기획에 의문을 제기하고, 더 나은 UX 플로우를 가져가기 위해 집착하고, 동료에게 아낌없이 피드백을 주고, 기꺼이 도와주어야 합니다.',
    ],
    preferential: [
      '모바일 앱의 웹뷰로 제공되는 어플리케이션을 운영해본 경험',
      '퍼포먼스 모니터링, 에러 모니터링 등 웹 어플리케이션에서 중요한 측정 지표들을 이해하고, 주기적으로 측정하고, 개선해본 경험',
      '디자인 시스템 컴포넌트를 설계, 구현 및 운영해본 경험',
      '단순히 테스트 커버리지를 높이기보다는, 개발자를 도와주는 가치있는 테스트를 UI 컴포넌트부터 E2E까지 다양한 환경에서 작성하고 유지보수해본 경험',
      'GraphQL API를 직접 설계/구현하거나, 호출하여 개발/운영해본 경험',
      'CDN, HTTP 캐시, 어플리케이션 캐시 등 여러 레이어에서의 캐싱을 깊이 고민해본 경험',
      'Terraform, Cloudformation 등 IaaS를 이용한 프론트엔드 인프라 구축 경험',
    ],
    url: 'https://www.wanted.co.kr/wd/117015',
  },
];
