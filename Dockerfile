ARG NGINX_VERSION=1.17
ARG EXPOSED_PORT=5000

FROM node:12-alpine as builder 

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM nginx:${NGINX_VERSION}

ENV PORT=${EXPOSED_PORT}

# Copy built bundle files in container
COPY --from=builder ./app/build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
