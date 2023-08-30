# Getting Started with Create React App

## `npm start`

> React 로컬 시작 방법

- Open Link[http://localhost:3000](http://localhost:3000)

## `npm run build`

- `build`디렉토리 생성 및 배포진행

## .env 적용 과정

> [!IMPORTANT]
>
> > 1. 우선순위는 위에서부터 적용되며, SecretKey는 모두 문자열로 넣지 말고 env에 넣어주세요.
> > 2. Path경로는 `./env/`에 `.env.local`, `.env.development`, `.env.production`파일을 넣어주시기 바랍니다.

> [!NOTE]
> env작성시에는 `REACT_APP`으로 시작이 필수

### 환경별 실행 문구

#### Local

- npm start
- npm run start
- npm run build

#### Develop

- npm run dev-start
- npm run dev-build

#### Production

- npm run prod-start
- npm run prod-build

### npm start 시

1. .env.development.local
2. .env.development
3. .env.local
4. .env

### npm run build 시

1. .env.production.local
2. .env.production
3. .env.local
4. .env

### npm test 시

1. .env.test.local
2. .env.test
3. .env

## 코트 포매팅

- `npx eslint --fix ./src`
- `npm run lint`
- `npm run lint:fix`

## 프로젝트 구조

.
├── [D] env  
├── [D] public  
├── [D] src  
├── [D] .git  
├── .eslintrc.js  
├── .gitignore  
├── .prettierrc  
├── README.md  
├── package-lock.json  
├── package.json  
└── README.md
