import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function PlanetBio(){
    const location = useLocation()
    const planet = location.state.planet
    console.log(planet);
    return (
      <div className="App">
        <Container>
          <Row className="nameCol">
            <Col >
              <h5>Bio</h5>
              <h1>{planet.name}</h1>
              <p>Last Updated: {planet.edited.slice(0,10)}</p>
            </Col>
          </Row>
          <hr className="divider"></hr>
          <Row className="infoCol">
            <Col>
              <h4>Diameter: {planet.diameter}m</h4>
              <h4>Rotation Period: {planet.rotation_periodr}</h4>
              <h4>Orbiltal Period: {planet.orbital_period}</h4>
              </Col>
              <Col>
              <h4>Gravity: {planet.gravity}</h4>
              <h4>Terrain: {planet.terrain}</h4>
              <h4>Population: {planet.population}</h4>
              </Col>     
          </Row>
        </Container>
      </div>
    );
}

export default PlanetBio;
