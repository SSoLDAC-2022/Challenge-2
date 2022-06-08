FROM node:12.18.3 AS build

LABEL version="1.0"

WORKDIR /app
COPY . .
RUN npm install --production
RUN npm install -save typescript @types/node @types/react 

RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
