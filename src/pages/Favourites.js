import React  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container, ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { favouriteState } from '../components/favouriteAtom';
import { Link } from "react-router-dom";

function Favourites(){
  const favourites = useRecoilValue(favouriteState)

  const favouriteList = favourites.map(favourite =>(
    <ListGroup>
      <Link to="/profile-bio" state={{profile: favourite}}>
        <ListGroup.Item key={favourite.name} style={{ padding: '20px', margin: '10px'}}>
          <h1>{favourite.name}</h1>
        </ListGroup.Item>
      </Link>
    </ListGroup>
  ))
    return(
      <Container>
      <Row className="nameCol">
        <Col>
          <h1>Favourites</h1>
          {favouriteList.length === 0 ? <h5>No Favourites Selected!</h5> : favouriteList}
        </Col>
      </Row>
      </Container>
  )
}

export default Favourites;
