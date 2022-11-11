import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Header({profiles, planets, starships}) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>Star Wars API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation" />
          <Navbar.Collapse id="navigation">
          <Nav id="navBar">
            <Link to="/" >Home</Link>
            <Link to="/planet-listing">Planets</Link>
            <Link to="/starship-listing">Starships</Link>
            <Link to="/favourites">Favourites</Link>
        </Nav>
        </Navbar.Collapse> 
        </Container>
      </Navbar>
    </>
  );
}

export default Header;