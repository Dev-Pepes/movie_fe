FROM node:20-alpine 

# 컨테이너 내부에서 작업을 진행할 디렉토리 설정
WORKDIR /app

# pacakge.json을 컨테이너로 복사한다.
COPY    package.json ./

# NPM Install
RUN     npm install

# 현재 디렉토리 파일을 모두 컨테이너 내부로 복사
COPY    . .

RUN     npm run build
EXPOSE 80