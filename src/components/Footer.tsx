import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#11111f',
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
  marginRight:'15px',
  marginTop:'10px'
};

const aHoverStyle: React.CSSProperties = {
  textDecoration: 'underline' ,
};
const iconStyle: React.CSSProperties = {
  
  marginLeft: '10px'
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>Contacto: Pedro.sierra68@eia.edu.co</p>
      <div style={socialLinksStyle}>
        <a
          href="https://www.instagram.com/pedro_sierra_a/"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = aHoverStyle.textDecoration as string)}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = aStyle.textDecoration as string)}
        >
          Instagram
          <FontAwesomeIcon icon={faInstagram} style={iconStyle}/>
        </a>
        <a
          href="https://github.com/PeterWYC1"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = aHoverStyle.textDecoration as string)}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = aStyle.textDecoration as string)}
        >
          
          GitHub
          <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        </a>
        {/* Añade más enlaces a redes sociales aquí */}
      </div>
    </footer>
  );
};

export default Footer;
