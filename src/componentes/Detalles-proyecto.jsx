import React from 'react';

const Detalles = ({ proyecto, cerrarDetalles }) => {
  if (!proyecto) return null;

  return (
    <div className="Detalles-caja-fea">
      <button className="cerrar-btn" onClick={cerrarDetalles}>X</button>
      <h2>{proyecto.name}</h2>
      <p><strong>Descripción:</strong> Este proyecto no tiene descripcion</p>
      <hr></hr>
      <p><strong>Lenguaje principal:</strong> {proyecto.language}</p>

      <div style={{ marginTop: '20px' }}>
        <a href={proyecto.html_url} target="_blank" rel="noreferrer">
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default Detalles;