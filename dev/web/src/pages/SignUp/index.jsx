import React, { useState } from 'react';
import { FaEyeSlash, FaEye, FaArrowLeft } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import imgHeros from '../../images/heros.jpg';
import {
  App, Component, Title, Input, TextLink,
  Button, Image, BtnCancelSignup, InputIcon, IconRight,
} from './styles';


const SignUp = () => {
  const [registerForm, setRegister] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [checkShowPass, setCheckShowPass] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');

  const handleRegister = () => {
    setRegister(!registerForm);
  };

  const handleSignup = () => {
    if (!userPassword || !checkPassword || (userPassword !== checkPassword)) {

    }
  };

  const handleBackToLogin = () => {
    Location.href='localhost:3000/';
  };

  return (
    <App>
      <Image src={imgHeros} />
      <Component>
        <Title>New Register</Title>
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
            <InputIcon>
              <Input
                type={!checkShowPass ? "Password" : "Text"}
                placeholder="Confirm password"
                onChange={(value) => setCheckPassword(value.target.value)}
                value={checkPassword}
              />
              <IconRight onClick={() => setCheckShowPass(!checkShowPass)}>
                {checkShowPass && <FaEye size={30} />}
                {!checkShowPass && <FaEyeSlash size={30} />}
              </IconRight>
            </InputIcon>
            {/* <BtnCancelSignup 
              onClick={handleBackToLogin}
            >
              Cancel
            </BtnCancelSignup> */}
            <Link to="/" style={{ fontSize: '28px', color: 'red', textDecoration: 'none', transitionDuration: '0.4'}}>
              Cancel
            </Link>
            <BtnCancelSignup
              onClick={handleSignup}
            >
              Sign-up
            </BtnCancelSignup>
          </>
        }
      </Component>
    </App>
  );
};

export default SignUp;