import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useToast } from '../../hooks/ToastContext';
import { useAuth } from '../../hooks/Auth';
import imgHeros from '../../images/heros.jpg';
import { Link } from 'react-router-dom';

import {
  App, Component, Title, Input, TextLink,
  Button, Image, BtnCancelSignup, InputIcon, IconRight, 
} from './styles';


const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');
  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleRegister = () => {
    //setRegister(!registerForm);
  };

  const handleSignup = () => {
    if (!userPassword || !checkPassword || (userPassword !== checkPassword)) {
      addToast({
        type: 'error',
        title: 'Senhas não batem',
        description: 'As senhas devem ser iguais'
      })
    }
  };

  // const userCreated = await api.post(user, {
  //   name: userName, 
  //   password: userPassword
  // });

  // if (userCreated) signIn({ userName, userPassword });

  const handleSignin = () => {
    signIn({ userName, userPassword });
  };

  return (
    <App>
      <Image src={imgHeros} />
      <Component>
        <Title>iHeros</Title>
        {
          <>
            <Input
              type="Text"
              placeholder="Name"
              onChange={(value) => setUserName(value.target.value)}
              value={userName}
            />
            <InputIcon>
              <Input
                type={!showPass ? "Password" : "Text"}
                placeholder="Password"
                onChange={(value) => setUserPassword(value.target.value)}
                value={userPassword}
              />
              <IconRight onClick={() => setShowPass(!showPass)}>
                {showPass && <FaEye size={30} />}
                {!showPass && <FaEyeSlash size={30} />}
              </IconRight>
            </InputIcon>
            <Link to='/signup' style={{ fontSize: '28px', color: 'red', textDecoration: 'none', transitionDuration: '0.4'}}>
              Sign-up
            </Link>
            <Button onClick={handleSignin}>
              Sign-in
            </Button>
          </>
        }
      </Component>
    </App>
  );
};

export default Login;
