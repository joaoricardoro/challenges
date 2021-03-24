import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Routes from './routes';
import AppProvider from './hooks';

const App = () =>  (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;