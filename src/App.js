import React, { useState, useEffect } from 'react';

import instance from './api/axios';

import './App.css';

const App = () => {
  const [response, setResponse] = useState('');

  const testConnection = async () => {
    const response = await instance.get('test/connection');
    console.log(response)
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
