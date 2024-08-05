import React from 'react';

const heroStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '0 20px',
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
  marginBottom: '30px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1em',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#61dafb',
  color: '#282c34',
  borderRadius: '5px',
};

const HeroSection: React.FC = () => {
  return (
    <div style={heroStyle}>
      <h1 style={h1Style}>Tu Nombre</h1>
      <h2 style={h2Style}>Ingeniero de Sistemas</h2>
      <p style={pStyle}>Breve descripción sobre ti.</p>
      <button style={buttonStyle}>Contacto</button>
    </div>
  );
};

export default HeroSection;
