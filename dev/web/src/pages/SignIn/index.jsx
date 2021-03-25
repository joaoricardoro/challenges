import React, { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const form = React.createRef();
  
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validated, setValidated] = useState(false);
  // const [showPass, setShowPass] = useState(false);
  const { signIn } = useAuth();

  const handleSignin = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isValid = form.current.checkValidity();
    setValidated(true);

    if (isValid) {
      const signedIn = await signIn({ userName, userPassword });

      if (!signedIn) {
        setValidated(false);
      }
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-md-center align-items-center h-100">
        <Col xs="4">
          <Form noValidate validated={validated} onSubmit={handleSignin} ref={form}>
            <h1 className="text-center">Sign-in</h1>
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
              <Button type="submit" variant="primary" size="lg" block onClick={handleSignin}>Sign-in</Button>
            </Form.Group>

            <Button as={Link} to="/signup" variant="secondary" size="lg" block>Sign-up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
      // <InputIcon>
      //   <Input
      //     type={!showPass ? "Password" : "Text"}
      //     placeholder="Password"
      //     onChange={(value) => setUserPassword(value.target.value)}
      //     value={userPassword}
      //   />
      //   <IconRight onClick={() => setShowPass(!showPass)}>
      //     {showPass && <FaEye size={30} />}
      //     {!showPass && <FaEyeSlash size={30} />}
      //   </IconRight>
      // </InputIcon>
      // <Link to='/signup' style={{ fontSize: '28px', color: 'red', textDecoration: 'none', transitionDuration: '0.4'}}>
      //   Sign-up
      // </Link>
      // <Button onClick={handleSignin}>
      //   Sign-in
      // </Button>
    // </Component>
  );
};

export default Login;
