FROM --platform=$BUILDPLATFORM node:18-alpine as build


RUN apk update

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p app && chown -R node:node /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install --production

RUN yarn add --arch=arm64 --platform=linuxmusl sharp

WORKDIR /app

COPY ./ .
RUN yarn build

FROM node:18-alpine as prod

RUN apk update

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p app && chown -R node:node /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node --from=build /app .

EXPOSE 3000
CMD ["yarn", "start"]


# FROM node:18-alpine as build
# ENV NODE_ENV development
# # Add a work directory
# RUN mkdir -p app && chown -R node:node /app
# WORKDIR /app
# # Cache and Install dependencies
# COPY package.json .
# COPY yarn.lock .
# RUN yarn install
# # Copy app files
# COPY . .
# # Expose port
# EXPOSE 3000
# # Start the app
# CMD [ "yarn", "start" ]