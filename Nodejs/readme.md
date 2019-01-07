Docker running with docker port mapping command
-p for the port
first port Route incoming resquests to this port on localhost
last port after the colone refers to the port in the container. 
'''
docker run -p localhostport:containerport <image-id>
'''
Checking the container folder

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
This command is really import i the docker file, everytime the file is run the programe goes line by line and running alot of copy commands might make your longer to build.