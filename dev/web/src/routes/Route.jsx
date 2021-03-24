import React from 'react';
import { useAuth } from '../hooks/Auth';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { name } = useAuth();

  return (
    <ReactDOMRoute 
      {...rest} 
      render={({ location }) => {
          return isPrivate === !!name ? (
            <Component />
          ) : (
            <Redirect to={{ 
              pathname: isPrivate ? '/' : '/main',
              state: { from: location }, 
            }} />
          )
        }
      }
    />
  )
};

export default Route;