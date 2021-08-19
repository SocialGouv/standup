FROM ghcr.io/socialgouv/docker/nginx4spa:6.43.0
COPY ./out /usr/share/nginx/html
