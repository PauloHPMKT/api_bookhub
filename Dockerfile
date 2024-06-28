FROM node:20-slim

USER root

WORKDIR /usr/node/app

COPY package*.json .

RUN npm install

EXPOSE 3000

## CMD ["sh", "-c", "npm install"]
