# 👓 채용공고를 자동으로 정리 해주는 서비스, 모으잡

**모으잡(moejob)** 은 다양한 플랫폼에 흩어져 있는 채용공고들을 자동으로 가져와 정리해 주는 서비스입니다. 

취업 준비생으로써 채용 공고들을 비교하고 정리하면서, 엑셀이나 노션과 같은 서비스에 일일이 복사 붙여넣기를 하다가 "공고의 url만 입력하면 자동으로 정리 해주는 서비스가 있으면 좋겠다"는 생각으로 시작하게 된 서비스입니다. 

저와 같은 **취업 준비생 분들께** 도움이 될 수 있는 서비스를 목표로 계속해서 개선 시켜 나갈 예정입니다.    



### 🎁 추가될 기능

1. 프로그래머스, 점핏 플랫폼의 채용 공고 크롤링 기능

2. 채용 플랫폼 별 필터링 기능

3. 합격 여부/ 지원 상태 기록 기능

   

필요한 기능을 알려 주시면 계속해서 추가해 나가도록 하겠습니다!





### 🔗 배포 링크

 [서비스 이용하러 가기](http://moejob.shop/)



### 🛠 기술 스택

##### Front-end:

<div align=left>
  <img src="https://img.shields.io/badge/typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
</div>

##### Tool:

<div align=left >
    <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/>
    <img src="https://img.shields.io/badge/-puppeteer-gray?style=for-the-badge&logo=puppeteer"/>
    <img src="https://img.shields.io/badge/cheerio-339933?style=for-the-badge&logo=Node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
</div>




  ### 📖 Content

#### 1) 메인페이지

메인 페이지는 새롭게 채용공고를 크롤링을 이용해 추가할 수 있는 JobForm 섹션과 이전에 저장해둔 채용공고들을 보여 주는 JobList 섹션으로 나뉩니다. 

- 크롤링은 Node JS기반의 cheerio 라이브러리를 이용했고, 동적 페이지에서도 크롤링이 가능하게 하기 위해 puppeteer를 이용해 구현했습니다.

- DB는 firebase를 이용해 크롤링한 공고를 DB에 추가하고 이전 공고를 불러올 수 있게 했습니다. 

- React Query로 공고를 추가되면 새롭게 이전 데이터를 가져올 수 있게 해서 UI와 DB가 동기화되게 했습니다.

  

<img src="https://user-images.githubusercontent.com/80830981/205149971-86570682-cfb4-46eb-853f-342bb2c30ade.png" width="800px"/>



#### JobForm

JobForm의 입력 창에 **채용공고의 url**을 입력하면 해당 공고의 **주요 업무, 자격 조건, 우대 사항**에 대한 핵심 정보를 가져오고, 해당 공고를 JobLIst 섹션에 추가합니다. 프로그래머스, 잡플래닛 등 다양한 채용 플랫폼의 채용공고를 가져올 수 있도록 확장해 갈 예정입니다.



현재 지원 플랫폼

- 원티드

추가 예정 플랫폼

- 프로그래머스
- 점핏



#### JobList

JobList는 추가된 채용공고들을 보여 주는 섹션으로, 각 공고를 클릭 시 상세 페이지로 이동하고, 필요시 추가한 공고를 삭제할 수 있습니다. 각 채용공고의 비교를 위해 중요한 채용공고들은 표시하기 위해 "다양한 태그"들로 돋보이게 할 예정입니다. 



현재 지원 태그

- 50%이상: 사용자의 자격 조건과 우대 사항 체크 결과가 50% 이상일 경우, 합격 가능성이 높은 공고임을 표시하기 위한 태그입니다.

추가 예정 태그

- 서류 합격/ 면접 합격/ 최종 합격: 공고마다 진행 정도를 표시해 줄 수 있는 태그입니다.



<img src="https://user-images.githubusercontent.com/80830981/205150176-53c521d6-42c5-4da0-b0d1-792104dbe10f.gif" width="800px"/>

#### 2) 상세 페이지

상세 페이지는 메인 페이지에서 저장한 공고의 주요 업무, 자격 조건, 우대 사항을 볼 수 있습니다. 해당 공고에 사용자가 직접 자격 조건,  우대사항에 얼마나 해당되는지 체크해 합격 가능성이 높은 공고를 표시할 수 있게 했습니다. 

- 자격조건과 우대사항의 체크 여부에 따라 DB가 업데이트 되고, 업데이트된 데이터를 react-query를 이용해 새롭게 가져와, DB와 UI가 동기화 되게 했습니다.



<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/80830981/205150237-cb8ae404-52f7-4ef9-b06d-f75aea97f470.png"  /> </td><td><img src="https://user-images.githubusercontent.com/80830981/205150245-8e5f6c6f-9e0b-4031-a012-8fde3f444f9a.gif" /></td>
  <tr>
</table>


#### 3) 로그인/회원가입 페이지

로그인은 이메일/비밀번호로 회원가입 후 이용하는 방법과 OAuth를 이용한 google, github 계정을 이용하는 방법 두 가지가 있습니다. 

- 이메일/비밀번호 이용 시, 이메일은 세 글자 이상, @를 포함하는 조건과 비밀번호는 여섯 글자 이상으로 기준을 잡아 로그인 버튼과 회원가입 버튼이 활성화됩니다.

- 회원가입은 이미 존재하는 이메일의 경우를 예외 처리를 했습니다

- 로그인은 존재하지 않는 이메일의 경우, 해당 이메일과 맞지 않는 비밀번호의 경우를 예외 처리했습니다. 

- 이메일/비밀번호 기능과 OAuth 기능 모두 firebase의 Auth를 이용해 구현했습니다.

- 이후에 빠진 예외 처리도 추가할 수 있게 httpError class로 확장성을 고려해서 작업했습니다.

   

  <table>
    <tr>
      <td><img src="https://user-images.githubusercontent.com/80830981/205150360-1f6684fe-0981-4b39-a082-b9d004f7368f.png"/></td><td><img src="https://user-images.githubusercontent.com/80830981/205150349-6824d728-3215-4e2c-bc71-d6b938ae1b9b.gif" height="100%" /></td>
    <tr>
  </table>


