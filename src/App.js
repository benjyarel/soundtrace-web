import React, { useState, useEffect } from 'react';

import serverFetch from './api/axios';

import './App.css';

const App = () => {
  const [response, setResponse] = useState('');

  const testConnection = async () => {
    const response = await serverFetch.get('test/connection');
    setResponse(response.data.content)
  }

  useEffect( () =>{
    testConnection();
  },[])

  return (
    <div className="App">
     <h1> Soundtrace - Web </h1>
     <p>{response}</p>
    </div>
  );
};

export default App;
