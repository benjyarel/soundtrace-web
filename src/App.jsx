import React, { useEffect } from 'react';

import serverFetch from './api/axios';

import './App.css';

const App = () => {
  const testConnection = async () => {
    const response = await serverFetch.post('/auth/sign_in', {
      email: 'test1@gmail.com',
      password: 'password',
    });
    return response;
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="App">
      <h1> Soundtrace - Web </h1>
    </div>
  );
};

export default App;
