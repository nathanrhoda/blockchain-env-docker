FROM node:16-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install && \
    npm i -g truffle && \
    npm install ganache-cli --global
CMD ["node", "/app/bot.js"]
