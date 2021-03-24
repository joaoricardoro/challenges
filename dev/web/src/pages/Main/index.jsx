import React, { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'

const Main = () => {
  const { signOut, name } = useAuth();
  const handleSignOut = () => {
    signOut();
  };
  return(
    <div>
      <Header />
      <Container>
        <h1 class="mt-2">Welcome {name}</h1>
      </Container>
    </div>
  );
};

export default Main;
