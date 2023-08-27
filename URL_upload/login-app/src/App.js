import React, { useState } from 'react';
import './App.css';
import Login from './components/Login.js';
import Dashboard from './components/dashboard'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const developmentMode = true; // Set this to false when deploying

  if (developmentMode) {
    return <Dashboard />;
  }

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Login onSuccessfulLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;