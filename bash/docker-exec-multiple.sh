#!/bin/bash

# Dynamic Docker exec-command on many containers


COMMAND_CHOSEN=$1

for CONTAINER in $(docker ps --format='{{ .Id }}')
do

echo "Applying the command " + $COMMAND_CHOSEN + " on the container with id: " + $CONTAINER

docker exec -it $CONTAINER /bin/bash/$COMMAND_CHOSEN

done
