FROM node:4.2.3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

COPY . /usr/src/app

RUN npm install

RUN npm install -g gulp pm2 stylus

RUN gulp build

EXPOSE 80

ENTRYPOINT pm2 start bin/www