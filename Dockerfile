FROM nginx
LABEL name = "vue-fond"
LABEL version = "1.0"
COPY ./dist /usr/share/nginx/html
COPY ./vue-fond.conf /etc/nginx/conf.d
EXPOSE 80

