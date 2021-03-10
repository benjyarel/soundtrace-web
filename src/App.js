import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [response, setResponse] = useState('')

  useEffect( () =>{
    const testConnection = async () => {
      const response = await fetch('http://localhost:3000/api/test/connection')
      setResponse(response.content)
    };
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
