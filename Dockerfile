FROM node:14-alpine AS builder

WORKDIR /app
# needed for node alpine
RUN chown -R 1000:1000 /app && \
  chmod -R 755 /app && \
  chown 1000:1000 /tmp && \
  chmod 1777 /tmp

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn workspaces focus --production && yarn cache clean

COPY --chown=1000:1000 . .
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx4spa:7.0.1

COPY --from=builder /app/out /usr/share/nginx/html
