import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="NavBar bg-body-tertiary rounded-3" sticky='top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" style={{fontSize: "24px", fontFamily: "quantico"}}>Home</Nav.Link>
            <Nav.Link href="/runes" style={{fontSize: "24px", fontFamily: "quantico"}}>Runes</Nav.Link>
            <Nav.Link href="/items" style={{fontSize: "24px", fontFamily: "quantico"}}>Items</Nav.Link>
            <Nav.Link as={NavLink} to="/login" style={{fontSize: "24px", fontFamily: "quantico"}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;