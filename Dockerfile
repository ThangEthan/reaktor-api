FROM node:alpine

WORKDIR /root
COPY . .

RUN npm i
CMD node App