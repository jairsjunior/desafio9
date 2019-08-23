import { RhelenaPresentationModel, globalState } from 'rhelena';
import manuh from 'manuh';

export default class HomeModel extends RhelenaPresentationModel {
    constructor(props) {
        super(props);

        this.sensor1 = 0;
        this.sensor2 = 0;
        this.sensor3 = 0;
        this.itu = 0;
        this.volumeAgua = 0;
        this.temperaturaFah = 0;
        this.url = "http://localhost:8080/iot";

        manuh.subscribe("url/set", "HomeModel", (msg, info) => {
            this.url = msg.url;
        });

        this.getData();
        setInterval(() => {
            this.getData();            
        }, 5000);
    }

    getData() {
        fetch(this.url)
        .then()
        .then(data => data.json())
        .then(data => {
            this.sensor1 = data.iotData.temperatura;
            this.sensor2 = (data.iotData.umidade_ar * 100).toFixed(2);
            this.sensor3 = (data.iotData.umidade_solo * 100).toFixed(2);
            this.itu = data.itu.toFixed(2);
            this.temperaturaFah = data.fahrenheit.toFixed(2);
            this.volumeAgua = data.volumeAgua.toFixed(4);
        })
    }
}