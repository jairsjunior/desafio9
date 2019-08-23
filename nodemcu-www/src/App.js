import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './component/home/Home';
import Menu from './component/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container className="d-flex align-items-center">
        <Row>
          <Col md={12}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
