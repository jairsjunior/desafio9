import React from 'react';
import { attachModelToView } from 'rhelena';
import HomeModel from './HomeModel';
import GaugeChart from 'react-gauge-chart'
import { Card, CardDeck, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {
    componentWillMount() {
        attachModelToView(new HomeModel(this.props), this);
    }

    render() {
        return (
            <div>
                <Row>
                    <CardDeck style={{ paddingTop: "1rem"}}>
                        <Card style={{ width: '22rem' }} className="text-center">   
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart1" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.sensor1/100} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.sensor1 } &deg;C </h1>
                                    Temperatura    
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '22rem' }} className="text-center">
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart2" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.sensor2/100} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.sensor2 } % </h1>
                                    Umidade Ar
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '22rem' }} className="text-center">
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart3" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.sensor3/100} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.sensor3 } % </h1>
                                    Umidade Solo
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
                <Row>
                    <CardDeck style={{ paddingTop: "1rem"}}>
                    <Card style={{ width: '22rem' }} className="text-center">
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart4" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.temperaturaFah/100} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.temperaturaFah } &deg;F </h1>
                                    Temperatura
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '22rem' }} className="text-center">
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart5" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.itu/100} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.itu } </h1>
                                    ITU
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '22rem' }} className="text-center">
                            <Card.Header style={{ backgroundColor: "#282c34"}}>
                                <GaugeChart id="gauge-chart6" 
                                    nrOfLevels={1} 
                                    colors={["#FFFFFF"]} 
                                    hideText={true} 
                                    needleColor={"#a2a2a2"}
                                    needleBaseColor={"#a2a2a2"}
                                    percent={this.state.volumeAgua} />    
                            </Card.Header>
                            <Card.Body style={{ padding: "0.2rem"}}>
                                <Card.Title>
                                    <h1> { this.state.volumeAgua } m3 </h1>
                                    Volume Agua
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
                
            </div>
        );
    }
}