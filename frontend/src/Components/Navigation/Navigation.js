import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UserContext from '../Auth/UserContext';

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div>
        <LinkContainer to="/companies">
          <Nav.Link>Companies</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/jobs">
          <Nav.Link>Jobs</Nav.Link>
        </LinkContainer>

        <Nav className="justify-content-end">
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </div>
    );
  }

  function loggedOutNav() {
    return (
      <div>
        <Nav className="justify-content-end">
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </div>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Jobly</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {currentUser ? loggedInNav() : loggedOutNav()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
