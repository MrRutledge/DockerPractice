Docker running with docker port mapping command
-p for the port
first port Route incoming resquests to this port on localhost
last port after the colone refers to the port in the container. 
'''
docker run -p localhostport:containerport <image-id>
'''
