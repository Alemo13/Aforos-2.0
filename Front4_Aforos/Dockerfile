FROM node:17-alpine3.14

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@0.1.0 

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]