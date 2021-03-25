
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
        <Navbar.Brand>IHeroes</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/main">Main</Nav.Link>
            <NavDropdown title="Heroes">
              <NavDropdown.Item as={Link} to="/heroes">Heroes list</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hero">New hero</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hero vs Treat">
              <NavDropdown.Item as={Link} to="/history">List</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <Button onClick={handleSignOut}>Logout</Button>
      </Navbar>
    </Container>
  );
};

export default Header;