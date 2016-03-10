FROM node:4.3.2-slim

RUN apt-get update
RUN apt-get -y install git

ENV APP_DIR /srv/www/koop

RUN mkdir -p $APP_DIR
RUN mkdir $APP_DIR/config

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN cp -r /tmp/node_modules $APP_DIR

WORKDIR $APP_DIR

ADD server.js $APP_DIR
ADD config/custom-environment-variables.json $APP_DIR/config

EXPOSE 8080

CMD ["node", "server.js"]
