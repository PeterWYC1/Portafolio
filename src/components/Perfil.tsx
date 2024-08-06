import React from 'react';
import '../index.css';
import pp from './img/pp.jpg';


const perfilStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: '#11111f',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
  overflow: 'hidden',
};

const h1Style: React.CSSProperties = {
  fontSize: '3em',
  marginBottom: '10px',
};

const h2Style: React.CSSProperties = {
  fontSize: '2em',
  marginBottom: '20px',
};

const pStyle: React.CSSProperties = {
  fontSize: '1.2em',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1em',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#61dafb',
  color: '#11111f',
  borderRadius: '5px',
  marginBottom: '10px',
};

const profileImageStyle: React.CSSProperties = {
  margin: '40px',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #fff',
};

const bioStyle: React.CSSProperties = {
  maxWidth: '800px',
  width: '100%',
  padding: '0 20px',
};


const HeroSection: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = 'https://wa.link/6ede3t';
  };

  return (
    <div style={perfilStyle} className="hero-section">
      <h1 style={h1Style}>Pedro Sierra</h1>
      <h2 style={h2Style}>Estudiante de ingeniería de sistemas y computación</h2>
      <div style={bioStyle}>
      <p style={pStyle}>
        Soy un estudiante de la EIA en el programa de ingeniería de sistemas, soy apasionado por la analítica de datos y la inteligencia artificial, no he tenido experiencia profesional, pero he hecho parte de varios proyectos dentro de la universidad, donde mi rol principal ha sido como desarrollador Front end y FullStack en otras ocasiones.
      </p>
      </div>
      <img
        src= {pp}
        style={profileImageStyle}
      />
  
      <button style={buttonStyle} onClick={handleContactClick}>Contacto</button>
    </div>
  );
};

export default HeroSection;
