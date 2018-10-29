FROM node:8.12.0

COPY package.json /app/
WORKDIR /app

RUN npm install

COPY . /app
RUN npm run build && \
    echo "$(git log -1 --pretty=format:"%h - %an, %ar: %s")" > /app/dist/version
CMD npm run start
EXPOSE 8085
