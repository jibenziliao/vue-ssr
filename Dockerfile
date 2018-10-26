FROM node:8.11.3
COPY . /app
WORKDIR /app
RUN npm config set registry https://nexus.yunlu6.com/repository/ylnpm/ && \
    npm config set sass_binary_site https://npm.yunlu6.com/node-sass/ && \
    npm install
RUN npm run build && \
    echo "$(git log -1 --pretty=format:"%h - %an, %ar: %s")" > /app/dist/version && \
    npm run start
EXPOSE 8085
