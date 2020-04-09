# FROM node:12-alpine
#
# WORKDIR /app
#
# RUN chown node:node /app
#
# COPY . .
#
# RUN yarn --frozen-lockfile
# RUN yarn build
#
# ENV NODE_ENV=production
#
# ENTRYPOINT ["yarn", "run", "build-start"]

FROM node:13-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --production --frozen-lockfile

COPY next.config.js  ./
COPY .next/ ./.next
COPY public/ ./public

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "start"]
