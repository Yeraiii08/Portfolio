import React from 'react';
import './Inicio.css';
import miFoto from '../Imagenes/MiFoto.jpg';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-wrapper">
      <div className="inicio-inner">
        
        <div className="inicio-text-area">
          <p className="inicio-subtitle">Hola, mi nombre es</p>
          <h1 className="inicio-main-title">Yerai Garcia</h1>
          <h2 className="inicio-tagline">Desarrollador de Software</h2>
          <p className="inicio-desc">
            Bienvenido a mi portfolio. Actualmente estoy estoy estudiante de Ingenieria Informatica y trabajo como desarrollador de software en Accenture
          </p>
          <a href="#" className="inicio-cta-button">Ver mis proyectos</a>
        </div>

        <div className="inicio-image-area">
          <div className="inicio-circle">
            <img 
              src={miFoto}
              alt="Foto de perfil" 
              className="inicio-avatar"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Inicio;