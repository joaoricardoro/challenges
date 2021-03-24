import React, { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useToast } from '../../hooks/ToastContext';
import { register } from '../../config/connections';
import api from '../../services/api';

import './styles.css';

const SignUp = () => {
  const form = React.createRef();
  const userPasswordCheckField = React.createRef();
  
  const { addToast } = useToast();
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [validated, setValidated] = useState(false);
  const { signIn } = useAuth();

  const validatePassword = () => {
    if (userPassword !== userPasswordCheck) {
      userPasswordCheckField.current.setCustomValidity('Passwords must match');
      return false;
    } else {
      userPasswordCheckField.current.setCustomValidity('');
      return true;
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isValid = validatePassword() && form.current.checkValidity();
    setValidated(true);

    if (!isValid) {
      return;
    }
    
    try {
      await api.post(register, {
        name: userName, 
        password: userPassword,
        userPasswordCheck: userPasswordCheck
      });

      addToast({
        type: 'success',
        title: `Welcome ${userName}`,
        description: 'Account created!'
      });
      history.push('/')
    } catch(err) {
      
      addToast({
        type: 'error',
        title: `Error`,
        description: 'Something happened!'
      });
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-md-center align-items-center h-100">
        <Col xs="4">
          <Form noValidate validated={validated} onSubmit={handleSignUp} ref={form}>
            <h1 class="text-center">Sign-up</h1>
            <Form.Group>
              <Form.Control
                required
                size="lg"
                placeholder="Name"
                onChange={(value) => setUserName(value.target.value)} 
                value={userName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                size="lg"
                type="password"
                placeholder="Password"
                onChange={(value) => setUserPassword(value.target.value)} 
                value={userPassword}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                size="lg"
                type="password"
                placeholder="Repeat password"
                onChange={(value) => setUserPasswordCheck(value.target.value)} 
                value={userPasswordCheck}
                ref={userPasswordCheckField}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" variant="primary" size="lg" block onClick={handleSignUp}>Sign-up</Button>
            </Form.Group>

            <Button as={Link} to="/" variant="secondary" size="lg" block>Cancel</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
