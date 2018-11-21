#base image 
FROM node:alpine 

# install some dependancies we use npm
COPY ./ ./
#install some dependancies that gets us npm
RUN  npm install

#Default commands
 CMD ["npm","start"]