# Portfolio
프론트엔드 신입 개발자 김우주의 포트폴리오 입니다.

React를 이용해 만든 포트폴리오입니다. UI/UX는 [awwwards](https://www.awwwards.com/)를 참고하였습니다.
반응형웹으로 만들어져 모든 환경에서 사용가능합니다.

[사이트바로가기](http://woojoo-portfolio.kro.kr)

## 작업순서
1. 리액트 설치 및 필요한 라이브러리 설치
- `npx create-react-app .`
- `npm install react-router-dom`
- `npm install gsap`
- `npm i split-type`
- `npm i @studio-freight/lenis`
- `npm i react-icons`

2. Vite로 작업한 코드 React로 옮기기

3. server와 client로 나누어서 각각 설치하기
- client   
`npm install sass`   
`npm install react-bootstrap bootstrap`   
`npm install react-router-dom`   
`npm install axios`   
`npm install http-proxy-middleware`   
`npm install firebase`   
`npm install react-redux`   
`npm install @reduxjs/toolkit`   

- server   
`npm init -y;`      
`npm install express --save;   `  
`npm install nodemon --save;   `  
`npm install path --save;   `
`npm install mongoose --save;   `
`npm install multer --save;  `    
`npm install aws-sdk@2.348.0 --save;   `   
`npm install multer-s3@2.10.0 --save;     `

## Node.js 사용
- Node.js란?
Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경입니다.   
Node.js는 서버 측 애플리케이션을 구축하기 위한 환경을 제공하며, JavaScript를 사용하여 서버 사이드 코드를 작성할 수 있도록 해줍니다.

## 트러블슈팅
<details>
<summary>heroku 배포 문제</summary>
heroku 배포 단계를 제대로 따라했는데 좀처럼 되지 않아서 애를 먹었지만,   
`heroku logs --tail` 명령어를 사용하여 하나씩 에러를 수정해나갔습니다.   
결국 대부분의 오류는 경로설정 문제였습니다.   
</details>




## 사이트
데이터베이스 - [mongoDB](https://www.mongodb.com/ko-kr/cloud/atlas/lp/try4)   
로그인/회원가입 - [firebase](https://firebase.google.com/?hl=ko)   
도메인 - [내도메인](https://xn--220b31d95hq8o.xn--3e0b707e/)   
배포 - [heroku](www.heroku.com)

