FROM node:8.11.3
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build && \
    echo "$(git log -1 --pretty=format:"%h - %an, %ar: %s")" > /app/dist/version && \
    npm run start
EXPOSE 8085
