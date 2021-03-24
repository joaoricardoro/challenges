import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { auth, register } from '../config/connections';
import { useToast } from './ToastContext';

const Auth = createContext({});

const AuthProvider = ({ children }) => {
  const { addToast } = useToast();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@token');
    const name = localStorage.getItem('@userName');
    return {token, name}
  });

  const signIn = useCallback( async ({ userName, userPassword }) => {
    try {
      const response = await api.post(auth, {
        name: userName, 
        password: userPassword
      });
  
      const { access_token: token } = response.data;
      if (!token) {
        throw Error();
      }

      localStorage.setItem('@token', token);
      localStorage.setItem('@userName', userName);

      setData({ token, name: userName });

      addToast({
        type: 'success',
        title: `Welcome ${userName}`,
        description: 'Logged in!'
      })
      return true;
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Error in authentication!',
        description: 'User or Password invalid!'
      });
    }

    return false;
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