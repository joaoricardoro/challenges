import React, {useState} from 'react';
import {
  App, Component, Title, Input, TextLink,
  Button,
} from './styles'

const Login = () => {
  const [ registerForm, setRegisterForm ] = useState(false);
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  return (
    <App>
      <Component>
        <Title>iHeros</Title>
        {!registerForm && 
        <>
          <Input 
            type="Text" 
            placeholder="Nome" 
            onChange={(value) => setUserName(value.target.value)}
            value={userName}
          />
           <Input 
              type="Text"
              placeholder="Senha" 
              onChange={(value) => setUserPassword(value.target.value)}
              value={userPassword}
            />
          <TextLink 
            type="Text" 
            placeholder="Senha" 
            onClick={console.log("senha")}
            onChange={() => {}}
          >
            {'Sign-up'}
          </TextLink>
          <Button 
            onClick={console.log("btn cadastra-se")}
          >
            Sign-in
          </Button>
        </>
      }
      </Component>
    </App>
  );
};

export default Login;
