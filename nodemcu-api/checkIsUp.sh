#!/bin/sh

#Verify if a service is responding at address : port
if [[ -z "${MQTT_HOST}" ]]; then
  echo ERROR: MQTT_HOST not defined
  exit 1
fi

if [[ -z "${MQTT_PORT}" ]]; then
  echo ERROR: MQTT_PORT not defined
  exit 1
fi


while [ "$(nc -z $MQTT_HOST $MQTT_PORT </dev/null; echo $?)" !=  "0" ];
do sleep 5;
echo "Waiting for your service is UP and RESPONDING";
done

sleep 15;

python ./service.py
