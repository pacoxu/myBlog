FROM node:4.2.3

ADD . /src

RUN cd /src; ls ; npm install

RUN cd /src; npm install gulp stylus pm2 -g

RUN cd /src; gulp build

EXPOSE 80

CMD ["bash","pm2 start /src/bin/www"]
