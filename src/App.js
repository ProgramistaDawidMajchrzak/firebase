import React, { useState } from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

// https://www.youtube.com/watch?v=PKwu15ldZ7k

function App() {
  const [active, setActive] = useState('LogIn')
  return (
    <div className="app">
      {active === 'LogIn' ?
        <LogIn
          setActive={setActive}
        /> :
        <SignUp
          setActive={setActive}
        />}
    </div>
  );
}

export default App;
