FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY public/monitoring public/monitoring
EXPOSE 4000
CMD [ "node", "server.js" ]