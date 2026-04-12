import React, { useState } from 'react';

const Navbar = () => {

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
  };

  const nombre = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black'
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
    color: 'black',
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
        <li><a href="#sobre-mi" style={link}>Sobre mí</a></li>
        <li><a href="#proyectos" style={link}>Proyectos</a></li>
        <li><a href="#contacto" style={link}>Contacto</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;