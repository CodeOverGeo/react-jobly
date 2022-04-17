import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UserContext from '../Auth/UserContext';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>
            Welcome Back, {currentUser.firstName || currentUser.username}!
          </h2>
        ) : (
          <p>
            <Stack gap={2} className="col-md-3 mx-auto">
              <LinkContainer
                className="btn btn-primary font-weight-bold mr-3"
                to="/login"
              >
                <Button>Log in</Button>
              </LinkContainer>
              <LinkContainer
                className="btn btn-primary font-weight-bold mr-3"
                to="/signup"
              >
                <Button>Sign in</Button>
              </LinkContainer>
            </Stack>
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
