import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function PlanetListing({planets}){

    return(
      <Container> 
          {planets.map(p => (
            <ListGroup key={p.name}>
                  <Link to="/planet-bio" state={{planet: p}}>
                      <ListGroup.Item key={p.name}
                      style={{ padding: '20px', margin: '10px'}}>
                          <h1>{p.name}</h1>
                      </ListGroup.Item>
                  </Link>
              </ListGroup>
          ))}
    </Container>
  )
}

export default PlanetListing;
