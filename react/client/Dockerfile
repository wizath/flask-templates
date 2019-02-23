# base image
FROM node:8.12-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build

CMD ["pm2-docker", "server.js"]