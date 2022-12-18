# 👓 채용공고들을 비교,정리할 수 있는 노트 서비스, 모으잡

 **모으잡(moejob)** 은 채용공고들을 정리하면서, 다양한 플랫폼에 흩어져 있는 채용공고들을 한곳에 모아, 비교하고 싶다는 생각에서 시작된 서비스입니다.

저와 같은 **취업 준비생 분들께** 도움이 될 수 있는 서비스를 목표로 계속해서 개선 시켜 나갈 예정입니다.    

<br/>

### 🎁 추가될 기능

1. 채용공고 별 현황을 확인할 수 있는 대쉬보드



<br/>

### 🔗 배포 링크

 [서비스 이용하러 가기](http://moejob.shop/)


<br/>

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
    <img src="https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</div>


### 🙆‍♀️ 권한

권한은 **일반 사용자 (로그인을 하지 않은 사용자), 로그인한 사용자, 관리자** 총 세가지로 분류했습니다. 각각에 따른 권한은 다음과 같습니다.

|권한|전체 공고 보기|개인별 공고 CRUD|전체공고 CRUD|
|:---:|:---:|:---:|:---:|
|일반 사용자|가능|불가능| 불가능 |
|로그인한 사용자| 가능 |가능|불가능|
|관리자| 가능 | 가능 | 가능|

현재는 로그인만하면 관리자 권한까지 주어져있어, 추후에 Authentication DB를 이용해 관리자와 로그인한 사용자의 인가를 분리할 예정입니다.



### 📖 Content

#### 1) 메인페이지 (`/`)

- 메인 페이지는 현재 전체 등록되어있는 채용공고들을 보여줍니다. 
- 공고를 누르면 디테일 페이지로 연결되며, 로그인한 사용자는 채용공고를 저장할 수 있습니다. 


<img src="https://user-images.githubusercontent.com/80830981/208322239-d52eb55c-8917-4f7a-839d-2ab6a5a90994.png" width="800px"/>



#### 2) 메인 상세 페이지 (`/jobs/:id`)

- 메인 상세 페이지는 해당 채용공고의 url, 플랫폼, 주요 업무, 자격 조건, 우대 사항을 볼 수 있습니다.

<img src="https://user-images.githubusercontent.com/80830981/208322620-10a8b908-84b5-409c-b8fa-1ebca11f948c.png" width="800px"/>


#### 3) 모은 공고페이지 (`/user`)

- 모은 공고페이지는 사용자별로 저장해둔 채용공고들을 모아 보여주고 삭제할 수 있는 페이지입니다.
- 추후에 공고별 현황을 보여줄 수 있는 대쉬보드를 추가할 예정입니다.

<img src="https://user-images.githubusercontent.com/80830981/208322817-8843f9ac-c6c0-4d73-ba7a-2b423ab6dbaa.png" width="800px"/>


#### 4) 모은공고 상세페이지 (`/user/:id`)

- 모은공고 상세페이지는 해당 공고의 주요내용과 함께 사용자가 직접 자격 조건, 우대사항에 얼마나 해당되는지 체크해 합격 가능성이 높은 공고를 표시할 수 있게 했습니다. 
- 자격조건과 우대사항의 체크 여부에 따라 DB가 업데이트 되고, 업데이트된 데이터를 react-query를 이용해 새롭게 가져와, DB와 UI가 동기화 되게 했습니다.

<img src="https://user-images.githubusercontent.com/80830981/208322889-7825f1fc-a935-4ceb-a67f-13e72115f5cc.png" width="800px"/>

#### 5) 관리자 페이지 (`/admin`)

- 관리자 페이지는 관리자 권한이 있는 사용자에게만 보이는 페이지로, 등록된 전체 공고들을 보여주고, 삭제할 수 있는 페이지입니다.
- 현재는 로그인한 사용자와 관리자 권한이 함께있어, 추후 분리할 예정입니다.

<img src="https://user-images.githubusercontent.com/80830981/208323000-b9c6cce1-ce76-4bf8-803a-580917377986.png" width="800px"/>

#### 6) 채용공고 수정페이지 (`/admin/new`)

- 채용공고 수정페이지는 관리자 권한으로, 전체 공고들을 수정하거나 새롭게 추가할 수 있는 페이지입니다.
- 이후 채용공고에 새로운 정보들 (채용과정, 마감일자)을 담을 예정입니다.

<img src="https://user-images.githubusercontent.com/80830981/208323166-963df57c-8bd8-41eb-8c24-617de2f28ed1.png" width="800px"/>

#### 7) 로그인 페이지 (`/login`)

- 로그인은 Next-Auth를 이용해 비밀번호 없이 인증이 가능하게 구현했습니다. 
- 현재 지원하는 방법은 email, google, github으로 이후에 kakao talk과 네이버를 추가할 예정입니다.
- 현재는 MongoDB를 Prisma를 이용해 SessionDB를 연결하고, 인증된 사용자들의 정보를 관리하고 있지만, 사용자가 많아질 경우에는 JWT를 이용해 관리할 예정입니다.

<img src="https://user-images.githubusercontent.com/80830981/208323319-a08d8f91-e65a-4895-83fe-f20ea8667505.png" width="300px"/>
   




