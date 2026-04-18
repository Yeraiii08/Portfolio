import React from 'react';

const Contacto = () => {
  return (
    <section id="contact" style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
      <h2>Contactame</h2>
      <p>Puedes contactar conmigo mediante:</p>
      
      <div style={{ marginTop: '20px' }}>
        <p>📧 Email: <a href="mailto:ygarcia036@ikasle.ehu.eus" style={{ color: '#66b3ff' }}>ygarcia036@ikasle.ehu.eus</a></p>
        
        <p>💻 GitHub: <a href="https://github.com/Yeraiii08" target="_blank" rel="noreferrer" style={{ color: '#66b3ff' }}>github.com/Yeraiii08</a></p>
        
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/yerai-g-175a39252" target="_blank" rel="noreferrer" style={{ color: '#66b3ff' }}>Linkedin.com/in/yerai-g</a></p>
      </div>
    </section>
  );
};

export default Contacto;