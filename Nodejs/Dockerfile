#base image 
FROM node:alpine 

# Adding a work directory
WORKDIR /usr/app
# install some dependancies we need to use npm
COPY ./package.json ./
#install some dependancies that gets us npm
RUN  npm install

#COPY all the steps that dont requrire jso file 
COPY ./ ./ 

#Default commands
 CMD ["npm","start"]