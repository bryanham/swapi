import React  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function Favourites(){

    return(
      <Container>
      <Row className="nameCol">
        <Col >
          <h1>Favourites</h1>
        </Col>
      </Row>
      </Container>
  )
}

export default Favourites;
