import React from 'react';
import { Auth } from './Auth';
import { Toast } from './Toast';

const AppProvider = ({ children }) => (
  <Toast>
    <Auth>
      {children}
    </Auth>
  </Toast>
);

export default AppProvider;