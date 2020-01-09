ARG NGINX_VERSION=1.17
ARG EXPOSED_PORT=80
ARG NODE_VERSION=10.15.3

FROM node:${NODE_VERSION} as builder

WORKDIR /app

COPY ./ .
COPY yarn.lock ./yarn.lock

RUN yarn
RUN yarn build

FROM nginx:${NGINX_VERSION}

ENV PORT=${EXPOSED_PORT}

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]
