FROM iamfreee/docker-nginx-static-spa:latest
WORKDIR /var/www/html
COPY /dist /var/www/html
EXPOSE 80
