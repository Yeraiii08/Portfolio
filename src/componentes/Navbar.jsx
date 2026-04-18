import React, { useState } from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {

  const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#f0f0f0' : 'black'
  };

  const nombre = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: isDarkMode ? '#f0f0f0' : 'black'
  };

  const linkContainer = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const link = {
    textDecoration: 'none',
    color: isDarkMode ? '#f0f0f0' : 'black',
    fontWeight: '500',
    cursor: 'pointer',
  };

  return (
    <nav style={nav}>
      <div>
        <p style={nombre}>Yerai Garcia</p>
      </div>

      <ul style={linkContainer}>
        <li><a href="#inicio" style={link}>Inicio</a></li>
        <li><a href="#projects" style={link}>Proyectos</a></li>
        <li><a href="#sobreMi" style={link}>Sobre mí</a></li>
        <li><a href="#contacto" style={link}>Contacto</a></li>

        <li>
          <button onClick={toggleTheme} className="theme-btn">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;