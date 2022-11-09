import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function StarshipBio(){
    const location = useLocation()
    const starship = location.state.starship
    console.log(starship);
    return (
      <div className="App">
        <Container>
          <Row className="nameCol">
            <Col >
              <h5>Bio</h5>
              <h1>{starship.name}</h1>
              <p>Last Updated: {starship.edited.slice(0,10)}</p>
            </Col>
          </Row>
          <hr className="divider"></hr>
          <Row className="infoCol">
            <Col>
              <h4>Model: {starship.model} cm</h4>
              <h4>Manufacturer: {starship.manufacturer} kg</h4>
              <h4>No. of Crew: {starship.crew}</h4>
              </Col>
              <Col>
              <h4>Class: {starship.starship_class}</h4>
              <h4>Length: {starship.length}m</h4>
              <h4>Hyperdrive Rating: {starship.hyperdrive_rating}</h4>
              </Col>     
          </Row>
        </Container>
      </div>
    );
}

export default StarshipBio;
