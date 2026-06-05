import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Navbar className="Footer bg-body-tertiary rounded-3" fixed='bottom'>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className='mx-auto'>
                <Nav.Link as={NavLink} to="/" style={{fontSize: "18px", fontFamily: "quantico"}}>Created by Sean Mckenney, 2026</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;