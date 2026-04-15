import React, { useState, useEffect } from 'react';
import './Proyectos.css';

const Projects = () => {
  const misProyectos = [
    { id: 1, nombre: "Un Proyecto", lenguaje: "JavaScript" },
    { id: 2, nombre: "Otro", lenguaje: "React" },
    { id: 3, nombre: "fasdfasdf", lenguaje: "JavaScript" },
    { id: 4, nombre: "nojsdnvinvjnosnf", lenguaje: "HTML/CSS" }
  ];

  const [filtro, setFiltro] = useState('Todos');
  const [proyectosMostrados, setProyectosMostrados] = useState(misProyectos);

  useEffect(() => {
    if (filtro === 'Todos') {
      setProyectosMostrados(misProyectos);
    } else {
      const filtrados = misProyectos.filter(proyecto => 
        proyecto.lenguaje.includes(filtro)
      );
      setProyectosMostrados(filtrados);
    }
  }, [filtro]);

  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos</h2>
      
      <div className="filtros">
        <button 
          className={filtro === 'Todos' ? 'active' : ''} 
          onClick={() => setFiltro('Todos')}
        >
          Todos
        </button>
        <button 
          className={filtro === 'React' ? 'active' : ''} 
          onClick={() => setFiltro('React')}
        >
          React
        </button>
        <button 
          className={filtro === 'JavaScript' ? 'active' : ''} 
          onClick={() => setFiltro('JavaScript')}
        >
          JavaScript
        </button>
      </div>

      <div className="projects-grid">
        {proyectosMostrados.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <div className="project-content">
              <h3>{proyecto.nombre}</h3>
              <p>Tecnologías: <strong>{proyecto.lenguaje}</strong></p>
            </div>
            <button className="btn-details" onClick={() => alert("El modal lo haré mañana")}>Ver detalles</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;