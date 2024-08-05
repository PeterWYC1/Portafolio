import React from 'react';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  marginTop: 'auto',
};

const socialLinksStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  flexWrap: 'wrap',
};

const aStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
};

const aHoverStyle: React.CSSProperties = {
  textDecoration: 'underline' ,
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>Contacto: tu-email@example.com</p>
      <div style={socialLinksStyle}>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = aHoverStyle.textDecoration as string)}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = aStyle.textDecoration as string)}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = aHoverStyle.textDecoration as string)}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = aStyle.textDecoration as string)}
        >
          GitHub
        </a>
        {/* Añade más enlaces a redes sociales aquí */}
      </div>
    </footer>
  );
};

export default Footer;
