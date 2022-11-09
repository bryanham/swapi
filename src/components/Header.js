import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";

function Header({profiles, planets, starships}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
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