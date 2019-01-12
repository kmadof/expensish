FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY /expensish-app/dist/expensish/ .

RUN rm /usr/share/nginx/html/50x.html