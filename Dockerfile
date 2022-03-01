FROM duluca/minimal-nginx-web-server
WORKDIR ../
COPY ./build/ /var/www
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
