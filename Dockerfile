FROM node:14.5.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./app ./.env ./

RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install \
    && apk del .gyp
 
RUN npm run build

CMD npm run develop
# RUN strapi develop
