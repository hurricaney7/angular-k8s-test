FROM node:12.9-alpine
WORKDIR '.'
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
