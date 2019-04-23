FROM nginx:1.16

# Copy built bundle files in container
COPY  ./build/ /usr/share/nginx/html

