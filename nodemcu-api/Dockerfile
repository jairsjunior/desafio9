FROM python:3-alpine3.9

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV MQTT_HOST=localhost
ENV MQTT_PORT=1883
ENV MQTT_USERNAME=
ENV MQTT_PASSWORD=
ENV MQTT_TOPIC=iot-2/#

ENV SENSOR_1_NAME=umidade_ar
ENV SENSOR_2_NAME=umidade_solo
ENV SENSOR_3_NAME=temperatura

CMD [ "sh", "checkIsUp.sh" ]