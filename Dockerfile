FROM microportal/nginx-kong:latest

ENV SERVICE_NAME=portal-app1 \
    SERVICE_URL=http://portal-app1:80/ \
    SERVICE_PATHS=/app1

COPY release /usr/share/nginx/html