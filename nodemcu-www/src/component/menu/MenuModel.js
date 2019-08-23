import { RhelenaPresentationModel, globalState } from 'rhelena';
import manuh from 'manuh';

export default class MenuModel extends RhelenaPresentationModel {
    constructor(props) {
        super(props);
    
        this.url = "http://localhost:8080/iot";
    }

    handleChange(value){
        console.log(value);
        this.url = value;
    }

    changeUrl() {
        manuh.publish("url/set", { url: this.url}, { retained: true });
    }
}