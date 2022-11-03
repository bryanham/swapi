import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Header({profiles, planets, starships}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Star Wars API
          </Navbar.Brand>
          <Nav>
            <Link to="/" >Home</Link>
            <Link to="/planet-listing">Planets</Link>
            <Link to="/starship-listing">Starships</Link>
            <Link to="/favourites">Favourites</Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;