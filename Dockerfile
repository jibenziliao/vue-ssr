FROM node:8.12.0-alpine
COPY . /app
WORKDIR /app
RUN npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ && \
    npm install
RUN npm run build && \
    echo "$(git log -1 --pretty=format:"%h - %an, %ar: %s")" > /app/dist/version && \
    npm run start
EXPOSE 8085
