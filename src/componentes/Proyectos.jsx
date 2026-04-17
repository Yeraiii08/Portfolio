import React, { useState, useEffect } from 'react';
import './Proyectos.css';
import Detalles from './Detalles-proyecto';

const Projects = () => {
  const [misProyectos, setMisProyectos] = useState([]);
  const [proyectosMostrados, setProyectosMostrados] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [cargando, setCargando] = useState(true);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  // API de GitHub
  useEffect(() => {
    fetch('https://api.github.com/users/Yeraiii08/repos')
      .then(response => response.json())
      .then(data => {
        const reposPropios = data.filter(repo => !repo.fork);
        setMisProyectos(reposPropios);
        setProyectosMostrados(reposPropios);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error cargando los repositorios:", error);
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    if (filtro === 'Todos') {
      setProyectosMostrados(misProyectos);
    } else {
      const filtrados = misProyectos.filter(proyecto => proyecto.language === filtro);
      setProyectosMostrados(filtrados);
    }
  }, [filtro, misProyectos]);

  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos de GitHub</h2>
      
      <div className="filtros" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => setFiltro('Todos')}>Todos</button>
        <button onClick={() => setFiltro('C#')}>C#</button>
        <button onClick={() => setFiltro('Java')}>Java</button>
        <button onClick={() => setFiltro('Python')}>Python</button>
        <button onClick={() => setFiltro('JavaScript')}>JavaScript</button>
        <button onClick={() => setFiltro('HTML')}>HTML</button>
        <button onClick={() => setFiltro('CSS')}>CSS</button>
      </div>

      {cargando ? (
        <p style={{ textAlign: 'center' }}>Cargando...</p>
      ) : (
        <div className="projects-grid">
          {proyectosMostrados.map((proyecto) => (
            <div key={proyecto.id} className="project-card">
              <h3>{proyecto.name}</h3>
              <p>Tecnología principal: {proyecto.language || 'Varias'}</p> 
              <button onClick={() => setProyectoSeleccionado(proyecto)}>Ver detalles</button>
            </div>
          ))}
        </div>
      )}

      {proyectoSeleccionado && (
        <Detalles 
          proyecto={proyectoSeleccionado} 
          cerrarDetalles={() => setProyectoSeleccionado(null)} 
        />
      )}
    </section>
  );
};

export default Projects;