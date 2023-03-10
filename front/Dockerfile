FROM node:16-alpine

WORKDIR /front

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD "npm" "run" "start"