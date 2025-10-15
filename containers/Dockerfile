## Allow different tags for node container image as build args
ARG NODE_VER=slim

FROM node:${NODE_VER} AS base
## Add any global packages you want, like ping or curl

FROM base AS stage

## Set working directory
WORKDIR /app

## Copy package.json and package-lock.json
COPY package*.json ./

## Copy source files
COPY . .

FROM stage AS build_dev

## Install dependencies
RUN npm ci --verbose

## Build the Next.js app
RUN npm run build

FROM stage AS build_prod

## Install dependencies
RUN npm ci — only=production --verbose

## Build the Next.js app
RUN npm run build

## target: dev
FROM base AS dev

WORKDIR /app

## Copy /app dir from build stage
COPY --from=build_dev /app /app

EXPOSE 3000

CMD ["npm", "run", "dev"]

## target: prod
FROM node:${NODE_VER} AS prod

WORKDIR /app

ENV NODE_ENV=production

## Copy only necessary files for production
COPY --from=build_prod /app/package*.json ./
COPY --from=build_prod /app/.next/ ./.next/
COPY --from=build_prod /app/node_modules/ ./node_modules/
COPY --from=build_prod /app/public/ ./public/

EXPOSE 3000

CMD ["npm", "start"]
