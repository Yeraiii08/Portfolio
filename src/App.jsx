import React, { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Inicio />
    </div>
  )
}

export default App;