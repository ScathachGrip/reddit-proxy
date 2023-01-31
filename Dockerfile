FROM node:latest

WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 2003
CMD ["node", "build/index.js"]