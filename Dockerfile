FROM nginx:1.15

# Copy built bundle files in container
COPY  ./build/ /usr/share/nginx/html

