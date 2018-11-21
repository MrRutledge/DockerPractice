#Use an existing docker image as a base
FROM alpine

#RUN echo http://mirror.yandex.ru/mirrors/alpine/v3.5/main > /etc/apk/repositories; \
    #echo http://mirror.yandex.ru/mirrors/alpine/v3.5/community >> /etc/apk/repositories
#Download  and install 
RUN apk add --update redis
#install gcc
RUN apk add --update gcc

# Tell the image what to do when it starts as a conatainer
CMD [ "redis-server" ]