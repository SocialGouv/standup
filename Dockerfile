FROM node:14-alpine as builder

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn workspaces focus --production && yarn cache clean

COPY . .
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx4spa:7.0.1

COPY --from=builder /out /usr/share/nginx/html
