
import React from 'react';
import { useAuth } from '../../hooks/Auth';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
  const { signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
  };

  return(
    <Container>
      <Navbar bg="light">
        <Navbar.Brand>IHeros</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/main">Main</Nav.Link>
            <NavDropdown title="Heros">
              <NavDropdown.Item as={Link} to="/heros">Heros list</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hero">New hero</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <Button onClick={handleSignOut}>Logout</Button>
      </Navbar>
    </Container>
  );
};

export default Header;