const mqtt = require('mqtt')

const MQTT_HOST = process.env.MQTT_HOST || "localhost"
const MQTT_PORT = process.env.MQTT_PORT || "1883"
const MQTT_CONTEXT = process.env.MQTT_CONTEXT || ""
const MQTT_URL = process.env.MQTT_URL || `mqtt://${MQTT_HOST}:${MQTT_PORT}/${MQTT_CONTEXT}`

const MQTT_USERNAME = process.env.MQTT_USERNAME || undefined
const MQTT_PASSWORD = process.env.MQTT_PASSWORD || undefined

let SENSOR_1_NAME = process.env.SENSOR_1_NAME || "umidade_ar"
let SENSOR_2_NAME = process.env.SENSOR_2_NAME || "umidade_solo"
let SENSOR_3_NAME = process.env.SENSOR_3_NAME || "temperatura"
let SENSOR_1_VALUE = process.env.SENSOR_1_VALUE || "0.50"
let SENSOR_2_VALUE = process.env.SENSOR_2_VALUE || "0.11"
let SENSOR_3_VALUE = process.env.SENSOR_3_VALUE || "27"
let MQTT_PUBLISH_TOPIC = process.env.MQTT_PUBLISH_TOPIC || "iot-2/type/Device1/id/D1/evt/1-anl/fmt/json"

const payload = { d: {} };

let client;
if (MQTT_USERNAME) {
    client  = mqtt.connect(MQTT_URL, { username: MQTT_USERNAME, password: MQTT_PASSWORD })
}else{
    client  = mqtt.connect(MQTT_URL);
}

client.on('connect', () => {
    client.subscribe("nodemcu/sensor-1/name/set");
    client.subscribe("nodemcu/sensor-2/name/set");
    client.subscribe("nodemcu/sensor-3/name/set");
    client.subscribe("nodemcu/sensor-1/value/set");
    client.subscribe("nodemcu/sensor-2/value/set");
    client.subscribe("nodemcu/sensor-3/value/set");
    
    console.log('MQTT Connected!')
    console.log('Actual Payload:')
    console.log(JSON.stringify(payload, null, 4))
    setInterval(() => {
        payload['d']["timestamp"] = Date.now()
        payload['d'][SENSOR_1_NAME] = Number(SENSOR_1_VALUE) + ((Math.floor(Math.random() * 4) + 1)/100);
        payload['d'][SENSOR_2_NAME] = Number(SENSOR_2_VALUE) + ((Math.floor(Math.random() * 4) + 1)/100);
        payload['d'][SENSOR_3_NAME] = Number(SENSOR_3_VALUE) + (Math.floor(Math.random() * 4) + 1);
        client.publish(MQTT_PUBLISH_TOPIC, JSON.stringify(payload), { retain: true })
    }, 5000);
})

client.on('message', (topic, message) => {
    let json = JSON.parse(message);
    switch(topic){
        case "nodemcu/sensor-1/name/set": {
            SENSOR_1_NAME = json.name;
        }break
        case "nodemcu/sensor-2/name/set": {
            SENSOR_2_NAME = json.name;
        }break
        case "nodemcu/sensor-3/name/set": {
            SENSOR_3_NAME = json.name;
        }break
        case "nodemcu/sensor-1/value/set": {
            SENSOR_1_VALUE = json.value;
        }break
        case "nodemcu/sensor-2/value/set": {
            SENSOR_2_VALUE = json.value;
        }break
        case "nodemcu/sensor-3/value/set": {
            SENSOR_3_VALUE = json.value;
        }break
    }
})