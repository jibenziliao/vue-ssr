FROM node:8.12.0-alpine
COPY . /app
WORKDIR /app
RUN npm install cnpm --registry=https://registry.npm.taobao.org/ && \
    cnpm install
RUN npm run build && \
    echo "$(git log -1 --pretty=format:"%h - %an, %ar: %s")" > /app/dist/version && \
    npm run start
EXPOSE 8085
