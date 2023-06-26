FROM node:lts-alpine3.17

WORKDIR /app

COPY . .

RUN npm i -g @nestjs/cli && \ 
    npm install

CMD npm run start:dev