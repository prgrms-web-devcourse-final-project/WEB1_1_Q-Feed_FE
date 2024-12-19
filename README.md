<div align="center">

# 취향 기반 데일리 Q&A 커뮤니티 플랫폼 Q-Feed 프론트엔드

<img src="https://github.com/user-attachments/assets/9cd4b763-df14-459e-b1c9-a52df8e0bacd" width="320" height="600" />

<p>
<strong>🗓️ 프로젝트 기간 : 2024.11.15 ~ 2024.12.13</strong>
</p>

</div>

### 📑 기획서

https://www.figma.com/design/pLWrGZKJ9JTaso2BZ8dpiB/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4FE-%EC%B5%9C%EC%A2%856%ED%8C%80?node-id=0-1&t=vfEl1uAO9W1NzTEL-1

### 📎 배포 링크

https://q-feed-web.vercel.app

## 📖 프로젝트 소개

Q-FEED는 자신과 취미를 선택해 일일 질문에 답변하고, 같은 취미의 사람들과 답변을 공유하며 소통하는 익명 커뮤니티 플랫폼입니다.

## 프로젝트 선정 배경
- 기존 SNS의 과도한 자기노출과 비교의식 유발 -> 진정성 있는 소통의 부재
- 개인의 취향과 관심사가 점점 세분화되는 시대에, 자신의 생각을 나눌 수 진솔하게 나눌 수 있는 소통의 장 제공




## 👫 FE 팀원

| 맹주연 | 김민석 | 안종인 | 김재환 |
| ----| ----- | ---- | ---- |
| <img src="https://github.com/user-attachments/assets/dd3e2ec5-04e4-4aa1-91fa-801eaa97689c" width="100%" height="200" /> | <img src="https://github.com/user-attachments/assets/7cd35cce-8423-41e1-bacb-bc0bbf8faf59" width="100%" height="200" /> | <img src="https://github.com/user-attachments/assets/fcc61a3b-d0ff-4b90-beb1-c8add13925a6" width="100%" height="200" /> | <img src="https://github.com/user-attachments/assets/54ab9a80-bc91-4b8c-b51e-dadd857ba8ed" width="100%" height="200" /> |
| 팀장 / 로그인 / 메인 | 개발환경 세팅 / 배포 / Q-Space | 채팅 / 알림 / 팔로우,팔로잉 | 오늘의 질문, 프로필 |

## 시스템 아키텍쳐
<img width="500" alt="image" src="https://github.com/user-attachments/assets/fdb02372-c9d2-4468-9e4f-971126952850">


## ✨ 주요 기능

- 취미 기반 ai가 생성한 일일 질문
- 자신의 답변과 다른 사용자의 답변을 볼 수 있는 메인 피드
- 질문 외의 다양한 주제로 토론방을 생성할 수 있는 Q-Space
- 채팅 및 알림 기능
- 마이페이지에서 자신의 답변 기록 확인 기능
- 프로필 확인 및 팔로우 기능

## 🚀 Frontend Stacks

### 언어 및 프레임 워크
[![My Skills](https://skillicons.dev/icons?i=ts,react,emotion)](https://skillicons.dev)
- **상태관리 라이브러리:** react-query, zustand
- **웹 소켓 라이브러리:** Socket.io
- **API 통신:** Axios
- **컴포넌트 문서화:** Storybook
- **개발 도구:**
  - ESLint
  - Prettier
  - Vite
  - husky
- **협업 툴:** Jira, Figma, Notion, Slack

- **패키지 매니저** : yarn berry

**인증**

JWT, OAuth

**배포**

Vercel

## 📁 프로젝트 구조

### FSD(Feature-Sliced Design)

```read.me
shared 계층 (공통 기능):

components/
hooks/
utils/
constants/
types/
styles/
assets/


entities 계층 (비즈니스 로직):

api/
store/

features 계층:

각각의 pages/ 하위 폴더들이 feature로 구성됨


widgets 계층:

components/ 하위의 재사용 가능한 공통 UI 혹은 Header나 Footer 등의 레이아웃


pages 계층:

pages/ 디렉토리 내의 각 페이지 컴포넌트들
```

##   브랜치 전략 (release branch를 제거한 git branch 전략)
![image](https://github.com/user-attachments/assets/64ad337c-8584-4c7c-b450-84566047b9bd)

## 커밋 컨벤션

[tag] : [Jira 티켓명][작업 내용]

커밋은 소문자로 작성

ex) feat: qfeed-12 로그인 버튼 추가

## PR 컨벤션

[tag] [Jira 티켓명][작업내용]

ex) [Feat] QFEED-12 로그인 기능 구현

PR 단위 : 1 task (작업 시간 0.5일 기준)

##  시작하기

1. 저장소 클론

```bash
git clone https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Q-Feed_FE.git
```

2. 의존성 설치

```
yarn install
```

3. 개발 서버 실행

```
yarn dev
```
