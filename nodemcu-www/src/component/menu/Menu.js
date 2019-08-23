import React from 'react';
import { attachModelToView } from 'rhelena';
import MenuModel from './MenuModel';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


export default class Home extends React.Component {
    componentWillMount() {
        attachModelToView(new MenuModel(this.props), this);
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Dashboard NodeMCU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Url" className="mr-sm-2" value={this.state.url} onChange={(e) => this.viewModel.handleChange(e.target.value)}/>
                            <Button variant="outline-success" onClick={() => { this.viewModel.changeUrl() }}>Change</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}