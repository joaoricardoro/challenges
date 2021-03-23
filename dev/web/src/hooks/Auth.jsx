import React, { createContext, useCallback, useState, useContext } from 'react';

import fakeApi from '../services/fakeApi';
import { auth } from '../config/connections';
import { useToast } from './ToastContext';

const Auth = createContext({});

const AuthProvider = ({ children }) => {
  const { addToast } = useToast();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@token');
    const name = localStorage.getItem('@userName');

    if (token && name) {
      return {token, name}
    }

    return {};
  });

  const signIn = useCallback( async ({ userName, userPassword }) => {
    try {
      const response = await fakeApi.post(auth, {
        name: userName, 
        password: userPassword
      });
  
      const { user, token } = response.data;
  
      localStorage.setItem('@token', token);
      localStorage.setItem('@userName', user);
  
      setData({token, name: user})
      addToast({
        type: 'success',
        title: `Welcome ${user}`,
        description: 'Logged!'
      })
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Error in authentication!',
        description: 'User or Password invalid!'
      })
    }
  }, [addToast])

  const signOut = useCallback(() => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@userName');

    setData({});
  }, [])

  return (
    <Auth.Provider value={{name: data.name, token: data.token, signIn, signOut}}>
      {children}
    </Auth.Provider>
  )
}

function useAuth() {
  const context = useContext(Auth);

  if (!context) {
    throw new Error('userAuth must be used within an AuthProvider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth
}