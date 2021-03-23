import React from 'react';
import { AuthProvider } from './Auth';
import { ToastProvider  } from './ToastContext';

const AppProvider = ({ children }) => (
  <ToastProvider >
    <AuthProvider>
      {children}
    </AuthProvider>
  </ToastProvider >
);

export default AppProvider;