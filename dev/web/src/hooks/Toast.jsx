import React, { createContext, useContext, useCallback, useState } from 'react';
import uuid from "react-uuid";

import ToastContainer from '../components/ToastContainer';

const Toast = createContext();

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ type, title, description }) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description
    }

    setMessages((oldMessages) => [...oldMessages, toast])
  }, [])

  const removeToast = useCallback((id) => {
    setMessages(state => state.filter(message => message.id !== id));

  }, [])
  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages}/>
    </Toast.Provider> 
  );
}

function useToast() {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context;
}

export {
  ToastProvider,
  useToast,
}