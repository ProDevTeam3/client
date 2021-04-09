FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build


FROM nginx:alpine
COPY --from=builder /app/build/ /var/www/prodevteam3.ml/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443