FROM nginx:1.17

# Copy built bundle files in container
COPY  ./build/ /usr/share/nginx/html

