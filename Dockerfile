FROM --platform=$BUILDPLATFORM node:18-alpine as build


RUN apk update
# TODO: should we install libvips ? see https://docs.strapi.io/dev-docs/installation/docker

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p kayfo-platform && chown -R node:node /kayfo-platform
WORKDIR /kayfo-platform

ENV PATH /kayfo-platform/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install --production

RUN yarn add --arch=arm64 --platform=linuxmusl sharp

WORKDIR /kayfo-platform

COPY ./ .
RUN yarn build

FROM node:18-alpine as prod

RUN apk update
# TODO: should we install libvips ? see https://docs.strapi.io/dev-docs/installation/docker

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p kayfo-platform && chown -R node:node /kayfo-platform
WORKDIR /kayfo-platform

ENV PATH /kayfo-platform/node_modules/.bin:$PATH

COPY --chown=node:node --from=build /kayfo-platform .

EXPOSE 3000
CMD ["yarn", "start"]
