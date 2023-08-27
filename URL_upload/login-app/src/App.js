import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './components/Login.js';
import Dashboard from './components/dashboard'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const developmentMode = true; 

  if (developmentMode) {
    return <Dashboard />;
  }

  if (isLoggedIn) {
    // Render Dashboard using a portal, outside the root App div
    return ReactDOM.createPortal(
      <Dashboard />,
      document.getElementById('portal-root')  // Assuming 'portal-root' is an element outside your main app root
    );
  }

  return (
    <div className="App">
      <Login onSuccessfulLogin={() => setIsLoggedIn(true)} />
    </div>
  );
}

export default App;