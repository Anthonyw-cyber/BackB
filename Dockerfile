FROM node:12

# Bundle APP files

WORKDIR /app

#handle package installation
COPY ./Asso-artisant-commerce-back/package*.json ./
ENV NPM_CONFIG_LOGLEVEL warn

## installs gyp to build dependencies and delete it afterward (required for bcrypt)
#RUN apk add --no-cache --virtual .gyp python make g++ && npm install && apk del .gyp

RUN npm install

#copy project files
COPY ./Asso-artisant-commerce-back .

ADD .env .
#gestion des logs. mais il faut les fichier pour ca
#RUN rm -rf ./src/helpers/logger.js
#RUN mv ./src/helpers/logger-prod.js ./server/helpers/logger.js

EXPOSE 8080


CMD npm run start
