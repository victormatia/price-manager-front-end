FROM node:18.16.0
WORKDIR /price-manager-frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]