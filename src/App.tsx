// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import fetchJoke from './services/fetchJoke';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
      const jokes = await fetchJoke();
      setJoke(jokes.joke);
    }
    getJoke();
  }, []);

  const handleClick = async () => {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>New Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
