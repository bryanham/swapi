import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function StarshipListing({starships}){
    return(
      <Container>
          {starships.map(p => (
              <ListGroup key={p.name}>
                  <Link to="/starship-bio" state={{starship: p}}>
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

export default StarshipListing;
