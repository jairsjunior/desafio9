from flask import Flask, jsonify, render_template
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)
app.config['MQTT_BROKER_URL'] = os.environ['MQTT_HOST']
app.config['MQTT_BROKER_PORT'] = int(os.environ['MQTT_PORT'])
app.config['MQTT_USERNAME'] = os.environ['MQTT_USERNAME']
app.config['MQTT_PASSWORD'] = os.environ['MQTT_PASSWORD']
app.config['MQTT_KEEPALIVE'] = 5

@app.route("/", methods=['GET'])
def hello():
    error=None
    return render_template('index.html', error=error)

@app.route("/iot", methods=['GET'])
def result():
    # print(request)

    # Implemente sua lógica aqui e insira as respostas na variável 'resposta'

    resposta = {
        "iotData": {},
        "itu": 0,
        "volumeAgua": 0,
        "fahrenheit": 0
    }
    response = app.response_class(
        response=json.dumps(resposta),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
