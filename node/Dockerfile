FROM node:18

WORKDIR /usr/src/app

COPY /app .

ENV DOCKERIZE_VERSION=v0.9.3

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install

RUN mv node_modules /node_modules \
    && ln -s /node_modules /usr/src/app/node_modules

EXPOSE 3000

CMD ["node","index.js"]