FROM node:4.4.0-slim

RUN apt-get update && apt-get install -y \
      ca-certificates \
      git-core \
      postgresql-client-9.4 \
			zip \
      --no-install-recommends \
      && rm -rf /var/lib/apt/lists/*

ENV APP_DIR /srv/www/koop

RUN mkdir -p $APP_DIR
RUN mkdir $APP_DIR/config

COPY package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN cp -r /tmp/node_modules $APP_DIR

WORKDIR /srv/www/koop

COPY server.js $APP_DIR
COPY config/custom-environment-variables.json $APP_DIR/config

RUN mkdir -p /data
COPY json/example.json /data/example.json

EXPOSE 8080

CMD ["node", "server.js"]
