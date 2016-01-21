FROM node:4.0.0

RUN ls

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

COPY . /usr/src/app

RUN npm install -g gulp stylus

RUN npm install 

RUN gulp build

RUN PORT=80 node bin/www