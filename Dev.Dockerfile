FROM node:lts-alpine3.17
MAINTAINER ming

WORKDIR /www

COPY . .

Run npm install

EXPOSE 80 443 1300

CMD npm run start:dev