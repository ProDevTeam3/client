FROM node:alpine AS builder
WORKDIR /opt/app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install --frozen-lockfile
COPY ./maps/fusioncharts.poland.js ./node_modules/fusioncharts/maps
COPY . .
ENV REACT_APP_AUTH0_CLIENT_ID=z1EIu9fLYNPG3GZkCRCDcv5zLdMDbwnZ
ENV REACT_APP_AUTH0_DOMAIN=prodevteam.eu.auth0.com
ENV REACT_APP_API_HOST=https://localhost:5000
RUN yarn build

FROM nginx:alpine
COPY --from=builder /opt/app/build/ /var/www/prodevteam3.ml/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
