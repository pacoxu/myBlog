FROM node:4.0.0

RUN npm install -g gulp stylus

RUN npm install 

RUN PORT=80 pm2 start bin/www --name "blog"

CMD [ "bash" ,  "-c" , "grunt build ; forever dist/server/app.js"]
