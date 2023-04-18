FROM node:14-alpine
WORKDIR /app
COPY index.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD node index.js