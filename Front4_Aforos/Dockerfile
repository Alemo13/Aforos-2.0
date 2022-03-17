FROM node:17-alpine3.14

# set working directory
WORKDIR /home/node/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]