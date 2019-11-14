FROM node:12-alpine as builder 

WORKDIR /app

RUN yarn
RUN yarn build

ARG NGINX_VERSION=1.17
ARG EXPOSED_PORT=80

FROM nginx:${NGINX_VERSION}

ENV PORT=${EXPOSED_PORT}

# Copy built bundle files in container
COPY --from=builder ./app/build/ /usr/share/nginx/html

EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]
