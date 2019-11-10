FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist/out/ .

EXPOSE 80