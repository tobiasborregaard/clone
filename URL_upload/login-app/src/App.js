import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js';
import Dashboard from './components/dashboard'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const developmentMode = false; // Set this to false when deploying

  if (developmentMode) {
    return <Dashboard />;
  }

  return (
    <Router>
            <div className="App">
                {isLoggedIn ? <Dashboard /> : <Login onSuccessfulLogin={() => setIsLoggedIn(true)} />}
            </div>
        </Router>
  );
}

export default App;