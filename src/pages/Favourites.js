import React  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { favouriteState } from '../components/favouriteAtom';

function Favourites(){
  const favourites = useRecoilValue(favouriteState)

  const favouriteList = favourites.map(favourite =>(
    <h1>{favourite.name}</h1>
  ))
  console.log(favourites)
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
