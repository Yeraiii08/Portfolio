import React from 'react';
import './Sobre_mi.css';

const SobreMi = () => {
  return (
    <section id="sobreMi" className="sobreMi-section">
      <div className="sobreMi-container">
        <h2 className="sobreMi-title">Sobre Mí</h2>
        <p>
          Soy un estudiante de Ingenieria Informatica. Este es mi nivel de tecnologias:
        </p>
        
        <div className="skills-container">
          <div className="skill-box">
            <span className="skill-name">HTML/CSS</span>
            <div className="progress-bg">
              <div className="progress-bar" style={{ width: '85%' }}>85%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="skill-name">JavaScript</span>
            <div className="progress-bg">
              <div className="progress-bar" style={{ width: '70%' }}>70%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="skill-name">React</span>
            <div className="progress-bg">
              <div className="progress-bar" style={{ width: '50%' }}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;