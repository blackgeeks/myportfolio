FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
