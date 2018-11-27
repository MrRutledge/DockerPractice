Docker running with docker port mapping command
-p for the port
first port Route incoming resquests to this port on localhost
last port after the colone refers to the port in the container. 
'''
docker run -p localhostport:containerport <image-id>
'''
Checking the container folder
ip:192.168.99.100
'''
docker run -it <image-id> sh
''
running a cmd in the  container
'''
docker exec -it <image-id> sh
'''
Rebuilding a docker container(taging the container)
'''
docker build -t <cotainer-Id> .
''' 

COPY statment
This comand is really import i the docker file, everytime the file is run the programe goes line by line and running alot of copy commands might make your longer to build.

setting up a network connection between two seperate containers
'''
 [NodeApp-container]--Network-->[Redis-Contaier]
'''
We can use Docker CLI network features
or we can use a seperate Docker compose

**Docker compose** is a new CLI in docker 
it helps us to speed us the running the container especially multiple containers

It also helps us to automate most of the commands that we have been running by hand.

Four ways to automate the container starting processes 

we have the:
"no"----> this policy never restarts the conatainer
"+ always"----> this policy states that the container always try to restart
"on-failure"---> only restart if a container stops with an error code
"unless-stopped"---> always restart unless unless the developer forcibly stops it.
